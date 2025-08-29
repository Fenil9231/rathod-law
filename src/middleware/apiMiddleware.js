/**
 * API Middleware for Next.js API routes
 * Provides common functionality like rate limiting, CORS, and error handling
 */

// Simple in-memory rate limiter (for production, use Redis or similar)
const rateLimitMap = new Map();

/**
 * Rate limiting middleware
 * @param {number} limit - Number of requests allowed per window
 * @param {number} windowMs - Time window in milliseconds
 */
export function rateLimit(limit = 10, windowMs = 60000) {
  return (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const key = `${ip}:${req.url}`;
    const now = Date.now();
    
    if (!rateLimitMap.has(key)) {
      rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
      return next();
    }
    
    const record = rateLimitMap.get(key);
    
    if (now > record.resetTime) {
      record.count = 1;
      record.resetTime = now + windowMs;
      return next();
    }
    
    if (record.count >= limit) {
      return res.status(429).json({
        error: 'Too many requests',
        message: `Rate limit exceeded. Try again in ${Math.ceil((record.resetTime - now) / 1000)} seconds.`
      });
    }
    
    record.count++;
    next();
  };
}

/**
 * CORS middleware
 */
export function cors(req, res, next) {
  const allowedOrigins = [
    'https://rathodlaw.com',
    'https://www.rathodlaw.com',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002'
  ];
  
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
}

/**
 * Method validation middleware
 * @param {string[]} allowedMethods - Array of allowed HTTP methods
 */
export function validateMethod(allowedMethods) {
  return (req, res, next) => {
    if (!allowedMethods.includes(req.method)) {
      return res.status(405).json({
        error: 'Method not allowed',
        allowed: allowedMethods
      });
    }
    next();
  };
}

/**
 * Request validation middleware
 * @param {Object} schema - Validation schema
 */
export function validateRequest(schema) {
  return (req, res, next) => {
    const { body } = req;
    const errors = [];
    
    // Basic validation
    if (schema.required) {
      schema.required.forEach(field => {
        if (!body[field] || (typeof body[field] === 'string' && body[field].trim() === '')) {
          errors.push(`${field} is required`);
        }
      });
    }
    
    if (schema.email && body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        errors.push('Invalid email format');
      }
    }
    
    if (errors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors
      });
    }
    
    next();
  };
}

/**
 * Error handling middleware
 */
export function errorHandler(error, req, res, next) {
  console.error('API Error:', error);
  
  // Don't expose internal errors in production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return res.status(500).json({
    error: 'Internal server error',
    message: isDevelopment ? error.message : 'Something went wrong',
    ...(isDevelopment && { stack: error.stack })
  });
}

/**
 * Compose multiple middlewares
 * @param {...Function} middlewares - Middleware functions
 */
export function compose(...middlewares) {
  return (req, res) => {
    let index = 0;
    
    function next(error) {
      if (error) {
        return errorHandler(error, req, res, next);
      }
      
      if (index >= middlewares.length) {
        return;
      }
      
      const middleware = middlewares[index++];
      
      try {
        middleware(req, res, next);
      } catch (error) {
        next(error);
      }
    }
    
    next();
  };
}

/**
 * Standard API wrapper with common middleware
 * @param {Function} handler - The actual API handler function
 * @param {Object} options - Configuration options
 */
export function withApiMiddleware(handler, options = {}) {
  const {
    methods = ['POST'],
    rateLimit: rateLimitOptions = { limit: 10, windowMs: 60000 },
    validation,
    cors: enableCors = true
  } = options;
  
  const middlewares = [];
  
  if (enableCors) {
    middlewares.push(cors);
  }
  
  middlewares.push(validateMethod(methods));
  
  if (rateLimitOptions) {
    middlewares.push(rateLimit(rateLimitOptions.limit, rateLimitOptions.windowMs));
  }
  
  if (validation) {
    middlewares.push(validateRequest(validation));
  }
  
  middlewares.push(async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  });
  
  return compose(...middlewares);
}
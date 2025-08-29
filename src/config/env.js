/**
 * Environment variable validation and configuration
 * This file ensures all required environment variables are properly set
 */

// Required environment variables for the application
const requiredEnvVars = {
  // Email configuration
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  FROM_EMAIL: process.env.FROM_EMAIL,
  
  // Application settings
  NODE_ENV: process.env.NODE_ENV || 'development',
  EMAIL_ENABLED: process.env.EMAIL_ENABLED || 'true',
};

// Optional environment variables with defaults
const optionalEnvVars = {
  SMTP_SECURE: process.env.SMTP_SECURE || 'false',
  SUPPORT_EMAIL: process.env.SUPPORT_EMAIL || process.env.ADMIN_EMAIL,
  SEND_CUSTOMER_COPY: process.env.SEND_CUSTOMER_COPY || 'true',
  EMAIL_RATE_LIMIT: process.env.EMAIL_RATE_LIMIT || '10',
};

/**
 * Validates that all required environment variables are set
 * @returns {Object} Validation result with success status and missing variables
 */
function validateEnvironment() {
  const missing = [];
  const warnings = [];
  
  // Check required variables
  Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value || value.trim() === '') {
      if (key.includes('SMTP') || key.includes('EMAIL')) {
        // Email vars are only required if email is enabled
        if (process.env.EMAIL_ENABLED !== 'false') {
          missing.push(key);
        }
      } else {
        missing.push(key);
      }
    }
  });
  
  // Check for development-specific warnings
  if (process.env.NODE_ENV === 'development') {
    if (!process.env.SMTP_HOST || process.env.SMTP_HOST.includes('your-')) {
      warnings.push('SMTP configuration appears to use placeholder values');
    }
  }
  
  return {
    success: missing.length === 0,
    missing,
    warnings,
    config: { ...requiredEnvVars, ...optionalEnvVars }
  };
}

/**
 * Gets the validated environment configuration
 * @returns {Object} Environment configuration object
 */
function getConfig() {
  const validation = validateEnvironment();
  
  if (!validation.success) {
    console.error('❌ Missing required environment variables:', validation.missing);
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing required environment variables: ${validation.missing.join(', ')}`);
    }
  }
  
  if (validation.warnings.length > 0) {
    validation.warnings.forEach(warning => {
      console.warn('⚠️ ', warning);
    });
  }
  
  return validation.config;
}

// Export the configuration
module.exports = {
  validateEnvironment,
  getConfig,
  config: getConfig()
};
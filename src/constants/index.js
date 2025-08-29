// Application constants and configuration

// API Endpoints
export const API_ENDPOINTS = {
  SEND_EMAIL: '/api/send-email',
  TEST_EMAIL: '/api/test-email'
};

// Form validation constants
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50
};

// Rate limiting constants
export const RATE_LIMITS = {
  EMAIL_SUBMISSIONS: {
    LIMIT: 5,
    WINDOW_MS: 60000 // 1 minute
  },
  API_REQUESTS: {
    LIMIT: 100,
    WINDOW_MS: 900000 // 15 minutes
  }
};

// Practice areas
export const PRACTICE_AREAS = [
  {
    id: 'traffic-violations',
    name: 'Traffic Violations',
    slug: 'traffic-violations',
    description: 'Expert defense for traffic tickets and violations'
  },
  {
    id: 'speeding-tickets',
    name: 'Speeding Tickets',
    slug: 'speeding-tickets',
    description: 'Professional representation for speeding violations'
  },
  {
    id: 'cell-phone-tickets',
    name: 'Cell Phone Tickets',
    slug: 'cell-phone-tickets',
    description: 'Defense against distracted driving charges'
  },
  {
    id: 'seat-belt-tickets',
    name: 'Seat Belt Tickets',
    slug: 'seat-belt-tickets',
    description: 'Representation for seat belt violations'
  },
  {
    id: 'demerit-points',
    name: 'Demerit Points',
    slug: 'demerit-points',
    description: 'Help with demerit point reduction and appeals'
  },
  {
    id: 'family-law',
    name: 'Family Law',
    slug: 'family-law',
    description: 'Comprehensive family law services'
  },
  {
    id: 'immigration-applications',
    name: 'Immigration Applications',
    slug: 'immigration-applications',
    description: 'Assistance with immigration applications and processes'
  },
  {
    id: 'immigration-appeals',
    name: 'Immigration Appeals',
    slug: 'immigration-appeals',
    description: 'Expert representation for immigration appeals'
  }
];

// Contact information
export const CONTACT_INFO = {
  PHONE: '(647) 977-5852',
  EMAIL: 'info@rtlaw.ca',
  ADDRESS: {
    STREET: '393 University Ave, Suite 1700',
    CITY: 'Toronto',
    PROVINCE: 'ON',
    POSTAL_CODE: 'M5G 1E6',
    COUNTRY: 'Canada'
  },
  BUSINESS_HOURS: {
    WEEKDAYS: '9:00 AM - 6:00 PM',
    SATURDAY: '10:00 AM - 4:00 PM',
    SUNDAY: 'Closed'
  }
};

// Social media links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/rtlaw',
  TWITTER: 'https://twitter.com/rtlaw',
  LINKEDIN: 'https://linkedin.com/company/rtlaw',
  INSTAGRAM: 'https://instagram.com/rtlaw'
};

// SEO constants
export const SEO = {
  DEFAULT_TITLE: 'RT Law - Professional Legal Services in Toronto',
  DEFAULT_DESCRIPTION: 'Expert legal representation for traffic violations, family law, and immigration matters in Toronto. Professional, experienced, and dedicated legal services.',
  DEFAULT_KEYWORDS: 'lawyer, legal services, Toronto, traffic violations, family law, immigration, legal representation',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://rtlaw.ca',
  ORGANIZATION_NAME: 'RT Law',
  ORGANIZATION_TYPE: 'LegalService'
};

// Form types
export const FORM_TYPES = {
  CONTACT: 'contact',
  SCHEDULE: 'schedule',
  CONSULTATION: 'consultation',
  FAQ: 'faq',
  BLOG_COMMENT: 'blog',
  GENERAL: 'general'
};

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
};

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  MESSAGE_TOO_SHORT: `Message must be at least ${VALIDATION.MIN_MESSAGE_LENGTH} characters`,
  MESSAGE_TOO_LONG: `Message must be less than ${VALIDATION.MAX_MESSAGE_LENGTH} characters`,
  NAME_TOO_SHORT: `Name must be at least ${VALIDATION.MIN_NAME_LENGTH} characters`,
  NAME_TOO_LONG: `Name must be less than ${VALIDATION.MAX_NAME_LENGTH} characters`,
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please try again later.',
  SERVER_ERROR: 'An error occurred. Please try again later.',
  EMAIL_SEND_FAILED: 'Failed to send email. Please try again or contact us directly.'
};
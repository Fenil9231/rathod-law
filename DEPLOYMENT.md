# Rathod Law Firm - Deployment Guide

## Environment Variables for Vercel

The following environment variables need to be set in your Vercel dashboard:

### Required SMTP Configuration
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=fenil.kothiya88@gmail.com
SMTP_PASS=skzq flph cfgi rtsy
```

### Optional Email Configuration
```
# Email addresses (defaults are set in config if not provided)
ADMIN_EMAIL=rathod@hplaw.org
FROM_EMAIL=fenil.kothiya88@gmail.com
SUPPORT_EMAIL=rathod@hplaw.org

# Email settings
EMAIL_ENABLED=true
SEND_CUSTOMER_COPY=true
EMAIL_RATE_LIMIT=10
```

## Deployment Steps

1. **Connect to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect this as a Next.js project

2. **Set Environment Variables**
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add all the SMTP variables listed above

3. **Deploy**
   - Vercel will automatically deploy when you push to your main branch
   - The build process will use the environment variables you've set

## Email Functionality

### Contact Forms
The website includes several contact forms:
- Main contact page (`/contact`)
- Home page contact form
- About page contact form
- Various service page contact forms

### Email Templates
- **Admin emails**: Sent to `rathod@hplaw.org` with form submission details
- **Customer confirmations**: Sent to the user who submitted the form

### Testing Email
After deployment, you can test email functionality by:
1. Visiting the contact page on your live site
2. Submitting a test form
3. Checking both the admin email and customer confirmation

### Email Test Endpoint
A test endpoint is available at `/api/test-email` (POST request) to verify email configuration.

## Important Notes

1. **Gmail App Password**: The `SMTP_PASS` should be a Gmail App Password, not your regular Gmail password
2. **From Address**: For Gmail SMTP, the from address should match the SMTP_USER email
3. **Production Only**: Emails are only sent in production environment (Vercel deployment)
4. **Rate Limiting**: Email sending is rate-limited to prevent abuse

## Troubleshooting

If emails are not working:
1. Check Vercel function logs for error messages
2. Verify all environment variables are set correctly
3. Ensure the Gmail App Password is valid
4. Test with the `/api/test-email` endpoint

## File Structure

```
src/
├── config/
│   └── email.js              # Email configuration
├── pages/
│   └── api/
│       ├── send-email.js     # Main email sending endpoint
│       └── test-email.js     # Email testing endpoint
├── templates/
│   ├── adminEmailTemplate.js # Admin email template
│   └── customerEmailTemplate.js # Customer confirmation template
└── components/
    └── contact/              # Contact form components
```
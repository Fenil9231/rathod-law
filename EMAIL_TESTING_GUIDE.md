# Email Testing Guide for Rathod Law Firm

## Testing Options for Email Functionality

Since you don't have admin email credentials yet, here are several free testing options:

## Option 1: Ethereal Email (Recommended for Testing)

**Best for:** Development and testing without sending real emails

1. Visit [https://ethereal.email/](https://ethereal.email/)
2. Click "Create Ethereal Account" to get free test credentials
3. You'll receive credentials like:
   ```
   Host: smtp.ethereal.email
   Port: 587
   Username: your-test-username@ethereal.email
   Password: generated-password
   ```
4. Update your `.env.local` file:
   ```env
   SMTP_HOST=smtp.ethereal.email
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-test-username@ethereal.email
   SMTP_PASS=generated-password
   ADMIN_EMAIL=test-admin@ethereal.email
   ```
5. All emails will be captured and viewable in the Ethereal web interface

## Option 2: Gmail with App Password

**Best for:** Real email testing with your personal Gmail

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new App Password for "Mail"
4. Update your `.env.local` file:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASS=your-16-character-app-password
   ADMIN_EMAIL=your-gmail@gmail.com
   ```

## Option 3: Mailtrap (Free Tier)

**Best for:** Professional email testing

1. Sign up at [https://mailtrap.io/](https://mailtrap.io/)
2. Create a new inbox in the Email Testing section
3. Get your SMTP credentials from the inbox settings
4. Update your `.env.local` file with Mailtrap credentials

## Option 4: Temporary Email Services

**For quick testing:**
- [10MinuteMail](https://10minutemail.com/)
- [TempMail](https://temp-mail.org/)
- Use these as client email addresses to test form submissions

## Testing Steps

1. **Setup Environment:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your chosen testing credentials
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Test Forms:**
   - Contact Form: `http://localhost:3000/contact`
   - Schedule Call: `http://localhost:3000/schedule-call`
   - Testimonial Form: `http://localhost:3000` (homepage)

4. **Verify Email Delivery:**
   - Check your testing service dashboard
   - Verify both admin and client emails are sent
   - Test different form validation scenarios

## What to Test

✅ **Form Submissions:**
- Valid form data submission
- Required field validation
- Email format validation
- Success/error message display

✅ **Email Content:**
- Admin notification emails
- Client confirmation emails
- Proper formatting and branding
- All form data included

✅ **Error Handling:**
- Network errors
- Invalid email configurations
- Server errors

## Troubleshooting

**Common Issues:**

1. **"Authentication failed"**
   - Check username/password
   - For Gmail: Ensure App Password is used, not regular password

2. **"Connection refused"**
   - Check SMTP host and port
   - Verify firewall settings

3. **"Self-signed certificate"**
   - Set `SMTP_SECURE=false` for development

4. **Emails not appearing**
   - Check spam/junk folders
   - Verify email addresses are correct
   - Check testing service dashboard

## Production Setup

When ready for production:
1. Get professional email service (Gmail Workspace, Outlook 365, etc.)
2. Update environment variables
3. Test thoroughly before going live
4. Set up proper DNS records (SPF, DKIM, DMARC)

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Rotate credentials regularly
- Use environment-specific configurations

---

**Need Help?** 
If you encounter issues, check the browser console and server logs for detailed error messages.
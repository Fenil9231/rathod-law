# Vercel Deployment Guide for Rathod Law

## 🚨 IMPORTANT: Production Safety Guidelines

This project is live on Vercel. Follow these guidelines carefully to avoid corruption:

### Pre-Deployment Checklist

1. **Always test locally first**
   ```bash
   npm run dev
   # Verify all functionality works
   ```

2. **Environment Variables Setup in Vercel Dashboard**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add these variables for production:
     ```
     SMTP_HOST=your-production-smtp-host
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=your-production-email@domain.com
     SMTP_PASS=your-production-app-password
     ADMIN_EMAIL=admin@rathodlaw.com
     FROM_EMAIL=noreply@rathodlaw.com
     SUPPORT_EMAIL=support@rathodlaw.com
     EMAIL_ENABLED=true
     SEND_CUSTOMER_COPY=true
     EMAIL_RATE_LIMIT=10
     NODE_ENV=production
     ```

3. **Files Excluded from Deployment** (via .vercelignore)
   - `.env` (local environment file)
   - `node_modules`
   - `.next` build cache
   - IDE files

### Current Configuration

#### Next.js Config (next.config.js)
```javascript
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // Prevents build failures from linting
  },
  typescript: {
    ignoreBuildErrors: true, // Prevents build failures from TS errors
  }
};
```

#### Vercel Config (vercel.json)
- Sitemap rewrite configured
- Static asset caching (1 year)
- Production environment variable

### Deployment Process

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Vercel Auto-Deploy**
   - Vercel automatically deploys from your connected Git repository
   - Monitor deployment in Vercel dashboard
   - Check deployment logs for any issues

### Known Issues & Solutions

#### Windows-Specific Build Issues
- **Issue**: `EISDIR` errors during local builds
- **Solution**: Development server works fine, Vercel handles production builds
- **Workaround**: Use `npm run dev` for local development

#### Email Configuration
- **Development**: Uses Ethereal Email for testing
- **Production**: Configure real SMTP credentials in Vercel dashboard

### Emergency Rollback

1. Go to Vercel Dashboard
2. Navigate to Deployments tab
3. Find the last working deployment
4. Click "Promote to Production"

### Best Practices

1. **Never edit files directly in production**
2. **Always test changes locally first**
3. **Use Vercel's preview deployments for testing**
4. **Keep environment variables secure**
5. **Monitor deployment logs**
6. **Backup important configurations**

### Contact Form Testing

Before deploying changes to contact forms:
1. Test locally with development SMTP
2. Verify form validation works
3. Check email templates render correctly
4. Test rate limiting functionality

### Performance Monitoring

- Use Vercel Analytics for performance insights
- Monitor Core Web Vitals
- Check for any console errors in production

---

**Remember**: When in doubt, create a preview deployment first before promoting to production!
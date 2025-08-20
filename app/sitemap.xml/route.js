export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rathodlaw.com';
  const currentDate = new Date().toISOString();

  // Define all static pages with their priorities and change frequencies
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/about-us', priority: '0.9', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    
    // Traffic ticket services - high priority
    { url: '/speeding-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/cell-phone-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/seat-belt-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/red-light-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/suspended-license', priority: '0.8', changefreq: 'monthly' },
    { url: '/demerit-points', priority: '0.8', changefreq: 'monthly' },
    { url: '/stunt-driving', priority: '0.8', changefreq: 'monthly' },
    
    // Other legal services
    { url: '/small-claims', priority: '0.7', changefreq: 'monthly' },
    { url: '/notary-services', priority: '0.7', changefreq: 'monthly' },
    
    // Team pages
    { url: '/team/kapil-rathod', priority: '0.7', changefreq: 'monthly' },
    
    // Legal pages
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
    { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
    
    // Schedule consultation
    { url: '/schedule-call', priority: '0.9', changefreq: 'monthly' },
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
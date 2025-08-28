// This file generates a dynamic sitemap for SEO

function generateSiteMap() {
  const baseUrl = 'https://rathodlaw.com';
  const currentDate = new Date().toISOString();
  
  // Define all legitimate pages with their priorities and change frequencies
  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/team', priority: '0.8', changefreq: 'monthly' },
    { url: '/practice-area', priority: '0.9', changefreq: 'monthly' },
    
    // Traffic violation pages
    { url: '/speeding-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/red-light-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/seat-belt-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/cell-phone-tickets', priority: '0.8', changefreq: 'monthly' },
    { url: '/stunt-driving', priority: '0.8', changefreq: 'monthly' },
    { url: '/license-suspension', priority: '0.8', changefreq: 'monthly' },
    { url: '/demerit-points', priority: '0.8', changefreq: 'monthly' },
    
    // Legal services pages
    { url: '/small-claims-court', priority: '0.8', changefreq: 'monthly' },
    { url: '/immigration-applications', priority: '0.9', changefreq: 'monthly' },
    { url: '/immigration-appeals', priority: '0.9', changefreq: 'monthly' },
    { url: '/refugee-appeals', priority: '0.9', changefreq: 'monthly' },
    { url: '/family-law', priority: '0.9', changefreq: 'monthly' },
    { url: '/notarization', priority: '0.7', changefreq: 'monthly' },
    
    // Team member pages
    { url: '/kapil-rathod', priority: '0.7', changefreq: 'monthly' },
    { url: '/saleema-panjwani', priority: '0.7', changefreq: 'monthly' },
    { url: '/lincy-gomez', priority: '0.7', changefreq: 'monthly' },
    
    // Other important pages
    { url: '/schedule-call', priority: '0.8', changefreq: 'monthly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-conditions', priority: '0.5', changefreq: 'yearly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(({ url, priority, changefreq }) => {
    return `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
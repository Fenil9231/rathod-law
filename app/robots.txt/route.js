export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /documentation/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services/
Allow: /team/
Allow: /speeding-tickets
Allow: /cell-phone-tickets
Allow: /seat-belt-tickets
Allow: /red-light-tickets
Allow: /suspended-license
Allow: /demerit-points
Allow: /small-claims
Allow: /stunt-driving
Allow: /notary-services

# Sitemap location
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rathodlaw.com'}/sitemap.xml

# Crawl delay
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
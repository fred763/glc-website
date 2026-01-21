// /app/sitemap.xml/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = "https://globalliquidationcompany.com"; // Change to your domain

  // Define static pages
  const staticPages = [
    "",
    "about",
    "art-antiques",
    "art-antiques/gallery",
    "auctions",
    "contact",
    "liquidations",
    "liquidations/estate-items",
    "locations",
    "locations/pasadena",
    "locations/san-clemente",
    "rugs",
    "rugs/appraisal",
    "rugs/cleaning-restoration",
    "rugs/gallery",
    "rugs/we-buy-rugs",
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (path) => `
      <url>
        <loc>${siteUrl}/${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

try {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const WEBSITE_URL = "https://micahjones.dev";

  const routes = ["/", "/blog"];

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${WEBSITE_URL}${route}</loc>
    <lastmod>${currentDate}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapContent);

  console.log("✅ Sitemap generated successfully!");
} catch (error) {
  console.error("❌ Error generating sitemap:", error);
  // Exit with error code 0 to not fail the build
  // We don't want a sitemap issue to prevent deployment
  process.exit(0);
}

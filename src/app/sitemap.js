const routes = [
  "",
  "/desarrolloWeb",
  "/ecommerce",
  "/appweb",
  "/marketingDigital",
  "/nosotros",
  "/contacto",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `https://webzait.cl${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

const router = new Navigo("/", { hash: true });

async function loadPage(pagePath) {
  try {
    const response = await fetch(pagePath);
    if (!response.ok) throw new Error("Failed to load page");
    const html = await response.text();
    document.querySelector("#app").innerHTML = html;
  } catch (error) {
    console.error(error);
    router.resolve();
    document.querySelector("#app").innerHTML = "<h1>Error loading page</h1><p>Something went wrong.</p>";
  }
}


router
  .on({
    "/": () => {
      loadPage("/pages/home.html");
    },
    "/products": () => {
      loadPage("/pages/products.html");
    },
  })
  .notFound(()=>loadPage("/pages/404.html"))
  .resolve();

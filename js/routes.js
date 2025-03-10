const router = new Navigo("/", { hash: true });

router
  .on({
    "/": () => {
      loadPage(router, "/pages/home.html", { name: "Hello" });
    },
    "/produtos": () => {
      loadPage(router, "/pages/products.html", { PRODUTOS: PRODUTOS });
    },
    "/produtos/:id": (params) => {
      const product = PRODUTOS.find(p => p.id === params.id);
      
      if (product) {
        loadPage(router, "/pages/product-details.html", { produto: product });
      } else {
        loadPage(router, "/pages/404.html");
      }
    },
  })
  .notFound(() => loadPage(router, "/pages/404.html"))
  .resolve();

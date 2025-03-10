const router = new Navigo("/", { hash: true });

router
  .on({
    "/": () => {
      loadPage(router, "/pages/home.html", { name: "Hello" });
    },
    "/produtos": () => {
      loadPage(router, "/pages/products.html");
    },
  })
  .notFound(() => loadPage(router, "/pages/404.html"))
  .resolve();

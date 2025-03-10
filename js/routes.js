const router = new Navigo("/", { hash: true });

router
    .on({
        "/": () => {
            loadPage(router, "/pages/home.html", { name: "Hello" });
        },
        "/produtos": (params) => {
            const queryParams = Object.fromEntries(new URLSearchParams(params.queryString));
            const filteredProducts = handleProductFilter(PRODUTOS, queryParams.search);
            loadPage(
                router,
                "/pages/products.html",
                { PRODUTOS: filteredProducts, searchQuery: queryParams.search || '' },
                () => {
                    handleBindProductSerch();
                }
            );
        },
        "/produtos/:slug": (params) => {
            const product = PRODUTOS.find((p) => p.slug === params.data.slug);
            if (product) {
                loadPage(router, "/pages/product-details.html", {
                    produto: product,
                });
            } else {
                loadPage(router, "/pages/404.html");
            }
        },
    })
    .notFound(() => loadPage(router, "/pages/404.html"))
    .resolve();

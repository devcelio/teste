import { Home, About, ProductDetail, ProductsGallery, PageNotFound } from "./views.js";

router.on({
    "/": Home,
    "/sobre": About,
    "/produtos": ProductsGallery,
    "/produtos/:slug": ProductDetail,
})
.notFound(PageNotFound)
.resolve();

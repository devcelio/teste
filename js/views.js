import { COMPANY, PRODUTOS } from "./database.js";
import { loadPage } from "./utils/page-utils.js";
import { handleBindProductSerch, handleProductFilter } from "./view-utils/produt-utils.js";

document.addEventListener("DOMContentLoaded", ()=>{
    document.title = COMPANY.nome    
})

export function Home() {
    loadPage(router, "/pages/home.html");
}


export function About() {
    loadPage(router, "/pages/about.html", COMPANY);
}


export function ProductsGallery(params) {
    
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
}


export function ProductDetail(params) {
    const product = PRODUTOS.find((p) => p.slug === params.data.slug);

    
    if (product) {
        loadPage(router, "/pages/product-details.html", {
            produto: product,
        });
    } else {
        loadPage(router, "/pages/404.html");
    }
}


export function PageNotFound() {
    loadPage(router, "/pages/404.html")
}
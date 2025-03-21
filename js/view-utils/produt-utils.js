export function handleProductFilter(products, search, fields = ['nome', 'fragrancia']) {
    if (!search) {
        return products;
    }
    const searchLower = search.toLowerCase();


    return products.filter((product) => {
        return fields.some((field) => {
            const fieldValue = product[field];
            return fieldValue && fieldValue.toLowerCase().includes(searchLower);
        });
    });
}


export function handleBindProductSerch() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    let lastValue = searchInput.value;

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        router.navigate(`/produtos?search=${encodeURIComponent(query)}`);
    });

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchButton.click();
        }
    });

    searchInput.addEventListener('input', function() {
        if (searchInput.value === '' && lastValue !== '') {
            searchButton.click();
        }
        lastValue = searchInput.value;
    });
}
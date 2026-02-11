document.addEventListener("DOMContentLoaded", () => {
    
    // Footer Dates
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Product Array
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    // Populate Select (only if exists)
    const productSelect = document.getElementById("product");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Review Counter (only on review page)
    const reviewCountDisplay = document.getElementById("reviewCount");
    if (reviewCountDisplay) {
        let count = localStorage.getItem("reviewCount");
        count = count ? parseInt(count) : 0;
        count++;
        localStorage.setItem("reviewCount", count);
        reviewCountDisplay.textContent = count;
    }

});
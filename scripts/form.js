const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();
const modifiedDate = new Date(document.lastModified);

// Output Current Year
currentYear.innerHTML = ` <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		year: "numeric"
	}
).format(today)}</span>`;

// Output Last Modified Date
lastModified.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
        timeStyle: "medium"
	}
).format(modifiedDate)}</span>`;

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate select dynamically
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // ID used as value
    option.textContent = product.name; // Name used as display
    productSelect.appendChild(option);
});

// Get current count from local storage
let count = localStorage.getItem('reviewCount');
count = count ? perseInt(count) : 0;

// Increment for submission
count += 1;

// Store back in local storage
localStorage.setItem('reviewCount', count);

// Display count
document.getElementById('reviewCount').textContent = count;
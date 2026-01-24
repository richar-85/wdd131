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

const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        
        const isOpen = navMenu.classList.contains("open");
        
        menuButton.textContent = isOpen ? "✖" : "☰";
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}
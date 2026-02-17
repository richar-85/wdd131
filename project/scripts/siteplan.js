document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.querySelector("#currentYear");
    const lastModified = document.querySelector("#lastModified");

    // Current Year
    if (currentYear) {
        const today = new Date();
        const formattedYear = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(today);
        currentYear.innerHTML = `<span class="highlight">${formattedYear}</span>`;
    }

    // Last Modified
    if (lastModified) {
        const modifiedDate = new Date(document.lastModified);
        const formattedModified = new Intl.DateTimeFormat("en-US", {
            dateStyle: "short",
            timeStyle: "medium"
        }).format(modifiedDate);

        lastModified.innerHTML = `Last Modification: <span class="highlight">${formattedModified}</span>`;
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector("#menuBtn");
    const primaryNav = document.querySelector("#primaryNav");
    
    if (menuBtn && primaryNav) {
        menuBtn.addEventListener("click", () => {
            const isOpen = primaryNav.classList.toggle("open");
            menuBtn.innerHTML = isOpen ? "✖" : "☰";
            menuBtn.setAttribute("aria-expanded", isOpen);
        });

        // Close menu if window resized to large screen
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                primaryNav.classList.remove("open");
                menuBtn.innerHTML = "☰";
                menuBtn.setAttribute("aria-expanded", false);
            }
        });
    }

    // Mobile Menu Toggle Remains Open After Link is clicked
    //const menuBtn = document.querySelector("#menuBtn");
    //const primaryNav = document.querySelector("#primaryNav");

    //if (menuBtn && primaryNav) {

        // Restore saved state
        //if (localStorage.getItem("menuOpen") === "true") {
            //primaryNav.classList.add("open");
            //menuBtn.innerHTML = "✖";
            //menuBtn.setAttribute("aria-expanded", true);
        ///}

        //menuBtn.addEventListener("click", () => {
            //const isOpen = primaryNav.classList.toggle("open");

            //menuBtn.innerHTML = isOpen ? "✖" : "☰";
            //menuBtn.setAttribute("aria-expanded", isOpen);

            // Save state
            //localStorage.setItem("menuOpen", isOpen);
        //});

        //window.addEventListener("resize", () => {
            //if (window.innerWidth >= 768) {
                //primaryNav.classList.remove("open");
                //menuBtn.innerHTML = "☰";
                //menuBtn.setAttribute("aria-expanded", false);
                //localStorage.setItem("menuOpen", false);
            //}
        //});
    //}
});
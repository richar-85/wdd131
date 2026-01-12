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
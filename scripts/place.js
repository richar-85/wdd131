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


// Static weather values (must match displayed values)
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Select wind chill span
const windChillElement = document.querySelector("#windchill");

// Wind chill calculation (metric)
function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    const chill =
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16);

    return `${chill.toFixed(1)} °C`;
  } else {
    return "N/A";
  }
}

// Display wind chill when page loads
windChillElement.textContent = calculateWindChill(temperature, windSpeed);
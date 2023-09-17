// Get the current year
const currentYear = new Date().getFullYear();

// Copyright owner information
const copyrightOwner = "Maxwell Iweh";
const countryDisplay = document.getElementById("country-display");

// this will update copy right info on the footer
document.getElementById("copyright-year").textContent = `© ${currentYear} ${copyrightOwner}`;
document.getElementById("copyright-owner").textContent = `Copyright Owner: ${copyrightOwner}`;
// this displays my country name
const countryName = "Nigeria"; // shows my coutry name
countryDisplay.textContent = `Country: ${countryName}`;
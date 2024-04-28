// Dynamically output current year in footer
document.getElementById("currentYear").innerText = new Date().getFullYear();

// Dynamically output last modified date in footer
document.getElementById("lastModified").innerText = "Last Modified: " + document.lastModified;
// Get the current date and time
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

// Construct the information string
const informationString = `Current Date: ${currentDate}<br>Current Time: ${currentTime}`;

// Insert the information string into the section
document.getElementById("informationContent").innerHTML = informationString;

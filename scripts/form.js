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

document.addEventListener("DOMContentLoaded", function () {
    // Get the information content div
    var informationContent = document.getElementById("informationContent");

    // Create a paragraph element to display the visit counter
    var visitCounter = document.createElement("p");

    // Retrieve the visit count from local storage
    var visitCount = localStorage.getItem("visitCount");

    // Check if visit count exists in local storage
    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    } else {
        visitCount = 1;
    }

    // Update the visit count in local storage
    localStorage.setItem("visitCount", visitCount);

    // Set the text content of the visit counter paragraph
    visitCounter.textContent = "Page visit count: " + visitCount;

    // Append the visit counter to the information content div
    informationContent.appendChild(visitCounter);
});



document.getElementById("confirm_password").addEventListener("input", function () {
    var password = document.getElementById("password").value;
    var confirm_password = this.value;

    if (password !== confirm_password) {
        alert("Passwords do not match!");
        document.getElementById("password").value = "";
        this.value = "";
        document.getElementById("password").focus();
    }
});

document.getElementById("rating").addEventListener("input", function () {
    document.getElementById("ratingValue").textContent = this.value;
});

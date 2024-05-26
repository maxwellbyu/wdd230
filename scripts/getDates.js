document.addEventListener("DOMContentLoaded", function () {
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

    // Fetch temperature data from OpenWeatherMap API
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={64c6f0e58fd83e676d52c24cd1691124}";
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract temperature from API response
            const temperature = data.main.temp;

            // Display temperature in HTML element
            document.getElementById("temperature").innerHTML = "Temperature: " + temperature + " °C";
        })
        .catch(error => {
            console.error('Error fetching temperature data:', error);
        });
});


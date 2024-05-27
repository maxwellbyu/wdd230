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


document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '64c6f0e58fd83e676d52c24cd1691124';
    const city = 'Benin City';

    const weatherElement = document.getElementById('weather');
    const visitCountElement = document.getElementById('visit-count');


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const weather = data.weather[0].description;
            weatherElement.innerHTML = `Temperature: ${temp}&#8451; <br> Condition: ${weather}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            weatherElement.innerHTML = 'Unable to retrieve weather information at this time.';
        });


    if (typeof (Storage) !== "undefined") {
        let visitCount = localStorage.getItem('visitCount');
        if (visitCount) {
            visitCount = parseInt(visitCount) + 1;
        } else {
            visitCount = 1;
        }
        localStorage.setItem('visitCount', visitCount);
        visitCountElement.innerHTML = `Page Visits: ${visitCount}`;
    } else {
        visitCountElement.innerHTML = 'Page visit count is not supported by your browser.';
    }
});


// scripts.js
document.getElementById('addLinkButton').addEventListener('click', addLink);

function addLink() {
    const url = prompt('Enter the URL:');
    const text = prompt('Enter the link text:');

    if (url && text) {
        const linkContainer = document.getElementById('linkContainer');
        const newLink = document.createElement('a');
        newLink.href = url;
        newLink.textContent = text;
        newLink.className = 'dynamic-link';
        linkContainer.appendChild(newLink);
    } else {
        alert('URL and link text are required!');
    }
}

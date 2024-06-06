document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImage.classList.add("lazy-loaded");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        let lazyLoad = function () {
            let active = false;

            if (active === false) {
                active = true;

                setTimeout(function () {
                    lazyImages.forEach(function (lazyImage) {
                        if (
                            lazyImage.getBoundingClientRect().top <= window.innerHeight &&
                            lazyImage.getBoundingClientRect().bottom >= 0 &&
                            getComputedStyle(lazyImage).display !== "none"
                        ) {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");
                            lazyImage.classList.add("lazy-loaded");

                            lazyImages = lazyImages.filter(function (image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '64c6f0e58fd83e676d52c24cd1691124'; // Replace with your actual API key
    const city = 'Benin City'; // Replace with the desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherContent = document.getElementById('weather-content');
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const cityName = data.name;
                weatherContent.innerHTML = `The weather in ${cityName} is currently ${weatherDescription} with a temperature of ${temperature}°C.`;
            } else {
                weatherContent.innerHTML = 'Weather information could not be retrieved.';
            }
        })
        .catch(error => {
            const weatherContent = document.getElementById('weather-content');
            weatherContent.innerHTML = 'An error occurred while fetching weather information.';
            console.error('Error fetching weather data:', error);
        });
});









// document.addEventListener("DOMContentLoaded", function () {
//     // Get the last modification date of the HTML document
//     var lastModified = document.lastModified;

//     // Display the last modification date
//     var lastModifiedSpan = document.getElementById("lastModified");
//     lastModifiedSpan.textContent = lastModified;
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Get the last modification date of the HTML document
//     var lastModified = document.lastModified;

//     // Display the last modification date
//     var lastModifiedSpan = document.getElementById("lastModified");
//     lastModifiedSpan.textContent = lastModified;
// });


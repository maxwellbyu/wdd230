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


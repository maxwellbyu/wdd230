document.addEventListener("DOMContentLoaded", function () {
    // Get the last modification date of the HTML document
    var lastModified = document.lastModified;

    // Display the last modification date
    var lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = lastModified;
});

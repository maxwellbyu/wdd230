document.addEventListener("DOMContentLoaded", function () {
    var lastModified = document.lastModified;
    var footer = document.getElementById("lastModified");
    footer.textContent = "Last modified: " + lastModified;
});

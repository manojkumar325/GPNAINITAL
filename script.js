document.addEventListener("DOMContentLoaded", function () {
    const dropdownParents = document.querySelectorAll("ul li > a");

    dropdownParents.forEach(parent => {
        const dropdown = parent.nextElementSibling;

        if (dropdown && dropdown.classList.contains("dropdown")) {
            parent.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default link action
                dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
            });

            // Stop dropdown from closing when clicking inside it
            dropdown.addEventListener("click", function (event) {
                event.stopPropagation();
            });

            // Close dropdown when clicking anywhere else on the page
            document.addEventListener("click", function (event) {
                if (!parent.contains(event.target) && !dropdown.contains(event.target)) {
                    dropdown.style.display = "none";
                }
            });
        }
    });
});

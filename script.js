document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let nameElement = document.getElementById("animated-name");
    let nameText = "=> MUE ERIC M.";
    let index = 0;

    function typeText() {
        if (index < nameText.length) {
            nameElement.innerHTML += nameText.charAt(index);
            index++;
            setTimeout(typeText, 150);
        }
    }

    typeText();
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    // Smooth Scrolling
    document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close Sidebar on Mobile
            if (window.innerWidth < 768) {
                sidebar.style.transform = "translateX(-100%)";
                mainContent.style.marginLeft = "0"; // Reset margin on close
            }
        });
    });

    // Toggle Sidebar on Mobile
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        if (sidebar.style.transform === "translateX(0px)") {
            sidebar.style.transform = "translateX(-100%)";
            mainContent.style.marginLeft = "0";
        } else {
            sidebar.style.transform = "translateX(0px)";
            mainContent.style.marginLeft = "250px";
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    let formData = new FormData(this);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("formResponse").innerHTML = data;
    })
    .catch(error => {
        document.getElementById("formResponse").innerHTML = "An error occurred. Please try again.";
    });

    // Clear the form after submission
    this.reset();
});

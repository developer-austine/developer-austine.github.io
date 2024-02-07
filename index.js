/* =====================================Preloader design=================================== */
const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#page-content");

window.addEventListener("load", () => {
    loaderContainer.classList.add("hidden");
    pageContent.classList.add("visible");
});

/* =====================================Toggle Icon NavbarS=================================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("navbar");
const fullName = document.getElementById("name");
const eMail = document.getElementById("email").value;
const phoneNumber = document.getElementById("phone").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

/* =====================================Scroll Section Active Link=================================== */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};

/* =====================================sticky navbar=================================== */
let header = document.querySelector("header");

header.classList.toggle("sticky", window.screenY > 100);

/* ===================================== Remove Toggle Icon and Navbar when click navbar link(scroll)=================================== */

menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

/* ===================================== Scroll reveal=================================== */

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
    ".home-img, .services-container, .projects-box, .contact form",
    { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* ===================================== typed js=================================== */
const typed = new Typed(".multiple-text", {
    strings: [
        "FullStack Developer",
        "Graphic Designer",
        "Web Designer",
        "App Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/* =====================================Working2 active Contact Form =================================== */

function sendMail() {
    const bodyMessage =
        "<strong>Full Name:</strong> " +
        document.getElementById("name").value +
        "<br><strong>Email:</strong> " +
        document.getElementById("email").value +
        "<br><strong>Phone Number:</strong> " +
        document.getElementById("phone").value +
        "<br><strong>Message:</strong> " +
        document.getElementById("message").value;
    Email.send({
        SecureToken: "df049fb6-5228-4d18-a432-82c77d326ff6",
        To: "austinealex369@gmail.com",
        From: "austinealex369@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: bodyMessage,
    }).then((message) => {
        if (message === "OK") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message sent successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    });
}

/* =====================================preloader page login =================================== */

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

// Select all the sections and corresponding nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    // Determine the section currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {  // Adjust the offset as needed
            current = section.getAttribute("id");
        }
    });

    // Add/remove the active class to/from the nav links
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-80px"; // Adjust the value based on your navbar height
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

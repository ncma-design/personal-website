const gallery = document.querySelector(".gallery");

const images = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, {
    root: gallery,
    threshold: 0.2
});

images.forEach((img) => {
    observer.observe(img);
});
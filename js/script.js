document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Resaltar el menú al hacer scroll
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Animaciones de entrada en las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Efecto en los proyectos
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1) rotate(2deg)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1) rotate(0)";
        });
    });

    // Carrusel de educación
    let index = 0;
    const slide = document.querySelector(".educacion-slide");
    const images = document.querySelectorAll(".educacion-slide img");
    const textDisplay = document.querySelector(".educacion-texto");
    const texts = Array.from(images).map(img => img.alt);

    function cambiarImagen() {
        index = (index + 1) % images.length;
        slide.style.transform = `translateX(-${index * 100}%)`;
        textDisplay.textContent = texts[index];
    }
    setInterval(cambiarImagen, 10000);
});
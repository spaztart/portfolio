document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const btn = document.querySelector('.btn');

    btn.addEventListener("mouseenter", function () {
        gsap.to(this, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.inOut"
        });
    });

    btn.addEventListener("mouseleave", function () {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut"
        });
    });
});
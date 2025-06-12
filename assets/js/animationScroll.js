document.addEventListener('DOMContentLoaded', function () {
    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    // Animation des sections au scroll
    const sections = document.querySelectorAll('.section-fade');
    // Fonction pour vérifier si un élément est visible
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    // Fonction pour animer les éléments visibles
    function animateOnScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section) && !section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        });
    }
    // Vérifier les éléments visibles au chargement
    animateOnScroll();
    // Vérifier les éléments visibles au scroll
    window.addEventListener('scroll', animateOnScroll);
});

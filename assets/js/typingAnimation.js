
document.addEventListener('DOMContentLoaded', function () {
    const phrases = [
        "Alternance - Data Analyst/Data Management",
        "Double expertise en ingénierie logicielle & data", 
        "Étudiant BUT • Futur ingénieur ESEO",
        "Certifié Google Advanced Data Analytics"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedElement = document.getElementById('typed-text');
    
    if (typedElement) {
        function typePhrase() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000; // Pause à la fin
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause avant de commencer la nouvelle phrase
            }
            
            setTimeout(typePhrase, typeSpeed);
        }
        
        // Démarrer l'animation
        typePhrase();
    }
    
    // Fallback pour l'ancienne version avec Typed.js
    const typedTextSpan = document.getElementById('typed-text-target');
    if (typedTextSpan) {
        const options = {
            strings: ['solutions numériques.', 'expériences web.', 'applications mobiles.', 'interfaces intuitives.'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true
        };

        const typed = new Typed('#typed-text-target', options);
    }
});

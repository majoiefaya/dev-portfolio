document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton') || document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobileMenu') || document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                if (mobileMenuButton.tagName === 'BUTTON') {
                    mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
                }
            } else {
                mobileMenu.classList.add('hidden');
                if (mobileMenuButton.tagName === 'BUTTON') {
                    mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
                }
            }
        });
    }
});

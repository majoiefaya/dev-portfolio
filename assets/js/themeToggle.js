document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    if (!themeToggle) return;

    // Vérifier si un thème est déjà stocké
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
        themeToggle.innerHTML = '<i class="ri-moon-line ri-lg"></i>';
    } else {
        themeToggle.innerHTML = '<i class="ri-sun-line ri-lg"></i>';
    }

    // Basculer entre les thèmes
    themeToggle.addEventListener('click', function () {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="ri-sun-line ri-lg"></i>';
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="ri-moon-line ri-lg"></i>';
        }
    });
});

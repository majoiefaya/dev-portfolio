document.addEventListener('DOMContentLoaded', function() {
    // Cette fonction simule le chargement des données du projet depuis une API ou un fichier JSON
    // Dans une implémentation réelle, vous récupéreriez l'ID du projet depuis l'URL
    // et chargeriez les données correspondantes

    function getProjectIdFromUrl() {
        // Dans une implémentation réelle, vous extrairiez l'ID du projet de l'URL
        // Par exemple: const urlParams = new URLSearchParams(window.location.search);
        // return urlParams.get('id');
        return 'project1'; // Valeur par défaut pour la démonstration
    }

    // Simulation de données de projets
    const projectsData = {
        'project1': {
            title: 'Application de Gestion de Tâches',
            description: 'Cette application de gestion de tâches a été conçue pour aider les équipes à organiser leur travail de manière efficace. Elle offre une interface intuitive permettant aux utilisateurs de créer, assigner et suivre des tâches en temps réel.',
            mainImage: 'https://readdy.ai/api/search-image?query=modern%20task%20management%20application%20interface%20with%20clean%20design%2C%20showing%20task%20lists%2C%20calendar%20view%2C%20and%20statistics%20dashboard%20on%20a%20laptop%20screen%2C%20professional%20UI%2FUX%20design%2C%20high%20quality%20render&width=1200&height=600&seq=1&orientation=landscape'
        },
        'project2': {
            title: 'Plateforme E-commerce',
            description: 'Site de commerce électronique avec système de paiement intégré et gestion des stocks en temps réel.',
            mainImage: 'https://readdy.ai/api/search-image?query=e-commerce%20website%20interface%20with%20product%20listings%20and%20shopping%20cart%20on%20laptop%20screen&width=1200&height=600&seq=9&orientation=landscape'
        }
        // Ajoutez d'autres projets selon vos besoins
    };

    // Charger les données du projet
    function loadProjectData() {
        const projectId = getProjectIdFromUrl();
        const projectData = projectsData[projectId];

        if (projectData) {
            document.getElementById('projectTitle').textContent = projectData.title;
            document.getElementById('projectDescription').textContent = projectData.description;
            document.getElementById('projectMainImage').src = projectData.mainImage;
            // Mettre à jour d'autres éléments selon vos besoins
        }
    }

    // Charger les données du projet
    loadProjectData();
});

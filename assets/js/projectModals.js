document.addEventListener('DOMContentLoaded', function () {
    // Ouvrir les modals de projet
    const projectButtons = document.querySelectorAll('.view-project-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectCard = this.closest('.project-card');
            const projectId = projectCard.dataset.project;
            const modal = document.getElementById(`project-modal-${projectId}`);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    // Fermer les modals
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.dataset.modal;
            const modal = document.getElementById(`project-modal-${modalId}`);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    // Fermer les modals en cliquant sur l'overlay
    const overlays = document.querySelectorAll('[id^="modal-overlay-"]');
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function () {
            const modalId = this.id.split('-').pop();
            const modal = document.getElementById(`project-modal-${modalId}`);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});

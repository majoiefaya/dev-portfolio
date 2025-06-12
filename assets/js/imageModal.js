document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    const viewImageButtons = document.querySelectorAll('.view-image-btn');

    if (!imageModal || !modalImage || !closeModal) return;

    viewImageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.closest('.gallery-image').querySelector('img').src;
            modalImage.src = imgSrc;
            imageModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', function() {
        imageModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
            imageModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
});

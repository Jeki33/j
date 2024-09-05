document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play');
    const modal = document.getElementById('videoModal');
    const closeModal = document.querySelector('.modal .close');
    const video = document.getElementById('video');

    playButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        video.play();
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        video.pause();
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            video.pause();
        }
    });
});

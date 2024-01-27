window.addEventListener('load', function() {
    document.getElementById('loading').style.display = 'none';
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
// Add 3D parallax effect
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container-3d');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset position when mouse leaves
document.querySelector('.container-3d').addEventListener('mouseleave', () => {
    document.querySelector('.container-3d').style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Active link highlighting
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

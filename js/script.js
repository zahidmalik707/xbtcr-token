// Enhanced Flashing Animation
const logo = document.getElementById('flashing-logo');
const colors = ['#ff6b00', '#ff9500', '#ffaa00', '#ffc300'];
let currentColor = 0;

function flashLogo() {
    logo.style.filter = `drop-shadow(0 0 15px ${colors[currentColor]})`;
    currentColor = (currentColor + 1) % colors.length;
}

setInterval(flashLogo, 500);

// Mobile Menu Toggle
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
mobileMenuToggle.style.display = 'none';
mobileMenuToggle.style.fontSize = '1.5rem';
mobileMenuToggle.style.cursor = 'pointer';
mobileMenuToggle.style.color = 'white';
document.querySelector('nav').appendChild(mobileMenuToggle);

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

mobileMenuToggle.addEventListener('click', toggleMenu);

function handleResize() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        mobileMenuToggle.style.display = 'block';
        navLinks.style.display = 'none';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
        navLinks.style.padding = '1rem 0';
    } else {
        mobileMenuToggle.style.display = 'none';
        navLinks.style.display = 'flex';
        navLinks.style.position = 'static';
        navLinks.style.background = 'transparent';
    }
}

window.addEventListener('resize', handleResize);
handleResize();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

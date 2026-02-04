const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.drawer-close');
const overlay = document.getElementById('overlay');
const drawer = document.getElementById('mobileMenu');

function openMenu() {
    document.body.classList.add('menu-open');
    openBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
    document.body.classList.remove('menu-open');
    openBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

// Close when clicking a link
document.querySelectorAll('.drawer-nav a').forEach(a => {
    a.addEventListener('click', closeMenu);
});

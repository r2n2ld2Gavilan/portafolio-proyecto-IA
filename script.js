// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function setTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Cambiar ícono
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
    
    // Cambiar meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    metaTheme.setAttribute('content', theme === 'dark' ? '#0d6efd' : '#0d6efd');
}

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// Formulario
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'Enviando... <i class="bi bi-hourglass"></i>';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('✅ ¡Mensaje enviado con éxito! Gracias por contactarme.');
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1200);
});
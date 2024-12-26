document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Navigating to: ${this.textContent}`);
    });
});
document.querySelectorAll('.heading').forEach(heading => {
  heading.addEventListener('click', () => {
    const content = heading.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    heading.classList.toggle('expanded');
  });
});
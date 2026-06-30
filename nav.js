document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('nav ul');
  const nav = document.querySelector('nav');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('show');
  });

  // Close menu when clicking a link
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('show') && !nav.contains(e.target)) {
      menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

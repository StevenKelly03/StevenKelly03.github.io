document.addEventListener('DOMContentLoaded', () => {

  // Animate sections in on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.cv-section').forEach(el => io.observe(el));

  // Active nav highlight on scroll
  const sections = document.querySelectorAll('[data-section]');
  const navItems = document.querySelectorAll('.nav-item[href^="#"]');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navItems.forEach(n => n.classList.remove('active'));
      const match = document.querySelector(`.nav-item[href="#${e.target.id}"]`);
      if (match) match.classList.add('active');
    });
  }, { threshold: 0.4, rootMargin: '-10% 0px -60% 0px' });

  sections.forEach(s => navObserver.observe(s));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
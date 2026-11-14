/**
 * PORTFOLIO JAVASCRIPT - KARAN
 * Simple, lightweight script for footer year and smooth scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
  // Current Year in Footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        window.scrollTo({
          top: targetEl.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

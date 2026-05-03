// Main Interactivity Hub
document.addEventListener('DOMContentLoaded', () => {
  // Sticky header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if(hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetHash = this.getAttribute('href');
      if (targetHash.startsWith('#') && targetHash.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetHash);
        if(targetElement) {
            navLinks.classList.remove('active');
            const icon = hamburger?.querySelector('i');
            if(icon) {
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            }
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
      }
    });
  });
});

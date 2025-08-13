// Script for mobile navigation toggle and scroll animations
// This script adds animations to reveal sections when they come into view
// and focuses attention on project cards.// Script for mobile navigation toggle and scroll animations
// This script adds animations to reveal sections when they come into view// and focuses attention on project cards.
// Script for mobile navigation toggle and scroll animations
// This script adds animation to reveal sections when they come into view
// and focuses attention on project cards.

ocument.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('nav ul');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Add 'hidden' class to elements that should animate in
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) heroContent.classList.add('hidden');

  // Feature cards (services) on the homepage
  const featureCards = document.querySelectorAll('.cards .card, .features .card');
  featureCards.forEach(card => card.classList.add('hidden'));

  // Project cards on the projects page
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => card.classList.add('hidden'));

  // Call-to-action section
  const ctaSection = document.querySelector('.cta');
  if (ctaSection) ctaSection.classList.add('hidden');

  // Intersection Observer to reveal elements when they enter the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all hidden elements
  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
  });
});o// Script for mobile navigation
// 
cument.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('nav ul');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    // Close navigation when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Add 'hidden' class to elements that should animate in
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) heroContent.classList.add('hidden');

  // Feature cards (services) on the homepage
  const featureCards = document.querySelectorAll('.cards .card, .features .card');
  featureCards.forEach(card => card.classList.add('hidden'));

  // Project cards on the projects page
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => card.classList.add('hidden'));

  // Call-to-action section
  const ctaSection = document.querySelector('.cta');
  if (ctaSection) ctaSection.classList.add('hidden');

  // Intersection Observer to reveal elements when they enter the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all hidden elements
  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
  });
});document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('nav ul');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    // Close navigation when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Add 'hidden' class to elements that should animate in
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) heroContent.classList.add('hidden');

  // Feature cards (services) on the homepage
  const featureCards = document.querySelectorAll('.cards .card, .features .card');
  featureCards.forEach(card => card.classList.add('hidden'));

  // Project cards on the projects page
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => card.classList.add('hidden'));

  // Call-to-action section
  const ctaSection = document.querySelector('.cta');
  if (ctaSection) ctaSection.classList.add('hidden');

  // Intersection Observer to reveal elements when they enter the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all hidden elements
  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
});
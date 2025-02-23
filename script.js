// script.js
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const closeDashboard = document.querySelector('.close-dashboard');
  const mobileDashboard = document.querySelector('.mobile-dashboard');

  mobileMenuToggle.addEventListener('click', function() {
      mobileDashboard.classList.add('active');
  });

  closeDashboard.addEventListener('click', function() {
      mobileDashboard.classList.remove('active');
  });
});
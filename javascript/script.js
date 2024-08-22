// Get the navigation toggle button and the navbar element
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

// Add a click event listener to the toggle button
navToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the toggle button and the navbar
  navToggle.classList.toggle('active');
  navbar.classList.toggle('active');
});
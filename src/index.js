// Imports, most of my DOM manipulation has been moved to other files.
import { loadHome } from './page-loaders/load-home.js';
import { loadContact } from './page-loaders/load-contact.js';
import { loadServices } from './page-loaders/load-services.js';

// Simple Tool to make my code shorter.
function $(element) {
  return document.querySelector(element);
}

// Default Page to Load is the Home Page
loadHome();

// Select Hamburger Menu Icon and Navbar Button Container Element
const menuBtn = $('.menu-btn');
const navBtns = $('.navBtns');

// Select main page content container element.
const main = $('main');

// Select each idividual navbar button
const home = $('#home');
const services = $('#services');
const about = $('#about');
const contact = $('#contact');
const testimonials = $('#testimonials');

// The navbar menu will be closed on page load
let menuOpen = false;

// When the hamburger icon is clicked...
menuBtn.addEventListener('click', () => {
  // If the navbar is currently closed...
  if (!menuOpen) {
    // Add the class 'shown' to the navBar element, scrolling it right into view.
    // Also add 'open' to the menuBtn turning it into an 'X'.
    menuBtn.classList.add('open');
    navBtns.classList.add('shown');
    menuOpen = true;
  } else {
    // Scroll the navbar left out of view.
    // Turn the menuBtn back into a hamburger.
    menuBtn.classList.remove('open');
    navBtns.classList.remove('shown');
    menuOpen =  false;
  }
});

home.addEventListener('click', () => {
  // Load the Home page content.
  loadHome();

  // Also close the navbar menu.
  menuBtn.classList.remove('open');
  navBtns.classList.remove('shown');
  menuOpen =  false;
})

services.addEventListener('click', () => {
  // Load the Services content
  loadServices();

  // Also close the navbar menu.
  menuBtn.classList.remove('open');
  navBtns.classList.remove('shown');
  menuOpen =  false;
})

about.addEventListener('click', () => {
  // Load the About Us content
  main.innerHTML = "About Us Content";

  // Also close the navbar menu.
  menuBtn.classList.remove('open');
  navBtns.classList.remove('shown');
  menuOpen =  false;
})

contact.addEventListener('click', () => {
  // Load Contact Content
  loadContact();

  // Also close the navbar menu.
  menuBtn.classList.remove('open');
  navBtns.classList.remove('shown');
  menuOpen =  false;
})

testimonials.addEventListener('click', () => {
  // load the testimonials content
  main.innerHTML = "Testimonials Content";

  // Also close the navbar menu.
  menuBtn.classList.remove('open');
  navBtns.classList.remove('shown');
  menuOpen =  false;
})


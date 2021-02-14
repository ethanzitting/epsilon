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
const blurPanel = $('.blur-panel');

// Select main page content container element.
const main = $('main');

// Select each idividual navbar button
const home = $('#home');
const services = $('#services');
const contact = $('#contact');
const pastWork = $('#past-work');
const podcast = $('#podcast');

// The navbar menu will be closed on page load
let menuOpen = false;

let openMenu = () => {
  // Add the class 'shown' to the navBar element, scrolling it right into view.
  // Also add 'open' to the menuBtn turning it into an 'X'.
  menuBtn.classList.add('open');
  navBtns.classList.add('shown');
  blurPanel.classList.add('blurred');
  blurPanel.classList.remove('unresponsive');
  menuOpen = true;
}

let closeMenu = () => {
  // Turn the menuBtn back into a hamburger.
  menuBtn.classList.remove('open');
  // Scroll the navbar left out of view.
  navBtns.classList.remove('shown');
  // Unblur the screen
  blurPanel.classList.remove('blurred');
  // Allow Click Through of blur panel
  blurPanel.classList.add('unresponsive');
  menuOpen = false;
}

// When the hamburger icon is clicked...
menuBtn.addEventListener('click', () => {
  // If the navbar is currently closed...
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

blurPanel.addEventListener('click', () => {
  if (menuOpen) {
    closeMenu();
  }
})

home.addEventListener('click', () => {
  // Load the Home page content.
  loadHome();

  // Also close the navbar menu.
  closeMenu();
})

services.addEventListener('click', () => {
  // Load the Services content
  loadServices();

  // Also close the navbar menu.
  closeMenu();
})

podcast.addEventListener('click', () => {
  // Load the About Us content
  main.innerHTML = "Podcast Content";

  // Also close the navbar menu.
  closeMenu();
})

contact.addEventListener('click', () => {
  // Load Contact Content
  loadContact();

  // Also close the navbar menu.
  closeMenu();
})

pastWork.addEventListener('click', () => {
  // load the testimonials content
  main.innerHTML = "Past Work Content";

  // Also close the navbar menu.
  closeMenu();
})


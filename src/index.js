// Imports, most of my DOM manipulation has been moved to other files.
import { loadHome } from './page-loaders/load-home.js';
import { loadContact } from './page-loaders/load-contact.js';
import { loadServices } from './page-loaders/load-services.js';
import { loadPastWork } from './page-loaders/load-past-work.js';
import { loadMeet } from './page-loaders/meet-the-team.js';

// Simple Tool to make my code shorter.
function $(element) {
  return document.querySelector(element);
}

// Default Page to Load is the Home Page
loadHome();

// Select main page content container element.
const main = $('main');

// Select each idividual navbar button
const home = $('#home');
const services = $('#services');
const contact = $('#contact');
const pastWork = $('#past-work');
const meetTheTeam = $('#meet-the-team');

// The navbar menu will be closed on page load
let menuOpen = false;

let openMenu = () => {
  menuOpen = true;
}

let closeMenu = () => {
  menuOpen = false;
}

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

pastWork.addEventListener('click', () => {
  // load the testimonials content
  loadPastWork();

  // Also close the navbar menu.
  closeMenu();
})

meetTheTeam.addEventListener('click', () => {
  // Load the About Us content
  loadMeet();
  // Also close the navbar menu.
  closeMenu();
})

contact.addEventListener('click', () => {
  // Load Contact Content
  loadContact();

  // Also close the navbar menu.
  closeMenu();
})
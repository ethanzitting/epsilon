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

// Clear "active" class from nav-links
const clearActive = () => {
  home.classList.remove("active");
  services.classList.remove("active");
  contact.classList.remove("active");
  pastWork.classList.remove("active");
  meetTheTeam.classList.remove("active");
}

home.addEventListener('click', () => {
  // Load the Home page content.
  loadHome();

  // Clear active class from other nav-links and apply here
  clearActive();
  home.classList.add("active");
})

services.addEventListener('click', () => {
  // Load the Services content
  loadServices();

  // Clear active class from other nav-links and apply here
  clearActive();
  services.classList.add("active");
})

pastWork.addEventListener('click', () => {
  // load the testimonials content
  loadPastWork();

  // Clear active class from other nav-links and apply here
  clearActive();
  pastWork.classList.add("active");
})

meetTheTeam.addEventListener('click', () => {
  // Load the About Us content
  loadMeet();

  // Clear active class from other nav-links and apply here
  clearActive();
  meetTheTeam.classList.add("active");
})

contact.addEventListener('click', () => {
  // Load Contact Content
  loadContact();

  // Clear active class from other nav-links and apply here
  clearActive();
  contact.classList.add("active");
})
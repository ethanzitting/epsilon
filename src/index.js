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

home.addEventListener('click', () => {
  // Load the Home page content.
  loadHome();
})

services.addEventListener('click', () => {
  // Load the Services content
  loadServices();
})

pastWork.addEventListener('click', () => {
  // load the testimonials content
  loadPastWork();
})

meetTheTeam.addEventListener('click', () => {
  // Load the About Us content
  loadMeet();
})

contact.addEventListener('click', () => {
  // Load Contact Content
  loadContact();
})
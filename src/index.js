import { loadHome } from './page-loaders/load-home.js';

function $(element) {
  return document.querySelector(element);
}

loadHome();

const main = $('main');

const home = $('#home');
const services = $('#services');
const about = $('#about');
const contact = $('#contact');
const testimonials = $('#testimonials');

home.addEventListener('click', () => {
  loadHome();
})

services.addEventListener('click', () => {
  main.innerHTML = "Services Content";
})

about.addEventListener('click', () => {
  main.innerHTML = "About Us Content";
})

contact.addEventListener('click', () => {
  main.innerHTML = "Contact Us Content";
})

testimonials.addEventListener('click', () => {
  main.innerHTML = "Testimonials Content";
})
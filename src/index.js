import { loadHome } from './page-loaders/load-home.js';
import { loadContact } from './page-loaders/load-contact.js';
import { loadServices } from './page-loaders/load-services.js';

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
  loadServices();
})

about.addEventListener('click', () => {
  main.innerHTML = "About Us Content";
})

contact.addEventListener('click', () => {
  loadContact();
})

testimonials.addEventListener('click', () => {
  main.innerHTML = "Testimonials Content";
})

// Powers Hamburger Menu Icon
const menuBtn = document.querySelector('.menu-btn');
const headerCont = document.querySelector('.header-cont');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    headerCont.hidden = false;
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen =  false;
    headerCont.hidden = true;
  }
});
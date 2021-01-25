function $(element) {
  return document.querySelector(element);
}

const main = $('main');

const home = $('#home');
const services = $('#services');
const about = $('#about');
const contact = $('#contact');
const testimonials = $('#testimonials');

home.addEventListener('click', () => {
  main.innerHTML = "Home Page Content";
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
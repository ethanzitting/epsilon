const $ = (element) => document.querySelector(element);

const advising = $('#advising');
const advisingArrow = $('#advising-arrow');
advising.addEventListener('click', () => {
  advisingArrow.classList.toggle('up');

  webPresenceArrow.classList.remove('up');
  graphicDesignArrow.classList.remove('up');
  cultureConsultingArrow.classList.remove('up');
  optimizationArrow.classList.remove('up');
});

const webPresence = $('#web-presence');
const webPresenceArrow = $('#web-presence-arrow');
webPresence.addEventListener('click', () => {
  webPresenceArrow.classList.toggle('up');

  advisingArrow.classList.remove('up');
  graphicDesignArrow.classList.remove('up');
  cultureConsultingArrow.classList.remove('up');
  optimizationArrow.classList.remove('up');
});

const graphicDesign = $('#graphic-design');
const graphicDesignArrow = $('#graphic-design-arrow');
graphicDesign.addEventListener('click', () => {
  graphicDesignArrow.classList.toggle('up');

  advisingArrow.classList.remove('up');
  webPresenceArrow.classList.remove('up');
  cultureConsultingArrow.classList.remove('up');
  optimizationArrow.classList.remove('up');
});

const cultureConsulting = $('#culture-consulting');
const cultureConsultingArrow = $('#culture-consulting-arrow');
cultureConsulting.addEventListener('click', () => {
  cultureConsultingArrow.classList.toggle('up');

  advisingArrow.classList.remove('up');
  webPresenceArrow.classList.remove('up');
  graphicDesignArrow.classList.remove('up');
  optimizationArrow.classList.remove('up');
});

const optimization = $('#optimization');
const optimizationArrow = $('#optimization-arrow');
optimization.addEventListener('click', () => {
  optimizationArrow.classList.toggle('up');

  advisingArrow.classList.remove('up');
  webPresenceArrow.classList.remove('up');
  graphicDesignArrow.classList.remove('up');
  cultureConsultingArrow.classList.remove('up');
});
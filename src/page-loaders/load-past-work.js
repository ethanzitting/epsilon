import { makeDiv } from '../make-div.js';

let loadPastWork = () => {
  const main = document.querySelector('main');

  const designsSrc = "./images/designs/";
  const designs = [
    "alive.jpg",
    "atom-01.jpg",
    "bcs2.jpg",
    "bitr.jpg",
    "cheer.jpg",
    "dionysuslogo.jpg",
    "dtp-us.jpg",
    "feedback.jpg",
    "food.jpg",
    "gt4home.jpg",
    "l-h-01.jpg",
    "lawnranger.jpg",
    "man.jpg",
    "mca2.jpg",
    "mcasmall3front-back-dragged.jpg",
    "mcasmall3front-back.jpg",
    "north-k-01.jpg",
    "pfslong.jpg",
    "po3new.jpg",
    "po3statement.jpg",
    "screen-shot-2019-09-06-at-3-24-25-pm.png",
    "srjc.jpg",
    "stg.jpg",
    "thanksforgiving.jpg",
    "uk-01.jpg",
    "wsuplogog-1.jpg",
    "xerox-logo.jpg",
    "xeroxheadcount.jpg",
    "xeroxovertime.jpg"
  ]
  
  // Clear existing page html
  main.innerHTML = '';

  // Build Bare Page HTML

  main.innerHTML = `
    <!-- Title -->
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-12">
          <h1>Design Work</h1>
        </div>
      </div>
    </div>

    <!-- Container for Professional Work -->
    <div class="container-fluid" id="port-cont">
    </div>
  `

  // Generate Dynamic HTML for Images
  let portHTML = ``;

  for (let i = 0; i < designs.length; i += 3) {
    const rowClasses = 'col-sm-12 col-md-6 col-lg-4 px-1 overflow-hidden';
    portHTML += `
    <div class="row gx-2">
      <div class="${rowClasses}">
        <img src="${designsSrc}${designs[i]}" height="200px">
      </div>
      <div class="${rowClasses}">
        <img src="${designsSrc}${designs[i + 1]}" height="200px">
      </div>
      <div class="${rowClasses}">
        <img src="${designsSrc}${designs[i + 2]}" height="200px">
      </div>
    </div>`
  }

  // Plug Images into Page DOM
  const portCont = document.querySelector("#port-cont");
  portCont.innerHTML = portHTML;
  
}

export { loadPastWork }
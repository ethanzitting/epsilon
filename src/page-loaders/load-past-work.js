import { makeDiv } from '../make-div.js';
import bootstrap from 'bootstrap'



let loadPastWork = () => {
  const main = $('main');

  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

  // Simple Tool to make my code shorter.
  function $(element) {
    return document.querySelector(element);
  }

  const designsSrc = "./images/designs/";
  const designs = [
    "alive.jpg",
    "bcs2.jpg",
    "bitr.jpg",
    "cheer.jpg",
    "dtp-us.jpg",
    "feedback.jpg",
    "food.jpg",
    "gt4home.jpg",
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

    <hr>

    <!-- Container for Professional Work -->
    <div class="d-flex flex-wrap justify-content-center" id="port-cont">
    </div>

    <!-- Container for Image Preview -->
    <div class="prev-cont">
    </div>
  `

  const portCont = $("#port-cont");

  // Generate Dynamic HTML for Images
  let portHTML = ``;
  const prevCont = $(".prev-cont");


  for (let i = 0; i < designs.length; i++) {
    const portElem = makeDiv({
      parentId: '#port-cont',
      childId: `img-${i}-div`,
      classList: [
        'img-div'
      ]
    });

    portElem.innerHTML = `<img id="img-${i}" class="img-thumbnail" src="${designsSrc}${designs[i]}">`;
    
    const img = $(`#img-${i}`);
    console.log(img);

    
    portElem.innerHTML += `
        <div class="modal fade" id="img-${i}-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      `;

    img.addEventListener('click', () => {
      $(`#img-${i}-modal`).modal('show');
      console.log(`#img-${i}-modal`);
    })
  }
}

export { loadPastWork }
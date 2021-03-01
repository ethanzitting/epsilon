
const $ = (element) => {
  return document.querySelector(element);
}

const makeDiv = (divObject) => {
  const parent = document.querySelector(`${divObject.parentId}`);
  const child = document.createElement("div");
  
  if (divObject.childId) {
    child.setAttribute("id", `${divObject.childId}`);
  }

  const html = divObject.html || "";
  child.innerHTML = html;

  if (divObject.classList) {
    for (let i = 0; i < divObject.classList.length; i++) {
    child.classList.add(`${divObject.classList[i]}`)
    }
  }
  
  const placement = divObject.placement || "after";
  if (placement == "before") {
    parent.prepend(child);
  } else if (placement == "after") {
    parent.appendChild(child);
  }

  return child;
};

let loadPastWork = () => {
  const main = $('main');

  const designsSrc = "./images/designs/";
  const designs = [
    {
      link: "alive.jpg",
      title: "",
      alt: "Man with broken chains on hands reaching up."
    },
    {
      link: "bcs2.jpg",
      title: "",
      alt: "Banner for 'The Bitcoin Store'."
    },
    {
      link: "bitr.jpg",
      title: "",
      alt: "Flag with bitcoin on it."
    },
    {
      link: "cheer.jpg",
      title: "",
      alt: "Holiday Cheer Bonus Informational Poster."
    },
    {
      link: "dtp-us.jpg",
      title: "",
      alt: ""
    },
    {
      link: "feedback.jpg",
      title: "",
      alt: ""
    },
    {
      link: "food.jpg",
      title: "",
      alt: ""
    },
    {
      link: "gt4home.jpg",
      title: "",
      alt: ""
    },
    {
      link: "lawnranger.jpg",
      title: "",
      alt: ""
    },
    {
      link: "man.jpg",
      title: "",
      alt: ""
    },
    {
      link: "mca2.jpg",
      title: "",
      alt: ""
    },
    {
      link: "mcasmall3front-back-dragged.jpg",
      title: "",
      alt: ""
    },
    {
      link: "mcasmall3front-back.jpg",
      title: "",
      alt: ""
    },
    {
      link: "north-k-01.jpg",
      title: "",
      alt: ""
    },
    {
      link: "pfslong.jpg",
      title: "",
      alt: ""
    },
    {
      link: "po3new.jpg",
      title: "",
      alt: ""
    },
    {
      link: "po3statement.jpg",
      title: "",
      alt: ""
    },
    {
      link: "screen-shot-2019-09-06-at-3-24-25-pm.png",
      title: "",
      alt: ""
    },
    {
      link: "srjc.jpg",
      title: "",
      alt: ""
    },
    {
      link: "stg.jpg",
      title: "",
      alt: ""
    },
    {
      link: "thanksforgiving.jpg",
      title: "",
      alt: ""
    },
    {
      link: "uk-01.jpg",
      title: "",
      alt: ""
    },
    {
      link: "wsuplogog-1.jpg",
      title: "",
      alt: ""
    },
    {
      link: "xerox-logo.jpg",
      title: "",
      alt: ""
    },
    {
      link: "xeroxheadcount.jpg",
      title: "",
      alt: ""
    },
    {
      link: "xeroxovertime.jpg",
      title: "",
      alt: ""
    }
  ]

  // Build Bare Page HTML

  main.innerHTML = `
    <!-- Title -->
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-6">
          <h1>Designs</h1>
        </div>
        <div class="col-6">
          <h1>Websites</h1>
        </div>
      </div>
    </div>

    <hr>

    <!-- Container for Professional Work -->
    <div class="d-flex flex-wrap justify-content-center" id="port-cont">
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

    portElem.innerHTML = `
      <button data-toggle="modal" data-target="#img-${i}-modal" style="border: 1px; background: none;">
        <img id="img-${i}" class="img-thumbnail" src="${designsSrc}${designs[i].link}" alt="${designsSrc}${designs[i].alt}">
      </button  
      `;

    
    const img = $(`#img-${i}`);

    
    portElem.innerHTML += `
      <div class="modal fade" id="img-${i}-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${designs[i].title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-12">
            <div class="img-preview">
              <img id="img-${i}" class="" src="${designsSrc}${designs[i].link}" alt="${designsSrc}${designs[i].alt}">
            </div
          </div>
        </div>
      </div>
    </div>
      `;

    img.addEventListener('click', () => {
      $(`#img-${i}-modal`).modal('show');
    })
  }
}

loadPastWork();
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
      alt: ""
    },
    {
      link: "bcs2.jpg",
      title: "",
      alt: ""
    },
    {
      link: "bitr.jpg",
      title: "",
      alt: ""
    },
    {
      link: "cheer.jpg",
      title: "",
      alt: ""
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
        <div class="col-12">
          <h1>Design Work</h1>
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

    portElem.innerHTML = `<img id="img-${i}" class="img-thumbnail" src="${designsSrc}${designs[i].link}" alt="${designsSrc}${designs[i].alt}">`;
    
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

loadPastWork();
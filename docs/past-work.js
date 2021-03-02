
// Custom utility function to replace JQuery's
const $ = (element) => {
  return document.querySelector(element);
}

// Custom utility function for making DOM elements
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
const websites = [
  {
    description: "Ethan's Personal Website",
    alt: "A Preview of ethanzitting.com",
    url: 'https://ethanzitting.com',
    desktopSrc: './images/websites/personal-dt.png',
    mobileSrc: './images/websites/personal-mb.png',
  },
  {
    description: "A To-Do List App",
    alt: "Preview of ethanzitting.github.io/to-do-app/",
    url: 'https://ethanzitting.github.io/to-do-app/',
    desktopSrc: './images/websites/to-do-dt.png',
    mobileSrc: './images/websites/to-do-mb.png',
  },
  {
    description: "A Joke Restaurant Page",
    alt: "preview of https://ethanzitting.github.io/ACME-Cafe/",
    url: 'https://ethanzitting.github.io/ACME-Cafe/',
    desktopSrc: './images/websites/acme-dt.png',
    mobileSrc: './images/websites/acme-mb.png',
  },
  {
    description: "A Simple Game of Tic-Tac-Toe",
    alt: "preview of https://ethanzitting.github.io/tic-tac-toe/",
    url: 'https://ethanzitting.github.io/tic-tac-toe/',
    desktopSrc: './images/websites/tic-tac-dt.png',
    mobileSrc: './images/websites/tic-tac-mb.png',
  }
]

// Build page Tabs
main.innerHTML = `
  <!-- Title -->
  <ul class="navbar nav-pills nav-justified">
      <button class="nav-link active" aria-current="page" id="design-tab" href="" style="border: none;">Designs</button>
      <button class="nav-link" id="website-tab" href="" style="border: none;">Websites</button>
  </ul>

  <!-- Container for Professional Work -->
  <div class="d-flex flex-wrap justify-content-center" id="port-cont">
  </div>
`

const loadDesigns = () => {
  // Clear any existing content
  const portCont = $("#port-cont");
  portCont.innerHTML = ""

  //Update the tabs to show which is active
  const designTab = $("#design-tab");
  const websiteTab = $("#website-tab");

  websiteTab.classList.remove('active');
  designTab.classList.add('active');

  // Using Javascript, create lots of similar elements for the portfolio images.
  let portHTML = ``;
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
      </button>

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

    // Create a preview pop-up onclick window for each.
    const img = $(`#img-${i}`);
    img.addEventListener('click', () => {
      $(`#img-${i}-modal`).modal('show');
    })
  }
}

loadDesigns();

const loadWebsites = () => {
  // Clear any existing content

  const portCont = $("#port-cont");
  portCont.innerHTML = "";

  //Update the tabs to show which is active
  const designTab = $("#design-tab");
  const websiteTab = $("#website-tab");

  designTab.classList.remove('active');
  websiteTab.classList.add('active');

  // Create a base element for all the websites in the array
  for (let i = 0; i < websites.length; i++) {
    let websiteElem = makeDiv({
      parentId: '#port-cont',
      childId: `website-${i}`,
      classlist: [
        'img-div'
      ]
    })

    // Determine if the user is on mobile or desktop

    // Generate the HTML for each element accordingly
    // If desktop:
    websiteElem.innerHTML = `
    <a href="${websites[i].url}" target="_blank">
      <img id="website-${i}-img" class="img-thumbnail" src="${websites[i].desktopSrc}" alt="${designs[i].alt}">
    </a>
    `
  }
}

const designTab = $("#design-tab");
const websiteTab = $("#website-tab");

// Create the event listeners on the tabs that switch the content
designTab.addEventListener('click', () => {
  loadDesigns();
});

websiteTab.addEventListener('click', () => {
  loadWebsites();
})


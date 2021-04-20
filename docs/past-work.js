// TODO
// Implement Load-As-You go effect where the images fade in as your scroll down.
// Add a Back to Top Button

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
    description: "A Website for Silver Ridge Contracting",
    alt: "preview of SRC's website for Epsilon Integrated Solutions",
    url: "https://silverridgecontracting.com",
    desktopSrc: './images/websites/silver-dt.png',
    mobileSrc: './images/websites/silver-mb.png',
  },
  {
    description: "A Weather Forecast App",
    alt: "preview of the weather app for Epsilon Integrated Solutions",
    url: "https://ethanzitting.github.io/weather-app/",
    desktopSrc: './images/websites/weather-dt.png',
    mobileSrc: './images/websites/weather-mb.png',
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
  }
]

// Build page Tabs
main.innerHTML = `
  <!-- Title -->
  <ul class="navbar nav-pills nav-justified">
      <button class="nav-link active back-primary" aria-current="page" id="design-tab" href="" style="border: none;">Designs</button>
      <button class="nav-link primary" id="website-tab" href="" style="border: none;">Websites</button>
  </ul>
  <hr>

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

  websiteTab.classList.remove('active', 'back-primary');
  websiteTab.classList.add('primary');
  designTab.classList.add('active', 'back-primary');
  designTab.classList.remove('primary');

  websiteTab.removeAttribute("aria-current");
  designTab.setAttribute("aria-current", "page");

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

  designTab.classList.remove('active', 'back-primary');
  designTab.classList.add('primary');
  websiteTab.classList.add('active', 'back-primary');
  websiteTab.classList.remove('primary');

  designTab.removeAttribute("aria-current");
  websiteTab.setAttribute("aria-current", "page");

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
    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    // Generate the HTML for each element accordingly
    let mobileCheck = window.mobileCheck();
    // If mobile:
    if (mobileCheck) {
      websiteElem.innerHTML = `
      <a href="${websites[i].url}" target="_blank">
        <img id="website-${i}-img" class="img-thumbnail website-thumbnail" src="${websites[i].mobileSrc}" alt="${designs[i].alt}">
      </a>
      `
    } else {
      websiteElem.innerHTML = `
      <a href="${websites[i].url}" class="" target="_blank">
        <img id="website-${i}-img" class="img-thumbnail website-thumbnail" src="${websites[i].desktopSrc}" alt="${designs[i].alt}">
      </a>
      `
    }
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


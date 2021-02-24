import { makeDiv } from '../make-div.js';

let loadHome = () => {
  const main = document.querySelector('main');
  
  // Clear existing page html
  main.innerHTML = '';

  makeDiv({
    parentId: 'main',
    html: `<img class="cone" src="./images/cone.png"/>
          <p>Home Page Under Construction</p>
          <div class="container">
            <div class="row">
              <div class="col">col</div>
              <div class="col">col</div>
            </div>
          </div>`,
    classList: [
      'coneDiv'
    ]
  })

  
}

export { loadHome }
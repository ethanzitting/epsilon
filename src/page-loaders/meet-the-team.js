import { makeDiv } from '../make-div.js';
import bootstrap from 'bootstrap'

let loadMeet = () => {
  const main = document.querySelector('main');
  
  // Clear existing page html
  main.innerHTML = '';

  makeDiv({
    parentId: 'main',
    html: `<img class="cone" src="./images/cone.png"/>
          <p>Meet the Team Page Under Construction</p>`,
    classList: [
      'coneDiv'
    ]
  })
}

export { loadMeet }
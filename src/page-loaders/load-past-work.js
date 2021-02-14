import { makeDiv } from '../make-div.js';

let loadPastWork = () => {
  const main = document.querySelector('main');
  
  // Clear existing page html
  main.innerHTML = '';

  makeDiv({
    parentId: 'main',
    html: `<img class="cone" src="./images/cone.png"/>
          <p>Past Work Page Under Construction</p>`,
    classList: [
      'coneDiv'
    ]
  })

  
}

export { loadPastWork }
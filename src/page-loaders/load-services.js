import {makeDiv} from '../make-div.js';

const loadServices = () => {
  const main = document.querySelector('main');

  main.innerHTML = '';

  makeDiv({
    parentId: 'main',
    childId: 'services',
    html: `<h1>Services</h1>
      <h3>Advising</h3>
        establishing llc<br>
        email integration<br>
        domain acquisition<br>
      <h3>Web Presence</h3>
        social media<br>
        site modernization<br>
        mobile site<br>
        accessibility<br>
      <h3>Graphic Design</h3>
        business cards<br>
        posters<br>
        logos<br>
        billboards<br>
        asset vectorization<br>
        flyers<br>
        commercials<br>
        digital advertising<br>
      <h3>Culture Consulting</h3>
        synergy<br>
        moderniation of communication channels<br>
      <h3>Optimization</h3>
        data visualization<br>
        inventory tracking<br>
        payroll auditing<br>
        accounts payable auditing<br>
        workflow review<br>
        email integration<br>
        IT<br>
        Integrate<br>
      `
  });


  
}

export {loadServices}
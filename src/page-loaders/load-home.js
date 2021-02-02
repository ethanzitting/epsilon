import { makeDiv } from '../make-div.js';

let loadHome = () => {
  const main = document.querySelector('main');
  
  // Clear existing page html
  main.innerHTML = '';

  // Load Intro Title
  makeDiv({
    parentId: 'main',
    childId: 'title',
    html: '<h1>Epsilon Integrated Solutions</h1>',
  })

  // Load Intro Container
  makeDiv({
    parentId: 'main',
    childId: 'intro-cont',
    classList: [
      'flex'
    ]
  })

  // Load intro paragraph
  makeDiv({
    parentId: '#intro-cont',
    html: `<h3>What We Do</h3>
          <p>This paragraph briefly lays out our services. Are you daunted by the processes involved
          with starting your first company? We can solve all the little headaches in the beginning
          so that you can get right to making money. We can get you an LLC, a domain, a website, 
          and good starting business practices, all for a shiny dollar coin.`,
    classList: [
      'tile'
    ]
  })

  // Load intro image
  makeDiv({
    parentId: '#intro-cont',
    html: `<img class="tile-img" src="./images/school-smile.jpg"/>`,
    classList: [
      'tile'
    ]
  })

  // Load Brief Pitch Container
  makeDiv({
    parentId: 'main',
    childId: 'pitch-cont',
    classList: [
      'flex'
    ]
  })
  
  // Load Pitch Image
  makeDiv({
    parentId: '#pitch-cont',
    html: `<img class="tile-img" src="./images/smile.jpg"/>`,
    classList: [
      'tile'
    ]
  })

  // Load Pitch Image
  makeDiv({
    parentId: '#pitch-cont',
    html: `<h3>Why Us?</h3>
          <p>Simply put, we offer a complete solution for a flat rate
           lower than any you will fiind elsewhere. A small check and a phone call
           will result in you being the owner of your own small business. We can even
           walk you through what we are doing so that you can begin to familiarize
           yourself with the inner workings of modern businesses.</p>`,
    classList: [
      'tile'
    ]
  })

  // Load Service Links Title
  makeDiv({
    parentId: 'main',
    html: `<h1>Our Packages</h1>`,
  })

  // Load Services Container
  makeDiv({
    parentId: 'main',
    childId: 'services-cont'
  })

  // Load Service Packages
  makeDiv({
    parentId: '#services-cont',
    childId: 'deluxe',
    html: `<h3>Deluxe With Cheese</h3>
          <p>The full shebang. We start you an LLC, lock down your domain, 
          build you a simple website and start you off with modern accounting processes.</p>`,
    classList: [
      'package'
    ]
  })
  makeDiv({
    parentId: '#services-cont',
    childId: 'intermediate',
    html: `<h3>Intermediate</h3>
          <p>Our in-between package. We start you an LLC, lock down your domain, 
          and build you a simple website</p>`,
    classList: [
      'package'
    ]
  })
  makeDiv({
    parentId: '#services-cont',
    chjldId: 'basic',
    html: `<h3>Basic</h3>
          <p>Our simplest service package. We lock down a domain and build you a simple website.`,
    classList: [
      'package'
    ]
  })
  // Load Testimonial Preview
}

export { loadHome }
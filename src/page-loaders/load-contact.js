import {makeDiv} from '../make-div.js';

let loadContact = () => {
  const main = document.querySelector('main');

  main.innerHTML = "";

  makeDiv({
    parentId: 'main',
    childId: 'formDiv',
    html: `<!-- modify this form HTML and place wherever you want your form -->

      <form
        action="https://formspree.io/f/xyybvdnn"
        method="POST"
      >
        <label>
          Your email:
          <input type="text" name="_replyto">
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
      
        <!-- your other form fields go here -->
      
        <button type="submit">Send</button>
      </form>`,
  })
}

export {loadContact}
'use strict'

// Modal Popup
const sendBtn = document.querySelector('.send-message')
sendBtn.addEventListener('click', check);

//  Modal Close
const closeBtn = document.querySelector('.close-btn')
closeBtn.addEventListener('click', closeModal);

// Modal Visibility
const content = document.getElementById('modal')

function check() {

    const name = document.forms["form"]["name"].value;
    const cname = document.forms["form"]["companyName"].value;
    const tel = document.forms["form"]["tel"].value;
    const email = document.querySelector('#email').value;

    const mconsent = document.querySelector('#marketingConsent');

    // Check email 
    let regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;

    if (name && cname && tel && mconsent.checked && email.match(regexEmail)) {
        content.style.visibility = 'visible';
      }
      else {
        content.style.visibility = 'hidden';
      }
}

function closeModal() {
    content.style.visibility = 'hidden';
  }







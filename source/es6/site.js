import renderShareMessage from './templates/pledge_form/share.template.js';
import renderCurrentPledges from './templates/pledge_form/current_pledges.template.js';

const share_text = 
    "I have pledged not to take any flights in 2020 to avert climate breakdown #flightfree2020 @flightfree2020 https://www.flightfree.co.uk/pledge"

const twitter_link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(share_text)}`;
const whatsapp_link = `whatsapp://send?text=${encodeURIComponent(share_text)}`;
const instagram_link = 'https://www.instagram.com/flightfree2020/';
const facebook_link = 'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.flightfree.co.uk%2Fpledge';

const response_html = renderShareMessage({
    whatsapp_link,
    twitter_link,
    facebook_link,
    instagram_link
});

function submitForm(event) {
    event.preventDefault();
    let form = event.currentTarget;

    const email = form.querySelector('.pledge-form__email').value;
    const first_name = form.querySelector('.pledge-form__first-name').value;
    const last_name = form.querySelector('.pledge-form__last-name').value;
    
    const endpoint = form.action;
    
    const request = {
        email,
        first_name,
        last_name
    };
    
    fetch(endpoint, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then(response => {
        handleResponse(response, form, email);
    })
    .catch(err => {
        console.log(err)
    });

}

function addPledgeTargetMessage(form) {
    let card = form.parentElement;
    fetch("/.netlify/functions/count-subscribers", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
    })
    .then((res) => res.json())
    .then((response) => {
        const message_container = card.querySelector('.pledge-card__message');
        const target = response.target;
        const member_count = response.member_count;
        const message = renderCurrentPledges({target, member_count});
        message_container.insertAdjacentHTML("afterbegin", message);
    })
    .catch((err) => {
        console.log(err);
    });
}



function handleResponse(response, form, email) {
    showResponse(form);
    if(response.status === 202) {
        showAlreadyPledgedMessage(email)
    }
}

function showAlreadyPledgedMessage(email) {
    sendAlreadyPledgedEmail(email);    
}

function showResponse(form) {
    let card = form.parentElement;
    card.innerHTML = response_html;
}

function sendAlreadyPledgedEmail(email) {

    const request = {email};
  
    fetch('/.netlify/functions/already-pledged', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }).then(response => {
        // console.log('email sent');
    })
    .catch(err => {
        // console.log(err)
    });
}

// Select all pledge forms
const pledgeFroms = document.querySelectorAll('.pledge-form');

// Add submit event listener to all forms
pledgeFroms.forEach(function(form) {
    addPledgeTargetMessage(form);
    form.addEventListener('submit', submitForm);
});

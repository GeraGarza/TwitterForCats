
const form = document.querySelector('form'); //grabbing element on pg
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:3000/mews';

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault(); // donest regenerate a new page, we can decide what to do.
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const mew = {
        name,
        content
    };

    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
    .then( createdMew => {
        console.log(createdMew);
    });
  
});


// npm init -y // default


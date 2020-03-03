const form = document.querySelector('form'); //grabbing element on pg
const loadingElement = document.querySelector('.loading');
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/mews' : 'http://localhost:3000/mews';
const mewsElement = document.querySelector('.mews');

loadingElement.style.display = '';

listAllMews();

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

    //  request from server
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
    .then( createdMew => {
        form.reset();
        console.log(createdMew);
        // setTimeout(() =>{
        //     form.style.display = '';
        // }, 30000);
        form.style.display = '';
        listAllMews();
        loadingElement.style.display = 'none';
    });
  
});

function removeMew(id){
    
    fetch('http://localhost:3000/del/' + id, {
        method: 'delete'
      }).then( deleted => {
          listAllMews();
      })
}


function listAllMews(){
    
    //  clear the list so you can re-add them
    mewsElement.innerHTML = '';
    // no options necessary since its a get req
    fetch(API_URL)
    .then(response => response.json())
    .then(mews => {
        mews.reverse();
        mews.forEach(mew => {
            const div = document.createElement('div');
            const header = document.createElement('h3');
            header.textContent = mew.name;

            const contents = document.createElement('p');
            contents.textContent = mew.content;

            const date = document.createElement('small')
            date.textContent = new Date(mew.created);

            const btn = document.createElement("BUTTON");
            btn.onclick = function () {
                removeMew(mew._id);
              };
              
            div.appendChild(header);
            div.appendChild(contents)
            div.appendChild(date);
            div.appendChild(btn);

            mewsElement.appendChild(div);
        });
        loadingElement.style.display = 'none';

    });
}



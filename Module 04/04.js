'use strict';

const search = document.querySelector('#query');
const button = document.querySelector('input[type="Submit"]');
const target = document.querySelector('#target');

button.addEventListener('click', async function (evt) {
    evt.preventDefault();
    const query = search.value;
    const data = await getData(query);
    console.log(data);
    console.log(data[0]['show']['name'])
    target.innerHTML = '';
    postData(data);

})

async function getData(query) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    const response = await fetch(url);
    return await response.json();
}

function postData(data) {
    for (let byte of data) {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const url = document.createElement('a');
        const img = document.createElement('img');
        const summary = document.createElement('div');
        h2.append(document.createTextNode(byte.show.name));
        article.appendChild(h2);
        img.src = null ? `https://via.placeholder.com/210x295?text=Not%20Found` : byte.show.image?.medium;
        article.appendChild(img);
        url.href = byte.show.url;
        url.textContent = byte.show.name;
        url.target = '_blank';
        article.appendChild(url);
        summary.innerHTML = byte.show.summary;
        article.appendChild(summary);
        target.appendChild(article);

    }
}
'use strict';

const search = document.querySelector('#query');
const button = document.querySelector('#button');
const target = document.querySelector('#target');

button.addEventListener('click', async function(evt) {
    evt.preventDefault();
    const query = search.value;
    const data = await getData(query);
    target.innerHTML = '';
    printData(data);

})


async function getData(query) {
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
    const response = await fetch(url);
    return await response.json();
}

function printData(data) {
    for (let item of data['result']) {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(item.value));
        article.appendChild(p);
        target.appendChild(article);
    }
}

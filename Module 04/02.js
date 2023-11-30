'use strict';
const searchQuery = document.querySelector('#query');
const button = document.querySelector('input[type="submit"]');

button.addEventListener('click', async function (evt) {
 evt.preventDefault();
    const code = searchQuery.value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`)
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
})
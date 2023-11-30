'use strict';

async function getData() {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);
    return await response.json();
}

async function log() {
    const data = await getData();
    console.log(data.value);
}

log();
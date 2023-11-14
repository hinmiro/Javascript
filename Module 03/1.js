'use strict';

let items = '<li>First item</li><li>Second item</li><li>Third item</li>'

document.getElementById('target').innerHTML += items;
const element = document.getElementById('target');
element.classList.add('my-list');

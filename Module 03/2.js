'use strict';


const ul = document.querySelector('#target');
let li = document.createElement('li');
li.appendChild(document.createTextNode('First item'));
ul.appendChild(li);

let li1 = document.createElement('li');
li1.appendChild(document.createTextNode('Second item'));
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.appendChild(document.createTextNode('Third item'));
ul.appendChild(li2);

const element = document.querySelector('#target');
const elementChild = element.getElementsByTagName('li')[1];
elementChild.classList.add('my-item');
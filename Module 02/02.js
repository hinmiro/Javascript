'use strict';
const num = Number(prompt("How many participants?"));
const party = [];
for (let i = 1; i <= num; i++) {
    const name = prompt(`Type name of participant No.${i}.`);
    party.push(name);
}
party.sort();
let myStr = "";
for (let i = 0; i < party.length; i++) {
    myStr += `<li>${party[i]}</li>`;
}
document.querySelector('#list').innerHTML = myStr;

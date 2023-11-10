'use strict';

function participants() {
    let parti = [];
    const el = document.getElementById('list');
    const users = prompt('How many will participate?');

    for (let i = 0; i < users; i++) {
        let name = prompt(`Participant No.${i + 1}, type your name.`);
        parti.push(name);
    }
    parti.sort();
    parti.forEach(function (x) {
        let element = document.createElement("li");
        element.textContent = x;
        el.appendChild(element);
    })
}

participants()
'use strict';

document.getElementById('trigger').addEventListener('mouseover', mouseOver);
document.getElementById('trigger').addEventListener('mouseout', mouseOut);

function mouseOver() {
    document.getElementById('target').src="img/picB.jpg";
}

function mouseOut() {
    document.getElementById('target').src='img/picA.jpg';
}

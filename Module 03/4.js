'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let student of students) {
  const target = document.querySelector('#target');
  let option = document.createElement('option');
  option.value = student.id;
  option.appendChild(document.createTextNode(student.name));
  target.appendChild(option);

}


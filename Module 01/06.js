'use strict';

const conf = confirm('Should I calculate the square root?')

if (conf === false) {
    document.querySelector('body').innerHTML = 'The square root is not calculated.'
} else if (conf === true) {
    const num = prompt('What number you want to be calculated.')
    const num_f = parseFloat(num)

    if (num_f > 0) {
        document.querySelector('body').innerHTML = `The square root of ${num} is ${Math.sqrt(num_f)}.`
    } else if (num_f < 0) {
        document.querySelector('body').innerHTML = 'The square root of a negative number is not defined.'
    }
}
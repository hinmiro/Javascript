'use strict';

let nums = [];

for (let i = 0; i < 5; i++) {
    const num = prompt(`Type ${i + 1}. number.`);
    nums.push(num);
}

for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i]);
}
const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(2, 5);//from index to index nums.slice()

const removed = nums.splice(2,5,77,88,99);//from where & how many delete count also inject elements
// console.log(part);
// console.log(removed);
// console.log(nums);

const together = nums.join(" ");
console.log(together);
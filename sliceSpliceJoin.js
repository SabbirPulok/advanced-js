const nums = [1,2,3,4,5,6,7,8,9,10];
const makeSlice = nums.slice(3,5);
console.log("Sliced from 3 to 5 index: ",makeSlice," Now Array: ",nums);

const makeSplice = nums.splice(3,5, 101,102);
console.log("Sliced from 3 to 5 index: ",makeSplice," Now Array: ",nums);

const makeJoin = nums.join(" ");
console.log("Join the array with space: ",makeJoin);
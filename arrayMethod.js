let number = [3, 4, 6, 78, 55, 500];
number[0] = 33;
number[1] = 44;

for (let i = 0; i < number.length; i++) {
  //   console.log(number[i]);
  number[i] = number[i] + 2;
}
// console.log(number);

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    // console.log("Event number",number[i]);
  } else {
    // console.log('Odd number',number[i]);
  }
}

// lage number
let max = number[0];
number.forEach(function (num) {
  if (num > max) {
    max = num;
  }
});
console.log("max", max);

// small number
let min = number[0];
number.forEach(function (num) {
  if (num < min) {
    min = num;
  }
});
console.log("min", min);

// =============
let arr = [3, 4, 6, 78, 55, 500];
// arr.push(20)
// arr.pop()
// arr.unshift(100)
// arr.shift()
// console.log(arr[3]);
// console.log(arr[2]);
// arr.splice(3, 0, 400);
// arr.splice(5, 1,'hi','bye');

// console.log(arr);

let find = 55;
let isRun = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("data is found", i, arr[i]);
    isRun = true;
    break;
  }
}

if (!isRun) {
  //  console.log('data not found');
}

// Multidimensional Array

const myArr = [[], [], []];
const myArr1 = [[[], [], []], [[], [], []][([], [], [])]];
console.log("---------->");
const mark = [
  [20, 304, 05, 0],
  [40, 44, 45, 23],
  [34, 123, 12, 33],
];

// console.log(mark[0][0]);
// console.log(mark[1][1]);

for (let i = 0; i < mark.length; i++) {
//   console.log(mark[i]);
  for (let j = 0; j < mark[i].length; j++) {
    // console.log(i,'element',mark[i][j]);
  }
}

const subArr= [12 , 23, 23]
const nus = subArr;
nus[2]= 10; 
// console.log(subArr); referance arrey change orginal arrey 
const ar = Array.from(subArr)
ar[2]=20;
console.log(subArr);
console.log(ar);
const xr = subArr.concat(ar)
console.log(xr);
console.log(xr.join(' a* '));
console.log(xr.fill(true));
console.log(xr.fill('abc'));
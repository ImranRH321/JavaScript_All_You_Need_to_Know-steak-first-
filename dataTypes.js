// js Data types
// 2 types

//1. primative types
/* 
Number  -> 2, 4, 43.4 ,5.44
Text/String  -> 'helo' + "nice" 
Boolean --> ture / false 
undefined  --> 
Null 
*/

//2. Object types
/* 
 Arrey 
Object 
Function /
 */


// primitive type 
// number integer / float same that only javascript number float


const x = 20.23;
const y = String(x)
const z = Number(y)
// console.log(z);

const f = 10.32;
// console.log(parseFloat(f));
// console.log(Number(f));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(20*"abc"); // not a number NaN 
// console.log('def' * 20); // not a number NaN 
// console.log(true * 50); // not a number NaN // true defult 1gon
// console.log(false * 10); // not a number NaN / result 0
// console.log([1,3,4] * 2);
// console.log({x:1,y:2} * 2);

// string Generate ---------->

const str = 'string';
const str1 = "string";
const str2 =  `String`;
const str3 = String(123.3)
const str4 = String(23)
const str5 = String('text stirng')
// console.log(str3,str4,str5);

// Null vs undefined  -> data types

let abc;
let def = null; // object a usefull fetch load data


// console.log(abc);
// console.log(null);
// console.log(abc ===null); false 


// Type Convertion -=-->
// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

const text = '12.30';
const number = 23.23;
const date = new Date()
const dnum = 1674556498751;
const isReady = true;
const isNum = 0;

/*
 console.log(Number(text)); // 12.3
console.log(String(number)); // 23.23
console.log(date);  // 2023-01-24T10:34:58.751Z
console.log(Number(date)); // 1674556498751
console.log(new Date(dnum)); // 2023-01-24T10:34:58.751Z
console.log(isReady); // true , (default --> true--> 1 , false --> 0)
console.log(Number(isReady)); // 1
console.log(Boolean(isNum)); // false
console.log(number.toFixed()); // 23 -> fixed element peramertar number
 */

// ==========
// falsy value 
// ---------------
/* 
''
0,
undefined,
null,
NaN,
*/

/* 
console.log(Boolean('')); // false
console.log(Boolean('abcdefjhij')); // true
console.log(Boolean(23)); // // true
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));// false
 */

// hexDecimal number --> 16 bes 
// Octal number --> 8 bes 

const hex = 0xff;
const oct = 017
console.log(hex); //255
console.log(oct); // 15

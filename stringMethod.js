// String Comparition

let a = "abc";
let b = "bcd";
// console.log(a.length ===b.length);
// console.log(a !== b);
//
// small letter -  small (a), large (z);
// Capital letter small (A), large( Z);
// a > Z -> serial by comte takbe.
// console.log('a' > 'z');
// console.log('a' < 'z');
// console.log('A' > 'Z');
// console.log('a' < 'z');
console.log("d" > "Z");
// console.log('I' > 'z');
// console.log("aBa" > "abD");
// console.log("001" == 1); // true
// console.log("001" === 1); // false

// const string1 = "helloBondo";
const string2 = "world";
// const compareValue = string1.localeCompare(string2);
// -1
// console.log(compareValue, "hi");

// const con = string1.concat(' ', string2)
// concat() দুটি অথবা আরো স্ট্রিং যোগ করে।
// const sub = string1.substr(2, 2)
// console.log(con);
// console.log(sub);
// console.log(string1.charAt(2)); 
// CharAt () মেথড একটি স্ট্রিং মধ্যে একটি নির্দিষ্ট ইনডেক্সে return kore 
const string1 = "helloBondo";

console.log(string1.startsWith('h'));
console.log(string1.endsWith('o'));
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log('     abc       '.trim());
console.log(string1.slice(5,10));
// একটি স্ট্রিং এর একটি অংশ এক্সট্রাক্ট করে এবং একটি নতুন স্ট্রিং এক্সট্রাক্টিং অংশ প্রদান করে।
// পদ্ধতিতে 2টি প্যারামিটার লাগে। যথাঃ শুরুর ইনডেক্স (অবস্থান), এবং শেষ ইনডেক্স (অবস্থান)।
var txt = "abcdef"; 
// console.log(txt.split(','));
// console.log(txt.split(" "));
// console.log(txt.split(' | '));

let text = "How are you doing today?";
const myArray = text.split(" ");
// console.log(myArray); 

let str = 'hasan one of the best ';
let length = 0;
while (true) {
    if(str.charAt(length)==''){
        break;
    }else{
        length++
    }
}

// console.log(length);

console.log(str.length);

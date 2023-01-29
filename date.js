// Javascript Date -> build Object
// তারিখ, সময় ইত্যাদির জন্য জাভাস্ক্রিপ্টে Date অবজেক্ট আছে। এই অবজেক্টে প্রচুর মেথড আছে তারিখ নিয়ে কাজ করার জন্য। Date অবজেক্ট তৈরী করতে হয় new কিওয়ার্ড দিয়ে। যেমন

const date = new Date();
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());
console.log("hi-------");
console.log(date.getDate());
// এই মেথড দিয়ে বর্তমানে বা যেকোন সময় মাসের কত তারিখ সেটা বের করা যায়। যেমন আজ মাসের কত তারিখ সেটা যদি দেখতে চান

console.log(date.getDay());
// সপ্তাহের কোনদিন সেটা দেখার জন্য এই মেথড। ০ হচ্ছে রবিবার এবং এভাবে ৬ হচ্ছে শনিবার

console.log(date.getFullYear());
// বছর দেখতে চাইলে এই মেথড, হোক বর্তমান কোন বছর কিংবা প্রদত্ত সময়ের কোন বছর। যেমন

console.log(date.getMonth());
// এই মেথড দিয়ে মাস বের করা যায়। ০ হচ্ছে জানুয়ারী এবং ডিসেম্বর হচ্ছে ১১।

console.log(date.getSeconds());
// getSeconds() মেথড দিয়ে সেকেন্ড বের করা হয় যেমন

console.log(date.getTime());
// getTime() মেথড দিয়ে 1 লা জানুয়ারী 1970 00:00:00 (UTC) এই সময় থেকে কত মিলিসেকেন্ড সংশ্লিষ্ট তারিখ পর্যন্ত কত মিলিসেকেন্ড গেছে সেটা দেখার জন্য।

console.log(date.getMinutes());
// মিনিট দেখার জন্য আছে getMinutes() মেথড

console.log(date.getHours());
// ঘন্টা দেখার জন্য আছে getHours() মেথড। যেমন আমি যদি August 26, 1986 23:15:00 থেকে ঘন্টা বের করতে চাই তাহলে
console.log("--------------");

let amPm = '';
let curHour = date.getHours();
let curMin = date.getMinutes();

if(curHour > 12){
    amPm  = 'AM';
}else{
    amPm  = 'PM';
}

if(curHour==0){
    curHour = 12;
}

if(curHour > 12){
 curHour = curHour - 12
}
console.log(curHour   + ':' + curMin + ' ' + amPm);

console.log(curHour);
console.log(curMin);
console.log(amPm);
console.log('fainal res--------');


/* 
// ei Code pore abar dekbo .... 
*/
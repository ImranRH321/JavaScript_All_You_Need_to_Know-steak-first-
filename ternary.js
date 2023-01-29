
let number = 21;
if(number % 2===0){
    // console.log(number , "Event");
}else{
    // console.log(number , "Odd");
}

// console.log(number);
const result = (number % 2 === 1) ? `${number} Event`: `${number} Odd`
// console.log(result);

// sorthand operator ternary >

let a = 0;
let answer;

if(a > 5){
    // answer = "Grater then 5"
}else{
    // answer = "Less then 5"
}
// console.log(answer);
const sum = a > 5 ? answer = 'Large': answer="small";
const ans  = a > 10? "large 10": a < 5? "less 5": "less 10"
// console.log(sum);
// console.log(ans);

let x;
let s = x || 'imran';

let totalNumberJod = 0;
for(let i = 0; i <= 100; i++){
   if(i%2===0){
    totalNumberJod += i
   }
}
// console.log(totalNumberJod);

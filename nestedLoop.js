
// let running = true;

// while(running){
//    let random = Math.round(Math.random()*10)
//    if(random ===9){
//      console.log(random,'Ok winer winner check diner');
//      running = false;
//    }else{
//     console.log(random,'you have got othter') ;
//    }
// }

// nested loop

// for (let count = 1; count <= 10; count++) {
//   console.log("List", count);
//  for(let userCount = 1; userCount <= 5; userCount++){
//     console.log('-------------------> user', userCount);
//  }
// }


// for(let i = 1; i <= 4; i ++){
//     console.log('lists',i);
//     for(let x =1; x <= i; x++){
//         console.log('------------users',x);
//     }
// } 




// for(let i = 1; i <= 4; i ++){
//     let str = '';
//     console.log(i);
//     for(let x =1; x <= i; x++){
//         // console.log(x);
//        str += x +" "
//     }
//     console.log(str);
// } 
console.log('------------');



// for(let i = 1; i <= 5; i++){
//     // console.log(i);
//     let str = '*';
//     for(let  a =1; a <=5; a++){
//       str += " * "
//     }
//     console.log(str);
// }

// 1 
// 1 2
// 1 2 3 
// 1 2 3 4

let x = 5;
for(let a = 1; a <= x; a++){
    // console.log('list',a);
    let sum = '';
    for(let b = 1; b <=a; b++){
     sum = sum + b;
    }
    console.log(sum);
}



/* Break Statement  */

while(true){
    let random = Math.round(Math.random()*10)
    if(random ===7){
      console.log(random,'Ok winer winner check diner');
      break
    }else{
     console.log(random,'you have got othter') ;
    }
 }
 
 
 for(let i = 1; i <= 20; i++){
     if(i % 5===0){
         console.log('if',i);
         break
     }else{
         console.log(i);
     }
 }
 
 console.log(5 % 5===0);


 for (let i = 1; i <=10; i++) {
    if(i ===3 || i === 7){
        // skib 3 , 7 
        continue
    }else{
        console.log(i);
    }
}

// JS Infinity for Loop

for (;;) {
    let random = Math.round(Math.random() * 9);
    if (random === 4) {
      console.log(random, "Ok winer winner check diners");
      break;
    } else {
      console.log(random, "you have got othter");
    }
  }
  

// jinis 
const obj = {};
obj.x = 10;
obj.y = 10;
// add data obj 
// console.log(obj);

let obi = Object()
obi.a = 20;
obi.b = 30;
console.log(typeof obi);

const box = new Object({role: 1})
box.power='Action';
box.name="repon";
console.log(box);

box["role"]= "same updateing";
// box[2]  

console.log(box.role);
console.log(box);


// =======================Arr_VS__Object===================
/* 
Arr**
*/
let n = 900;
let exjam = [5,10,15,20];
exjam[0] = 100;
exjam[4] = "helo5"
console.log(exjam,'arr defer');

// 
/* 
Object**
*/
// This profaty insert objct multiful system 
let name = "variSweet"
const helObj = {name:"roky", age: 20, dream:"hard-soptor-developer"}
helObj.name = "master mind";
const vv  = "vv";
helObj[vv] = "vv";
helObj[name] = "super mind";
helObj["name"] = "I am fine that roki";
// console.log(helObj.age);
// console.log(helObj["age"]);
// console.log(helObj["dream"]);
// console.log(helObj.dream);
// console.log(drc);

const per = {
    x: 20,
    y: 40,
    b: "lar"
}

per.z = undefined
console.log(per);
delete per.z;
delete per.b
console.log(per);
const obj1 = {
  a: 10,
  b: 40,
};

const obj2 = {
  a: 10,
  b: 40,
  c: 50 // if true or  string false return kore 
};

// console.log(obj1===obj2); // false;

if(obj1.a=== obj2.a && obj1.b===obj2.b){
    console.log(true);
}else{
    console.log(false);
}

console.log(obj1);
console.log(JSON.stringify(obj1)=== JSON.stringify(obj2) );


const objX = {
    x: 20,
    y: 30,
    z: 40,
    w: 434
}

console.log(objX.x);
console.log(objX['z']); // 40
console.log(objX['w']); // 434
console.log('x' in objX); // true;
console.log('w' in objX);
console.log('p' in objX);
for(let i in objX){
    console.log(i);
    console.log(i, ' :', objX[i]);
}
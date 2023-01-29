
const obj = {
    name: "imran",
    age: 30,
    work: 'codding',
    friend: 'timePassFriend'
}

// console.log(obj['age']);
// console.log(obj['work']);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const obj2 = obj;
// obj2.name = "akas";
// obj2.age =  60;
// console.log(obj);
// console.log(obj2);

const obj2 = Object.assign({}, obj)
obj2.name = "tupan";
obj2.age = 100;

console.log(obj,'obj');
console.log(obj2, 'obj2');
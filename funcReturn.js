let los = 10;
function takaDibe(money, time) {
  let max = [];
  for (let i = 0; i < arguments.length; i++) {
    max.push(Number(arguments[i]));
  }

  return max;
}
const store = takaDibe("50", "3.40");
// console.log(los);
console.log(store);

var addDb = function(){} // funcExpress
/* Scope determines the accessibility (visibility) of variables.
JavaScript has 3 types of scope:

Block scope
Function scope
Global scope
 */

// function funScp (){
//     console.log(name);
//   var name  = 'imran'
// }

// funScp()

function funScp() {
  if (true) {
    var jb = "jami bow";
    // let jb = "jami bow";
  }

  if (true) {
    console.log(jb);
  }
}

// console.log(jb,'gb');

funScp();

if (true) {
  var x = "sagor";
}
console.log(x, "x"); // use able var

if (true) {
  // change
  let ab = "ab Dom vs li";
}
// console.log(ab,'ab');  //can NOT be used here

// code here can use carName

function myFunction() {
  console.log("helo top call func");
}

var sir = "teacher";

// console.log(window);

// console.log(window.sir);

function name(params) {
  function japan() {
    if (true) {
      let age = 20;
    }
    console.log(age);
    if (true) {
      var age2 = 40;
    }
    console.log(age2);
  }
  japan()
}
name();



function sameOfArrey (){
//   console.log(arguments);
  for(let i = 0; i < arguments.length; i++){
    // console.log(arguments[i]);
  }
}

sameOfArrey(1,2,3,4,5,6,7) 


let arr1 = [20, 30, 21, 33, 40,40]
function addDb (arr){
    let event = 0;
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]%2==0){
          arr[i] = arr[i]
          console.log(arr[i]);
       }
    }
    // console.log(sum); 
}
addDb(arr1)


function event (arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        sum = sum + arr[i]
    }
}
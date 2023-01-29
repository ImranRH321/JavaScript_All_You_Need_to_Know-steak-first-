function CholBiyaKori(thanks, name) {
  function kove() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }

  const chol = thanks + " " + kove();
  console.log(chol);
}
// CholBiyaKori('Welcome to banlgadesh', 'imran hossan sagor')

function playGame(numbers) {
  let max = numbers[0];
  function stopGame() {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
     max = numbers[i];
      }
    }
    return max; 
}
 const result =  stopGame();
 return result;
}

const numbers = [10, 20, 30, 40, 50, 60];
const end = playGame(numbers);
console.log(end);
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess(guess) {
  attempts++;
  if (guess === targetNumber) {
    console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
  } else if (guess < targetNumber) {
    console.log(`Too low! Try again.`);
  } else {
    console.log(`Too high! Try again.`);
  }
}

while (true) {
  const guess = parseInt(prompt("Enter your guess:"));
  checkGuess(guess);
  
}








// let y = Game.number(Game.random() * 10 + 1);
// let guess = 1;
// document.getElementById("submitguess").onclick = function () {
//     let x = document.getElementById("guessField").value;

//     if (x == y) {
//         alert("super!!! you did it"
//             + guess + " guess ");
//     }
//     else if (x > y) {
//         guess++;
//         alert("nuh!! try again");
//     }
//     else {
//         guess++;
//         alert("ohh!! try sm new")
//     }
// }


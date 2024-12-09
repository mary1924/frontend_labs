const y = Math.floor(Math.random() * 100) + 1;
console.log(y);
let guess = 1;
document.getElementById("guessButton").onclick = function () {
    let x = document.getElementById("guessInput").value;

    if (x == y) {
        alert("super!!! you win "
            + guess + " guess ");
    }
    else if (x > y) {
        guess++;
        alert("nuh!! the number's hight");
    }
    else {
        guess++;
        alert("ohh!! the number is lower")
    }
}


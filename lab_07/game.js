let balance = 100, attempts = 5, guess = 1, y = Math.floor(Math.random() * 20) + 1;

const updateUI = () => {
    document.getElementById("status").innerText = `Balance: $${balance}`;
    document.getElementById("remainingAttempts").innerText = `Attempts left: ${attempts}`;
};

const resetGame = () => {
    balance = 100; attempts = 5; guess = 1;
    y = Math.floor(Math.random() * 20) + 1;
    updateUI();
    document.getElementById("restartButton").style.display = "none";
};

const showRestart = () => document.getElementById("restartButton").style.display = "block";
document.getElementById("guessButton").onclick = () => {
    let x = +document.getElementById("guessInput").value;
    if (x < 1 || x > 20) return alert("Guess a number between 1 and 20.");
    
    if (x === y) {
        balance += 5;
        alert(`You win! It took ${guess} guesses.`);
        if (balance >= 120) return alert("You won the game!"), resetGame();
        resetGame();
    } else {
        attempts--; balance -= 10; guess++;
        alert(x > y ? "The number is lower." : "The number is higher.");
        if (attempts === 0 || balance <= 0) return alert("Game Over! No money left."), showRestart();
        updateUI();
    }
};
document.getElementById("restartButton").onclick = resetGame;
updateUI();
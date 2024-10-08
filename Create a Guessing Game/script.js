let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    
    attempts++;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed it right. The number was ${randomNumber}.`;
        feedback.style.color = 'green';
        attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'red';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Please enter a valid number.';
        feedback.style.color = 'orange';
    }
}

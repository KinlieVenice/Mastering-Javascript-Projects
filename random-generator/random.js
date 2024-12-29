let min = 1;
let max = 100;
const answer = Math.floor(Math.random() * (max - min + 1));

let attempts;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${min} and ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert("Enter number within the range only");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW TRY AGAIN!");
    } else if (guess < answer) {
      window.alert("TOO HIGH TRY AGAIN!");
    } else {
      window.alert("YOU GUESSED IT RIGHT! CONGRATS");
      running = false;
    }
  }
  
}

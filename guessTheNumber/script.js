let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

const randomNumber = document.querySelector(".number");
const message = document.querySelector(".message");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = "Please Enter The Number";
  } else if (guess > secretNumber) {
    message.textContent = "Too High!";
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "Too Low";
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else {
    message.textContent = "Your Won The Gam  e";
    document.body.style.backgroundColor = "green";
  }
});

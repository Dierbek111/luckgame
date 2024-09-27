let randomNumber = Math.floor(Math.random() * 100) + 1;

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  const userGuess = Number(input.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    result.innerText = "нармальное число введи";

    // input.value = ''
  } else if (userGuess == randomNumber) {
    result.innerText = "Поздравляю";

    setTimeout(() => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.innerText = "заново";



    }, 3000);
    input.value = ''
  } else if (userGuess < randomNumber) {
    result.innerText = "больше ⬆️";
    input.value = ''
  } else {
    result.innerText = "мьеньше ⬇️";
    input.value = ''
  }
});

console.log(randomNumber);


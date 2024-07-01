let computerNum = 0;

let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
let numRandomGoal = document.getElementById("numRandom");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  numRandomGoal.textContent = "랜덤숫자정답은?" + computerNum;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이의 숫자를 입력해주세요!";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.innerHTML =
      "이미 입력한 숫자입니다. <br>다른 숫자를 입력해주세요!";
    return;
  }

  chances--;
  chanceArea.textContent = `남은기회는: ${chances}번`;
  console.log("chances", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "up!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!";
  } else {
    resultArea.textContent = "정답!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  gameOver = false;
  playButton.disabled = false;
  chances = 3;
  chanceArea.textContent = `남은 기회는 ${chances}번`;
  history = [];
  resultArea.textContent = "결과값이 나옵니다";
}

pickRandomNum();

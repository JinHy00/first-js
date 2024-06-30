let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log("정답", computerNum);
}

function play() {
  let = userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "up!";
    console.log("up");
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!";
    console.log("down");
  } else {
    resultArea.textContent = "정답!";
    console.log("정답");
  }
}
pickRandomNum();

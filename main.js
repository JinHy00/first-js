/**
 * page 1
 * 1) 닉네임 입력
 * 2) 게임 규칙 -> 게임 설명 알람창 / "x"버튼 과 " 게임 시작"버튼 존재
 * 2-1) "x" 버튼은 알람창 닫기 / "게임시작"버튼은 page 2로 연결
 *
 * page 2
 * 1)"게임유저"님 숫자를 맞춰보세요!
 * 2) 랜덤 번호 지정
 * 3) 유저가 숫자 입력
 * 3-1) 숫자가 랜덤번호보다 크면 down / 작으면 up / 정답이면 정답
 * 4) 게임기회는 총 5번
 * 4-1) 숫자가 1~100이 아니거나 이미 입력했던 숫자라면 기회 카운트 안함
 * 4-2) 정답을 맞추거나 5번의 기회를 다 썼다면 "도전"버튼 비활성화
 * 5) 숫자를 입력하고 다음 숫자를 입력할 때 빈칸으로 만들어줌
 * */

// let computerNum = 0;
// let playButton = document.getElementById("play-button");
// let userInput = document.getElementById("user-input");
// let resultArea = document.getElementById("result-area");

// playButton.addEventListener("click", play);

// function pickRandomNum() {
//   computerNum = Math.floor(Math.random() * 100 + 1);
//   console.log("정답", computerNum);
// }

// function play() {
//   let = userValue = userInput.value;
//   if (userValue < computerNum) {
//     resultArea.textContent = "up!";
//     console.log("up");
//   } else if (userValue > computerNum) {
//     resultArea.textContent = "down!";
//     console.log("down");
//   } else {
//     resultArea.textContent = "정답!";
//     console.log("정답");
//   }
// }
// pickRandomNum();

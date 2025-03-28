// prompt 사용 연습

function test() {

  const password = prompt("비밀번호를 입력하세요");

  console.log(password);

  // 확인 -> 입력한 값이 문자열로 저장
  // 취소 -> null

  if(password == null) { // 취소
    alert("취소");

  } else { // 확인

    if(password == '1234') {
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치!");
    }

  }

}


// -------------------------------------------

const output = document.getElementById("output"); // 잔액 출력 span
const amount = document.getElementById("amount"); // 금액 작성 input

let balance = 10000; // 잔액 기록 변수(초기값 10000)
const pw = '1234'; // 비밀번호 저장 변수(비밀번호 1234)

output.innerText = balance; // 초기 금액 화면 출력

// 입금 함수
function deposit() {
  // input 에 입력된 금액 구하기
  console.log(amount.value.length);
  
  if(amount.value.length == 0) {
    alert("금액을 입력해주세요");

  } else {
    // 구한 금액을 잔액(balance)에 누적
    balance += Number(amount.value);
    // balance = balance + Number(amount.value);

    output.innerText = balance; // 화면에 잔액 업데이트 
    
    amount.value = ''; // input에 작성된 값 제거
  }

}

// 출금 함수
function withdrawal() {

}
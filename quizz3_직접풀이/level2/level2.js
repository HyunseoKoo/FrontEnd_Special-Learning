import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

/*
output
: 이름, 연락처 입력하고 [예약번호 확인] 버튼 클릭하면 일치하는 예약번호 나오게 하기

input
(1) 사용자가 입력한 이름
(2) 사용자가 입력한 연락처
(3) 사용자가가 입력한 이름&연락처와 일치하는 배열 객체
(4) 일차하는 예약번호

함수설계
(1) 사용자가 이름&연락처 입력하고 [예약번호 확인] 버튼을 누르면 reservation list에서 일치하는 이름을 찾는다.
    (일치하는 이름이 없는 경우 '예약 정보가 일치하지 않습니다' 알림창 띄우기)
(2) 중복 이름이 있으므로, 일치하는 이름 객체 배열에서 사용자가 입력한 연락처와 일치하는 객체를 찾는다.
    (이름 찾기(filter) => 연락처 찾기(find)) (일치하는 연락처 없는 경우, '예약 정보가 일치하지 않습니다' 알림창 띄우기)
(3) 일치하는 연락처 객체를 찾고 number 키값을 찾아서 화면에 나타낸다.
*/

const $userName = document.querySelector("[name='user-name']");
const $userPhone = document.querySelector("[name = 'user-phone']");
const $userReservationNumber = document.querySelector('#reservation-number');
const $form = document.querySelector('form');

$userPhone.addEventListener('input', (e) => {
  const userPhoneValue = e.target.value;
  const hipen = userPhoneValue
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/\-{1,2}$/g, '');
  e.target.value = hipen; // ?
  // return userPhoneValue.hipen;  이렇게는..?
});

function noList() {
  alert('예약 정보가 일치하지 않습니다');
}

$form.addEventListener('submit', (e) => {
  const userNameValue = $userName.value;
  const userPhoneValue = $userPhone.value;

  //    (배열)
  const sameName = RESERVATION_LIST.filter((el) => el.name === userNameValue);
  if ((sameName.length = 0)) return noList();

  //    (객체)
  const samePhone = sameName.find((el) => el.phone === userPhoneValue);
  if (!samePhone) return noList();
  // if(samePhone.length = 0) return noList(); 이렇게는..?
  $userReservationNumber.innerHTML = samePhone.number; // 객체의 number키 값을 innerHTML로 나타내기.
});

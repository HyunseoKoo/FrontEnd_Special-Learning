import { RESERVATION_LIST } from './reservation .js';
/*
예약 고객 확인하기
*/

const $userNameInput = document.querySelector(["[name='user-name']"]);
const $userPhonInput = document.querySelector(["[name='user-phone']"]);
const $form = document.querySelector('form');
const $reservation = document.querySelector('#reservation-number');

// 함수 기능 : 일치내역 없는 경우 알림 세팅
function NodeUserListInReservationList() {
  alert('일치하는 내역이 없습니다');
  $reservation.innerHTML = '일치하는 내역이 없습니다';
}

// 함수 기능 : 예약리스트의 연락처 양식과 같이, 사용자가 입력한 연락처에 하이픈을 적용하여 리스트에서 해당 번호를 조회할 수 있게 하기 위함.
$userPhonInput.addEventListener('input', (e) => {
  const phone = e.target.value; // 사용자가 입력한 연락처 값

  // 구글링 키워드: 1. 자바스크립트 정규표현식  // 구글링 결과: "특정 패턴의 문자열"을 찾기 위한 표현 방식
  const hiepnPhone = phone
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');
  e.target.value = hiepnPhone; // 사용자가 입력한 연락처를 위에서 세팅한 hiepnPhone방식으로 보여지도록 설정?
});

// 함수 기능 : 리스트에서 사용자가 입력한 이름 조회 -> 연락처 조회 -> 예약번호 화면창에 나타내기 위함.
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = $userNameInput.value;
  const userPhone = $userPhonInput.value;

  // filter 사용? 예약리스트에서 name키값이 userName과 같은 객체들의 배열을 만들기 위함.
  // 빈배열(일치하는 이름이 없는 경우) '일치 내역 없습니다' 알림창 뜨게함.
  // list.name
  // 구글링 키워드 : 자바스크립트 배열의 특정 값 찾고 배열화
  const sameNameUser = RESERVATION_LIST.filter((list) => list.name === userName);
  if (sameNameUser.length === 0) return NodeUserListInReservationList();

  // find 사용? sameNameUser(동일 이름인 객체 배열)에서 phone키값이 userPhone과 같은 객체를 찾기 위함.
  // !targetUser의 경우(일치하는 번호가 없는 경우) '일치 내역 없습니다' 알림창 뜨게함.
  // .innerHTML 사용? 할당값(targetUser의 number키값) 화면에 보여줌.
  // 구글링 키워드 : 자바스크립트 배열 특정값 가져오기
  const targetUser = sameNameUser.find((list) => list.phone === userPhone);
  if (!targetUser) return NodeUserListInReservationList();
  $reservation.innerHTML = targetUser.number;
});

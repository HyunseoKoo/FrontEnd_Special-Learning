import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

const $name = document.getElementsByName('user-name')[0];
const $phone = document.getElementsByName('user-phone')[0];
const $number = document.getElementsByTagName('button')[0];
const $nameInputValue = $name.value;
// 사용자가 이름 & 연락처 입력하고 [확인] 버튼 클릭 => 예약리스트에서 일치하는 name 있는지 확인

// 입력한 이름이 예약 리스트 객체 배열 name키 값과 일치하는 않을 경우 '일치내역 없습니다' 알림창 뜨게함
// input : 사용자가 입력한 값 & 예약리스트 객체의 name값

function noList($nameInputValue) {
  console.alert('일치내역이 없습니다');
}

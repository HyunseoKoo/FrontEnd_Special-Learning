import { BANK_LIST, ACCOUNT_FORM } from './mockData.js';
console.log(BANK_LIST, ACCOUNT_FORM);

/*
함수를 설계하는데 가장 중요한 것
1. 요구사항 확인하기 (아웃풋 = 결과값)
선택된 은행의 은행코드에 맞는 계좌 형식으로 앞 뒤 2글자를 제외한 나머지를 *로 가리고, -를 넣어서 보여주는 것

2. output 결과값이 확인
가장 먼저해야할 것 input을 찾아내는 것

3. 필요한 값 찾기
(1) 사용자가 입력한 계좌번호
(2) 사용자가 선택한 은행코드와 은행명
(3) 은행코드에 맞는 계좌 형식
(4) 계좌번호 앞뒤 가리고 -넣어서 보여줄 리스트

4. input을 토대로 기능을 구현하는 것
한글로 먼저 설계를 하고 실현 가능한지 검증 뒤에 코드를 치기 시작

(1) 계좌번호 입력이 가능한 input을 markup하고 해당 input의 입력된 값을 가지고와야한다.
(2) 사용자가 선택한 은행명과 코드를 알기위해 Select에 대한 내용을 채워줘야한다.
(3) 사용자가 선택한 select의 option 값을 가지고 올 수 있어야 한다.
(4) 사용자가 선택한 값으로 올바른 계좌번호 형식을 알고 있어야한다.
(5) 계좌 번호 앞 뒤 2글자를 자르고 나머지 자릿수는 *로 표시한다.

12글자
2글자
2글자
=> 8글자
*.repeat(8) 앞글자2글자, ********, 뒷글자2글자

(6) 선택된 계좌번호 형식에 맞게 하이픈을 추가한다.

*문자열 특정 인덱스에 문자 추가하는 법 = 결과값
* 특정 인덱스 = 하이픈 인덱스

const $selector = document.querySelector(#bank-list')
let bankcode = $selector.value; // 3 [선택한 옵션값] [내가 선택한 은행의 계좌포맷 가져온것]

//00-0000-00-000-00
const hipenIndex = [];
ACCOUNT_FORM(bankcode).forEach(el,index) => {
    if(el === '-') hipenIndex.push(index)
}

구현가능.


구글링x
구글링할 때 가장 큰문제점? 결과값을 원합니다.
구현만 하면 되는겁니다. 과정(코드)이 중요한게 아니라 내가 이걸 구현할 수 있다.
=>
(1) input value 가져오는 법
(2) select 동적 option 구현하기
(3) select 쿼리셀렉터로 가져오면 된다? addEventListener로 가져오려고 함..ㅋㅋ

*/

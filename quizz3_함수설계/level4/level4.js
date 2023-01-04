/* 
페이지네이션 구현하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

기초 변수

let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/

/*

1. output 구상
 (1) 페이지 버튼 누르면 주소창에 클릭한 페이지 주소가 나타나게 하기
 (2) 새로고침해도 마지막에 머무른 페이지 주소가 주소창에 나타나게 하기
 (3) 양옆 화살표 버튼을 누르면 슬라이드 배너처럼 안보였던 전후 페이지들의 화면으로 넘어가게 하기
 
2. input 연상
 (1) 총 80개의 페이지 버튼
 (2) 버튼 클릭한 현재 페이지 번호(인덱스)
 (3) 현재 페이지의 주소
 (4) 그룹 배너 이동 시 활용할 화살표 버튼

3. 함수 설계
 (1) 총 80페이지로 80개의 페이지 버튼을 나타낸다.
 (2) 페이지별 인덱스를 활용하여 사용자가 특정 페이지 버튼을 클릭하면 창이 나타나도록 세팅한다.
 (3) 각 페이지 버튼 클릭시 주소창에 나타나는 주소값을 지어준다. (url 링크)
 (4) 슬라이드 배너 구현 형식으로 한 배너 당 10 페이지씩 보이게끔 그룹을 설정한다.
 (5) 양옆 화살표 버튼 클릭 시 이전, 이후 그룹으로 이동하게 설정한다. 

4. 구글링 키워드
 (1) 자바스크립트 페이지네이션 구현하기
 (2) 자바스크립트 url parameter 가져오기
 (3) 자바스크립트 새로고침후 현재 페이지 유지하는 법

*/

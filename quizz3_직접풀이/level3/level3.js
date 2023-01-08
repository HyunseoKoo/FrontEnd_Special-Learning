/* 
레시피 재료 추가하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기
*/

/*
output
(1) 재료명, 용량 입력하고 [추가] 버튼 누르면 테이블에 표 추가되어 나타나게 하기
(2) 관리 부분에 [삭제] 버튼 만들고 클릭하면 해당 항목 삭제되게 하기
(3) [제출] 버튼 누르면 텍스트로 나타나게 하기

input
(1) 사용자가 입력한 재료명
(2) 사용자가 입력한 용량
(3) [추가] 이벤트 줄 form태그
(4) 행 추가할 table태그
(5) 테이블에서 행 삭제할 [삭제] button태그
(6) list추가 이벤트 줄 [제출] button태그
(7) 항목 추가할 list를 컨트롤할 ul태그

함수설계
(1) 사용자가 재료명, 용량 입력하고 [추가]버튼 누르면 table에 행이 생성되어 해당 부분에 나타나게 한다.
(2) 테이블 관리 열의 [삭제] 버튼 누르면 해당 행 전체 삭제되게 하기
(3) [제출] 버튼을 누르면 리스트에 해당 내용(재료명: OO / 용량: OO) 추가

*/

const $form = document.querySelector('#ingredient-form');
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector('table');
const $submitButton = document.querySelector('#submit_button');
const $list = document.querySelector('#ingredient-list');

$form.addEventListener('submit', (e) => {
  const ingredientValue = $ingredient.value;
  const weightValue = $weight.value;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
    `;

  tr.addEventListener('click', 삭제이벤트);
});

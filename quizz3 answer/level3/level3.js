/* 
레시피추가하기
*/

const $form = document.querySelector('#ingredient-form');
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector('table');
const $button = document.querySelector('#submit_button');
const $list = document.querySelector('#ingredient-list');
const INGREDIENT_LIST = new Map(); // Map 사용? 사용자가 추가한 재료를 담을 공간이 필요하기 때문?
/* 재료명&용량 입력, 추가하면 INGREDIENT_LIST 맵에 이렇게 나옴
Map(2)
[[Entries]]
0: {"시금치" => "100"}      // {"키" => "값"}
1: {"양파" => "300"}
size: 2
*/

// 함수 기능 : [삭제] 버튼 클릭시 테이블에서 없애고 map에서도 삭제
// 구글링 키워드: element.matches()  => 선택이 되는지 여부를 확인하는 메서드(?). [값: true/false]
//                자바스크립트 closest 메서드  =>  현재 요소에서 가장 가까운 조상의 element를 반환 (만약 조상이 없다면 null값 반환)
function deleteIngredient(e) {
  if (!e.target.matches('button')) return; // e.target인 <button type="button">삭제</button>이 없다면 리턴 (테이블에 추가된 요소가 있는지 확인용..?)
  const $tr = e.target.closest('tr'); // e.target인 [삭제]버튼의 가장 가까운 부모요소인 tr을 찾아서 반환
  /*
  <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
  */
  const ingredient = $tr.querySelector('td').textContent; // ${ingredientValue}
  $tr.remove(); // tr 삭제
  INGREDIENT_LIST.delete(ingredient); // INGREDIENT_LIST 맵에서 ingredient(키) 값 삭제
}

// 함수 기능 : [재료 중복 입력과 입력 누락을 피하기 위해 알림창 세팅. tr 태그를 만들어서 submit 하면 입력한 값이 테이블 아래에 추가되도록 세팅 후 재료명, 용량 인풋값 초기화시킴
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ingredientValue = $ingredient.value;
  const weightValue = $weight.value;
  if (INGREDIENT_LIST.has(ingredientValue)) return alert('이미 존재하는 재료입니다');
  // 사용자가 입력한 ingredientVlaue(재료명)가 INGREDIENT_LIST에 있다면 '이미 존재하는 재료입니다' 알림
  if (!ingredientValue || !weightValue) return alert('입력해주세요');
  // 사용자가 재료명이나 용량을 안 적으면 '입력해주세요' 알림

  const tr = document.createElement('tr'); // (html) tr 생성

  // tr의 td 요소 생성 (사용자가 작성한 재료명, 용량을 테이블에 추가 입력)
  tr.innerHTML = `
  <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
  `;

  // 삭제 이벤트
  tr.addEventListener('click', deleteIngredient);

  // 기능 : 입력한 재료명, 용량을 [추가]하면 테이블에 해당내용 추가하고, 인풋 초기화시키기
  // 구글링 키워드: 자바스크립트 map 키값 추가  // 구글링 결과: map.set(key, value) => key를 이용해 value를 저장한다
  INGREDIENT_LIST.set(ingredientValue, weightValue); // 추론: ingredientValue키를 이용해 weightValue값 저장?
  $table.append(tr); // 생성한 tr을 테이블 마지막 요소 뒤에 추가
  $ingredient.value = ''; // 재료명 인풋값 초기화
  $weight.value = ''; // 중량 인풋값 초기화
});

// 함수기능:  [제출] 버튼 클릭하면 테이블 td가 리스트에 추가
$button.addEventListener('click', () => {
  if ($list.children.length > 0) $list.innerHTML = ''; // $list의 자식요소인 li가 있을 경우 ul 요소 공백??
  // INGREDIENT_LIST 맵의 전체 요소를 순회하여 li에 추가하기 위해 forEach 사용
  // 구글링 키워드 : 자바스크립트 map foreach  // 구글링 결과 : map.forEah( (value, key) => {console.log("key: " + key + ", value: " + value);} );
  INGREDIENT_LIST.forEach((weight, ingredient) => {
    const li = document.createElement('li'); // li 태그 생성
    li.innerText = `${ingredient} : ${weight}`; // li 텍스트 지정
    $list.append(li); // ul 태그내 맨 끝에 생성한 li 추가
  });
});

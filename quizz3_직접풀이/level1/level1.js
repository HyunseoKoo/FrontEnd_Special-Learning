/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

// function division() {}
// arr = [1,2,3,4,5]
// divition(arr, 2); === [ [1,2], [3,4], [5] ]

//                     input(2)
function division(arr, number) {
  const result = []; // input(3)
  for (i = 0; arr.length < i; i += number) {
    result.push(arr.slice(i, i + number));
  }
  return result;
}

const arr2 = [1, 2, 3, 4, 5];
console.log(division(arr2, 3));

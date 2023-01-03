/*
배열 나누기
함수 divition은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

필요한 매개변수를 정의하세요
함수내 변수가 필요한다면 해당 변수 부분도 선언 및 정의하세요

매개변수를 어떻게 사용할지 한글로만 작성해보세요
*/

function divition(originArr, divNumber) {
  const arr = originArr;
  const result = []; // ------------------ result 변수를 [](빈배열)로 할당한 이유? push로 담을 큰 배열이 필요
  for (let i = 0; i < arr.length; i += divNumber) {
    // 내가 원하는 인덱스에 접근하기 위해서 증감식 정의
    result.push(arr.slice(i, i + divNumber));
    //       ------------------------------- slice 사용? for문 증감식을 통해 필요한 인덱스 번호에 접근하여 divNumber 갯수만큼 삭제한 요소 반환하기 위함.
    // ------------------------------------- push 사용? slice 배열 내장함수로 얻게된 배열들을 요소 마지막 위치에 누적하고자 사용.
  }
  return result;
}

// 연습
const arr = [1, 3, 4, 5, 6, 7, 8, 10, 14, 34, 56, 79, 90, 123, 234, 463, 6757, 8677, 98869678];
console.log(arr.length); // 19
const result = [];
for (let i = 0; i < arr.length; i += 3) {
  // i<19  & i인자 3, 6, 9 , 12, 15, 18
  result.push(arr.slice(i, i + 3));
}
//
console.log(result);
// [
//     [ 1, 3, 4 ],
//     [ 5, 6, 7 ],
//     [ 8, 10, 14 ],
//     [ 34, 56, 79 ],
//     [ 90, 123, 234 ],
//     [ 463, 6757, 8677 ],
//     [ 98869678 ]
//   ]

const arr1 = arr.slice(0, 3);
console.log(arr1); // [1,3,4]

const arr2 = arr.slice(3, 6);
console.log(arr2); // [5,6,7]

const arr3 = arr.slice(6, 9);
console.log(arr3); // [8,10,14]

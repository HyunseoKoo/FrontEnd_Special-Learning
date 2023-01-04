/* 
페이지네이션 구현하기
*/

const $pageList = document.querySelector('.page_list');
// <span class="page_list"> </span>
const $nextPage = document.querySelector('.btn_nav.next');
//<a class="btn_nav next ir"></a>
const $prevPage = document.querySelector('.btn_nav.pre');
// <a class="btn_nav pre ir"></a>

let totalPage = 80;
let PAGE_LST = [];
let currentPageIndx = 0;
// 구글링 키워드 : 자바스크립트 URLSearchParams.get  //  검색 결과: urlSearchParams에 .get('parameterName')은 해당 parameterName으로 조회되는 첫번째 값을 return 한다.
//                 자바스크립트 URL 객체 사용법
// || 1; => ? 조회되는 첫번재 값 조회하도록 하는것...??
let currentPage = new URLSearchParams(location.search).get('page') || 1;
// 사용자가 클릭한 페이지버튼의 위치

// 함수 기능: Array n개씩 나누기
Array.prototype.division = function (div) {
  const arr = this;
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i += div) {
    result.push(arr.slice(i, i + div));
  }
  return result;
};

//
(function pagaNation(totalPage, currentPage) {
  const paageNation_list = [];
  const paageNation_limit = 10;
  currentPageIndx = Math.ceil(currentPage / paageNation_limit) - 1; // currentPage 1~10 => currentPageIndx = 1, currentPage 11~20 => currnetPageIndx = 2, ... , currentPage 71~80 => currentPageIndx = 8
  for (let i = 1; i <= totalPage; i++) {
    paageNation_list.push(i);
  } // [1,2,3,4,...,80]
  PAGE_LST = paageNation_list.division(paageNation_limit); //[[1,..,10], [11,..,20], [21,..,30],..,[71,..,80]]
  renderPageNation(); // 위치가..?
})(totalPage, currentPage); // 의미하는 바..?

// 페이지네이션 랜더링
function renderPageNation() {
  const pageNationList = PAGE_LST[currentPageIndx]; // 여기서 currnetPageIndx는 전역변수 0?
  $pageList.innerHTML = pageNationList
    .map((page) => {
      return `<a href="?page=${page}" class="nav_page" data-page="${page}">${page}</a>`;
    }) // (주소)page=인자(클릭한 페이지?), (css)class="nav_page", (?)인자(클릭한 페이지?)
    .join(''); // 배열 내에 모든 값들을 순서대로 연결시켜줌..?
  // <a href="?page=1" class="nav_page on" data-page="1">1</a><a href="?page=2" class="nav_page" data-page="2">2</a><a href="?page=3" class="nav_page" data-page="3">3</a><a href="?page=4" class="nav_page" data-page="4">4</a><a href="?page=5" class="nav_page" data-page="5">5</a><a href="?page=6" class="nav_page" data-page="6">6</a><a href="?page=7" class="nav_page" data-page="7">7</a><a href="?page=8" class="nav_page" data-page="8">8</a><a href="?page=9" class="nav_page" data-page="9">9</a><a href="?page=10" class="nav_page" data-page="10">10</a>

  const pageList = document.querySelector('.page_list').children;
  for (let i = 0; i < pageList.length; i++) {
    // 구글링 키워드 : 배열요소.dataset  // 구글링 결과: (html) dataset 객체를 통해 data 속성을 가져오기 위해서는 속성 이름의 data- 뒷부분을 사용. ex) data-page="${page}"
    if (pageList[i].dataset.page == currentPage) {
      // pageList[i].dataset.page => data-page"${span}"
      pageList[i].classList.add('on');
    }
  }
}

// 넥스트 페이지 그룹
function nextPageGroup() {
  if (!(currentPageIndx < PAGE_LST.length - 1)) return;
  currentPageIndx++;
  renderPageNation();
}

// 이전 페이지 그룹
function prevPageGroup() {
  if (!(currentPageIndx > 0)) return;
  currentPageIndx--;
  renderPageNation();
}

$nextPage.addEventListener('click', nextPageGroup);
$prevPage.addEventListener('click', prevPageGroup);

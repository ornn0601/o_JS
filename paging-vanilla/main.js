const rowsPerPage = 10; //
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage); // 12.9 → 13
const numbers = document.querySelector('#numbers');

const prevPageBtn = document.querySelector('.pagination .fa-arrow-left');
const nextPageBtn = document.querySelector('.pagination .fa-arrow-right');

let pageActiveIdx = 0; // 현재 보고 있는 페이지그룹의 번호
let currentPageNum = 0; // 현재 보고 있는 페이지네이션 번호
let maxPageNum = 3; // 페이지그룹의 최대 개수

// 페이지네이션 생성
for(let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

// 페이지 번호 클릭
const numberBtn = numbers.querySelectorAll('a');

// numberBtn.forEach(function(item, idx) { });
numberBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {

    // 페이지 번호 active
    e.preventDefault();
    // 테이블 출력 함수
    displayRow(idx);
  });
});

// nodeList, htmlcollectio → array로 변경하는 방법
// Array.from(대상), es6: [...대상]
function displayRow(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows];

  for(let ra of rowsArray) {
    ra.style.display = 'none';
  }

  let newRows = rowsArray.slice(start, end);
  for(let nr of newRows) {
    nr.style.display = '';
  }

  for(let nb of numberBtn) {
    nb.classList.remove('active');
  }
  numberBtn[idx].classList.add('active');

} // displayRow
displayRow(0);

// 페이지네이션 그룹 표시 함수
function displayPage(num) {

  for(let nb of numberBtn) { // 페이지네이션 번호 감추기
    nb.style.display = 'none';
  }
  let totalPageCount = Math.ceil(pageCount / maxPageNum);

  let pageArr = [...numberBtn];
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);

  for(let item of pageListArr) {
    item.style.display = 'block';
  }

  // prevPageBtn 버튼
  if(pageActiveIdx == 0) {
    prevPageBtn.style.display = 'none';
  } else {
    prevPageBtn.style.display = 'block';
  }

  // prevPageBtn 버튼
  if(pageActiveIdx == totalPageCount - 1) {
    nextPageBtn.style.display = 'none';
  } else {
    nextPageBtn.style.display = 'block';
  }

}
displayPage(0);

// 다음 버튼 클릭
nextPageBtn.addEventListener('click', () => {
  let nextPageNum = (pageActiveIdx * maxPageNum) + maxPageNum;

  displayRow(nextPageNum);
  ++pageActiveIdx;
  displayPage(pageActiveIdx);
});

// 이전 버튼 클릭
prevPageBtn.addEventListener('click', () => {
  let nextPageNum = (pageActiveIdx * maxPageNum) - maxPageNum;

  displayRow(nextPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
});

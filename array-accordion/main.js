jQuery(document).ready(function() {

  // faqFixedData , faqData
  // 아코디언 정보 가져오기const list_el = $('#list');
  const pagination_el = $('#pagination');
  const fixedBox = $('#fixedBox');
  const contentBox = $('#contentBox');

  let current_page = 1; // 시작 페이지 번호
  let pageCount = 3; // 페이징 갯수
  let dataPerPage = 5; //한 페이지에 표현될 갯수

  let faqDataLength = faqData.length; // 일반 데이터 갯수

  // 고정 
  displayList(faqFixedData, fixedBox, dataPerPage, current_page);
  
  // 일반
  displayList(faqData, contentBox, dataPerPage, current_page);
  pagingList(faqDataLength, dataPerPage, pageCount, current_page);


  // 내용
  function displayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatdeItems = items.slice(start, end);
    
    let item_element = "";
    for (let i = 0; i < paginatdeItems.length; i++) {

      item_element += `<div class="accordionItem">
      <div class="questionBox">
        <p class="categoryText">${paginatdeItems[i].category}</p>
        <p class="noText">${paginatdeItems[i].no}.</p>
        <p class="questionText">${paginatdeItems[i].question}</p>
      </div>
      <div class="answerBox">
        <p class="answerText">${paginatdeItems[i].answer}</p>
      </div>
      </div>`

      wrapper.html(item_element);
    }
  }

  // 좌우 버튼 스타일 조정
  // 페이징 표시 함수
  function pagingList(dataLength, dataPerPage, pageCount, currentPage) {
    // console.log("currentPage : " + currentPage);

    // Math.ceil() (소수값이 존재할 때 값을 올리는 역활을 하는 함수)
    totalPage = Math.ceil(dataLength / dataPerPage); //총 페이지 수
    
    if(totalPage < pageCount){
      pageCount = totalPage;
    }
    
    let pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹
    lastNum = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호
    
    if (lastNum > totalPage) {
      lastNum = totalPage;
    }

    let first = lastNum - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
    let next = lastNum + 1;
    let prev = first - 1;

    let pageHtml = "";

    const prevBtn = $('#prev');
    const nextBtn = $('#next');

    // 이전
    if (prev > 0) {
      prevBtn.addClass('active');
    } else {
      prevBtn.removeClass('active');
    }

  //페이징 번호 표시 
    for (var i = first; i <= lastNum; i++) {
      if (currentPage == i) {
        pageHtml += `<li class='on'>${i}</li>`;
      } else {
        pageHtml += `<li>${i}</li>`;
      }
    }

    // 다음
    if (lastNum < totalPage) {
      nextBtn.addClass('active');
    } else {
      nextBtn.removeClass('active');
    }

    pagination_el.html(pageHtml);

    //페이징 번호 클릭 이벤트 
    $(".paginationBox li").on('click', function () {
      let $id = $(this).attr("id");
      selectedPage = $(this).text();

      if ($id == "next") {
        selectedPage = next;
      }
      if ($id == "prev") {
        selectedPage = prev;
      }

      //전역변수에 선택한 페이지 번호를 담는다.
      globalCurrentPage = selectedPage;

      displayList(faqData, contentBox, dataPerPage, globalCurrentPage);
      pagingList(faqDataLength, dataPerPage, pageCount, globalCurrentPage);  
    });
  }

  // 아코디언 클릭
  $(document).on('click', '.questionBox', function() {
    $(this).toggleClass('on');
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().children('.answerBox').stop().slideUp();
    $(this).parent().siblings().children('.questionBox').removeClass('on');
    // $(this).addClass('on');
    // $(this).parent().siblings().children('.answerBox').stop().slideUp();
    // $(this).next().stop().slideDown();

  });

});

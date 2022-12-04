jQuery(document).ready(function() {

  const list_element = $('#list');
  const pagination_element = $('#pagination');

  let current_page = 1; // 시작 페이지
  let rows = 3; // 한 페이지 갯수

  let items; // 데이터 저장
  let dataLength; // 데이터 길이

  function getJSON() {
    $.ajax({
      method: "get",
      url: "data.json",
      dataType: "json", //html, xml, text, script, json, jsonp 등 다양하게 쓸 수 있음
      async : false,
      success: function(data) { //요청 성공시 실행될 메서드
        console.log("통신성공");
        items = data.notices.reverse(); // 데이터 변수로 저장
        dataLength = data.notices.length; // 데이터 총 길이 파악 

        displayList(items, list_element, rows, current_page);
        setupPagination(items, pagination_element, rows);
  
      },
      error: function() { //요청 실패시 에러 확인을 위함
        console.log("통신 에러");
        alert('통신 에러');
      }
    });
  };
  getJSON();

  function displayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatdeItems = items.slice(start, end);
    // console.log(paginatdeItems);
    
    let item_element = "";
    for (let i = 0; i < paginatdeItems.length; i++) {

      item_element += `<tr class="item">
      <td>${paginatdeItems[i].id}</td>
      <td>${paginatdeItems[i].category}</td>
      <td>${paginatdeItems[i].title}</td>
      <td>${paginatdeItems[i].date}</td>
      </tr>`

      wrapper.html(item_element);
    }
  }

  function setupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
      let btn = paginationButton(i, items);
      wrapper.append(btn);
    }
  }

  function paginationButton(page, items) {
    let button = $("<li></li>");
    button.text(page);

    if (current_page == page) {
      button.addClass('on');
    }

    button.on('click', function() {
      current_page = page;
      displayList(items, list_element, rows, current_page);

      let current_btn = $('#pagination li.on');
      current_btn.removeClass('on');
      button.addClass('on');
    }); 
    return button;
  }

});

// 테이블 높이 고정
jQuery(document).ready(function() {
  let table = $('table');
  let tableHeight = table.height();
  // console.log(tableHeight);

  $('.table_bgBox').css('height', tableHeight);
});
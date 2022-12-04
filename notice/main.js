jQuery(document).ready(function() {

  let dataLength; //총 데이터 수
  let dataPerPage = 5; //한 페이지에 나타낼 글 수
  let pageCount = 10; //페이징에 나타낼 페이지 수
  let globalCurrentPage = 1; //현재 페이지
  let dataList;
  let lastNum;

  function getJSON() {
    $.ajax({ //jquery ajax
      method: "get", //get방식으로 가져오기
      url: "data.json", //값을 가져올 경로
      dataType: "json", //html, xml, text, script, json, jsonp 등 다양하게 쓸 수 있음
      async : false,
      success: function(data) { //요청 성공시 실행될 메서드
        console.log("통신성공");
        dataList = data.notices.reverse(); // 데이터 변수로 저장(역순)
        dataLength = data.notices.length; // 데이터 총 길이 파악 

        //페이징 표시 호출
        paging(dataLength, dataPerPage, pageCount, 1);

        // //글 목록 표시 호출 (테이블 생성)
        displayData(1, dataPerPage);

        // 한번에 데이터 뿌리기
        // let chartHtml;
        // for (let i = 0; i < dataLength; i++) {
        //   chartHtml += `<tr>
        //     <td>${dataList[i].id}</td>
        //     <td>${dataList[i].category}</td>
        //     <td>${dataList[i].title}</td>
        //     <td>${dataList[i].date}</td>
        //   </tr>`;
        // }
        // $("#dataTableBody").html(chartHtml);



      },
      error: function() { //요청 실패시 에러 확인을 위함
        console.log("통신 에러");
        alert('통신 에러');
      }
    });
  };
  getJSON();


  // 페이징 표시 함수
  function paging(dataLength, dataPerPage, pageCount, currentPage) {
    console.log("currentPage : " + currentPage);

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


    // html 표시
    if (prev > 0) {
      pageHtml += "<li><a href='#' id='prev'>이전</a></li>";
    }

  //페이징 번호 표시 
    for (var i = first; i <= lastNum; i++) {
      if (currentPage == i) {
        pageHtml += "<li class='on'><a href='#' id='" + i + "'>" + i + "</a></li>";
      } else {
        pageHtml += "<li><a href='#' id='" + i + "'>" + i + "</a></li>";
      }
    }

    if (lastNum < totalPage) {
      pageHtml += "<li><a href='#' id='next'>다음</a></li>";
    }

    $("#pagingul").html(pageHtml);

    // 페이지 총 갯수 표시
    let displayCount = "";
    displayCount = "현재 1 - " + totalPage + " 페이지 / " + dataLength + "건";
    $("#displayCount").text(displayCount);


    //페이징 번호 클릭 이벤트 
    $("#pagingul li a").click(function () {
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

      //페이징 표시 재호출
      paging(dataLength, dataPerPage, pageCount, globalCurrentPage);
      
      //글 목록 표시 재호출
      displayData(selectedPage, dataPerPage);

    });
  }

  // **********
  //현재 페이지(currentPage)와 페이지당 글 개수(dataPerPage) 반영
  function displayData(currentPage, dataPerPage) {

    let chartHtml = "";

    //Number로 변환하지 않으면 아래에서 +를 할 경우 스트링 결합이 되어버림.. 
    currentPage = Number(currentPage);
    dataPerPage = Number(dataPerPage);

    // 한 페이지에 보여지는 갯수 (3 ,6 ,9 ...)
    let dataPerPageNum = ((currentPage - 1) * dataPerPage) + dataPerPage;
    // 여백 
    let currentPageNum = Math.abs(dataLength - dataPerPageNum);
    // console.log(currentPageNum);

    // 한페이지에 구현하는 갯수 제한 (3개씩), 마지막 페이지 오류 발생 
    for (let i = (currentPage - 1) * dataPerPage; i <= dataPerPageNum; i++) {
        chartHtml += `<tr>
          <td>${dataList[i].id}</td>
          <td>${dataList[i].category}</td>
          <td>${dataList[i].title}</td>
          <td>${dataList[i].date}</td>
        </tr>`;
    }
    $("#dataTableBody").html(chartHtml);
  }

});
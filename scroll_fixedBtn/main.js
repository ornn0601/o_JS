// **********************************
// 상단 픽스 메뉴
jQuery(document).ready(function ($) {
  
    const stickySection = $('.sticky_section');
    const empty1 = $('.emptyBox-1');
    const empty2 = $('.emptyBox-2');

    let didScroll;
    let stickyOffsetTop;
    let stickyHeight = $('.sticky_section').height();
    let empty1H = $('.emptyBox-1').height();

    // 반응형에 따라 변하는 콘텐츠 높이 적용
    $(window).resize(function() {
      stickyHeight = $('.sticky_section').height();
      empty1H = $('.emptyBox-1').height();
    });

    // stickySection이 있으면 실행, console 오류 방지
    if (stickySection.length){
      stickyOffsetTop = stickySection.offset().top;
    }

    // 스크롤 실행
    $(document).scroll(function () {
      didScroll = true;

      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
    });

    // 픽스메뉴 설정
    // 다음에 나오는 콘텐츠에 픽스버튼 만큼의 높이를 주어 버튼이 고정되면서 생기는 여백을 대신하여 준다. (깜빡이는 효과 제거)
    function hasScrolled() {
      let st = $(this).scrollTop();

      // fixed : 기준 - 상단 컨테이너 높이보다 현재 스크롤 높이가 커질때
      // if (st > empty1H) {
      //     stickySection.addClass('fixed');
      //     empty2.css('margin-top', stickyHeight);
      // } else {
      //     stickySection.removeClass('fixed');
      //     empty2.css('margin-top', 0);
      // }

      // fixed : 기준 - 버튼 컨테이너가 상단에 위치했을때
      if (st > stickyOffsetTop) {
        stickySection.addClass('fixed');
        empty2.css('margin-top', stickyHeight);
      } else {
        stickySection.removeClass('fixed');
        empty2.css('margin-top', 0);
      }
    }

});
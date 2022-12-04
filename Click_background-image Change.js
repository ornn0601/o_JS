jQuery(document).ready(function($) {

    /* 태그선택 */
    const $dayBtn = $('#dayBtn');
    const $imgbtns = $('.home_section section .btnBox ul');
    const imgBox = $('.home_section .content_container .imgBox');

    // 함수 클래스 붙이기
    $imgbtns.find('li').click(function() {

        // 클릭요소에 'active'추가, 형제요소들에겐 'active'삭제
        $(this).addClass('active').siblings().removeClass('active');  
        
        // 클릭요소 중 하나에 조건 부여   
        if ($dayBtn.hasClass('active')) {
          imgBox.css('background-image', 'url(/wp-content/uploads/20211226_ludenseum_v2_Day.jpg)');
        } else {
          imgBox.css('background-image', 'url(/wp-content/uploads/20211226_ludenseum_v2_Night.jpg)');
        }
    });
    
});
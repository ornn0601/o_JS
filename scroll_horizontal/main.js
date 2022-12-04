
jQuery(document).ready(function() {
    
    $(window).on('scroll', function() {
        let fixedBox = $('#fixedBox');
        
        let winScroll = $(window).scrollTop();
        let winHeight = $(window).height();
        let fixedTop = fixedBox.position().top;
        console.log(fixedTop);

        if (winScroll > fixedTop) {
          fixedBox.addClass('active');
          console.log('add active');
        } else {
          fixedBox.removeClass('active');
          console.log('remove active');
        }
    });
});

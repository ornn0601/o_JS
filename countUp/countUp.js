/* ********** ********** ********** */
/*           COUNT UP JS            */
/* ********** ********** ********** */

// const cn1 = n1.toLocaleString('ko-KR');

jQuery(document).ready(function() {

  let counter;
  let isAction1 = false;
  let isAction2 = false;

  $(window).on('scroll', function() {

    let bottom_of_window = $(window).scrollTop() + $(window).height();

    $('.o_countUp_1').each(function() {
      counter = $(this).find('.counter');
      let bottom_of_object = ($(this).offset().top) + $(this).outerHeight();
  
      if (isAction1 === true) { return false; }
      if( bottom_of_window > bottom_of_object ) {
        counteUp();
        isAction1 = true;
      }
    });

    $('.o_countUp_2').each(function() {
      counter = $(this).find('.counter');
      let bottom_of_object = ($(this).offset().top) + $(this).outerHeight();

      if (isAction2 === true) { return false; }
      if( bottom_of_window > bottom_of_object ) {
        counteUp();
        isAction2 = true;
      }
    });
  }); 

  // 카운트 애니메이션
  function counteUp() {
    counter.each(function() {
      let $this = $(this);
      let countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum).toLocaleString());
        },
        complete: function() {
          $this.text(this.countNum.toLocaleString());
        }
      });
    });
  }

});
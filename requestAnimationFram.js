// requestAnimationFrame 사용법

let item = document.querySelector('.item');
let value = document.querySelector('.value');
let yPos = 0;
let rafId;

function render() {
  value.innerHTML = yPos;
  item.style.transform = `translateY(${-yPos})px`;
  yPos += 10;

  // 애니메이션 숫자 변수로 담기
  rafId = requestAnimationFrame(render);

  // 500 높이에서 애니메이션 멈추기
  if (yPos > 500) {
    cancelAnimationFrame(rafId);
  }
}

render();

// 클릭으로 애니메이션 멈추기
window.addEventListener('click', function() {
  cancelAnimationFrame(rafId);
});


// **********
// 부드럽게 감속하기 패턴
const box = document.querySelector('.box');
let acc = 0.1;
let delayedYOffset = 0;
let rafId2;
let rafState;

window.addEventListener('scroll', ()=> {
  if (!rafState) {
    rafId2 = requestAnimationFrame(loop);
    rafState = true;
  }
});

function loop() {
  delayedYOffset = delayedYOffset + (pageYOffset - delayedYOffset) * acc;
  box.style.width = `${delayedYOffset}px`;
  
  rafId2 = requestAnimationFrame(loop);

  if (Math.abs(pageYOffset - delayedYOffset) < 1 ) {
    cancelAnimationFrame(rafId2);
    rafState = false;
  }
}
loop();
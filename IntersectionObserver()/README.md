# IntersectionObserver()
- <div>가 현재 화면에 보이는지 파악하기 쉬워짐

```js
let observer = new IntersectionObserver((e) => {
  e.forEach((box) => { // 나타날때
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
      box.target.style.transform = "translateX(";
    } else { // 사라질때
      box.target.style.opacity = 0;
    }
  });
});

let div = document.querySelectorAll('div');

// html 요소가 화면에 등장하는지 감시해줌
observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(div[3]);
```
# Text Event  

---
## 글자수 컨트롤  
```js
  function textLength() {
    $.each($('.o_blog_section .et_pb_post'), function() {
      let count = $(this).find('.post-content p');
      let str = count.text();
      str = str.substring(0, 100) + ' ...'; 
      count.text(str);
    });
  }
  textLength();
```

```css
.o_blog_section .et_pb_post .post-content p {
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 박스를 수직방향으로 배치 */
  -webkit-line-clamp: 5; /* 줄 수 지정 */
  overflow: hidden;
  text-overflow: ellipsis; /* ... */
}
```
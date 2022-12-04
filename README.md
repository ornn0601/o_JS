# JS

## 기존 요소의 내부에 추가  
- .append() : 선택된 요소의 마지막에 새로운 요소나 콘텐츠 추가  
- .prepend() : 선택된 요소의 첫번째에 새로운 요소나 콘텐츠 추가  
- .appendTo() : 선택된 요소를 해당 요소의 마지막에 추가  
- .prependTo() : 선택된 요소를 해당 요소의 첫번째 추가  
```js
$(target).append(source);
$(target).prepend(source);
$(source).appendTo(target);
$(source).prependTo(target)
```  
    
---
## 기존 요소의 외부에 추가  
- before() : 선택한 요소의 바로 앞쪽에 새로운 요소나 콘텐츠 추가  
- after() : 선택한 요소의 바로 뒤에 새로운 요소나 콘텐츠 추가
- insertBefore() : 선택한 요소를 해당 요소의 앞쪽에 추가  
- insertAfter() : 선택한 요소를 해당 요소의 뒤쪽에 추가  
```js
$(target).before(source);
$(target).after(source);
$(source).insertBefore(target);
$(source).insertAfter(target);
```  
  
---
## 클래스 여부 체크 하는 방법  
- 원하는 클래스의 길이를 여부를 체크한다.  
- 길이가 1 이상이면 화면에 존재한다는 것.  
- 길이가 0이면 fals가 되어 해당 코드 미실행으로 오류 차단  
  
```js
let stickyOffsetTop;
if (stickySection.length){
  stickyOffsetTop = stickySection.offset().top;
}
```
  
---
## Table 번호 넣기    
```js  
let tableNum = $(".table_num");
for (let i = 0; i <= tableNum.length; i++) {
    tableNum.text(tableNum[i - 1] = i + 1);
}
```  
  
---  
## 주소 복사  
```js
클릭버튼.on('click', function () {
  navigator.clipboard.writeText('복사될 주소').then(funct() {
    alert('URL 주소가 복사 되었습니다. 이제 지인에게 혜택을 공유하세요!')
  });
});
```  
  
---
## 콘텐츠 순차적으로 나타나기  
```js
$(function() {
  let idx = 0; // 인덱스
	setInterval(time, 500); // 실행

	function time(){ 
		brandText.eq(idx).addClass('active'); // active 클래스 삽입
		idx++;

		if(idx >= brandText.length) { // 완료되면 인덱스 초기화
      idx = 0;
	  }
  }
});
```

---
## 클릭 스크롤 탑  
```js
$('#scrollTop').on('click', function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
``` 

---
## http → https 자동 전환
```js
if (window.location.protocol != "https:") {
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

if (document.location.protocol == 'http:') {
    document.location.href = document.location.href.replace('http:', 'https:');
}
```
  
--
## ?파라미터의 내용을 찾아서 수정하기
```js
jQuery(document).ready(function() {
  const path = $("input[name=path]"); // 필드 선택
  let urlParams = window.location.search; // ? 파라미터 가져오기

  // urlParams 안에 ?path= 내용을 찾는다.
  // true : ?path= 텍스트 삭제 후 내용 적용
  // false : normalPath 공통값 적용
  let pathBoolean = urlParams.includes('?path=');
  if (pathBoolean) {
    let pathUrl = urlParams.replace(/\?path=/g, ""); // 불필요한 문구 삭제
    path.prop('value', pathUrl);
  } else {
    path.prop('value', 'normalPath');
  }

});
```  
  
## 순차적으로 실행하는 애니메이션
```js
$(document).ready(function() {
		let idx = 0; //초기화
		setInterval(time, 10000); // 변환 시간 (1초 = 1000)
	  
		function time(){ 
			let box = $('.home_main_section .contentBox .slideText h2'); // 선택자
			box.removeClass('active'); // 초기값 선택자(active) 삭제
			box.eq(idx).addClass('active'); // 해당순번 선택자 추가
			idx++;
			if(idx >= box.length) idx= 0;
		}
	  time(); // 시작
});
```
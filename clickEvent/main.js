function clickEvent(elem) {
  console.log(elem);
}


let contentBox = document.querySelector('.contentBox');
let divBox = document.createElement("div");
divBox.innerHTML = '<button type="button" onclick="clickEvent()">임의 버튼</button>';
// let clickHtml = '<button type="button" onclick="clickEvent()"></button>';
// i.innerHTML(clickHtml);
contentBox.append(divBox);


function render() {

  let nameText = 'nameText';
  let text1 = 'text1';
  let text2 = 'text2';

  resultHTML = `<div class="divBox">
  <div class="task-done">${nameText}</div>
  <div>
    <button onClick="clickEvent('${text1}')">Click-2</button>
    <button onClick="clickEvent('${text2}')">Click-3</button>
  </div>
</div>`; 



  // document.getElementById("board").innerHTML = resultHTML;
  contentBox.append(resultHTML);
}
render();

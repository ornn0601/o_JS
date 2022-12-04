jQuery(document).ready(function() {


  // let keyUrl = "http://api.openweathermap.org/data/2.5/forecast"; // 예보 데이터
  let keyUrl = "http://api.openweathermap.org/data/2.5/weather"; // 실시간 데이터
  let keyCity = "1835848"; // 서울
  let keyVal = "1aafb680071d4fe04a1ba3c09e057130"; // 키값
  let keyUnits = "metric"; // 온도 단위 변경 (kelvin → metric(섭씨))
  let apiKey = `${keyUrl}?id=${keyCity}&appid=${keyVal}&units=${keyUnits}`;
  console.log(apiKey);

  const date = $('.date'); // 현재
  const ctemp = $('.ctemp'); // 현재
  const clowtemp = $('.clowtemp'); // 최저
  const chightemp = $('.chightemp'); // 최고
  const cicon = $('.cicon'); // 아이콘
  
  /*
  $.getJSON('파일경로', function(data){
    // data로 할 일
  });
  */

  // dataType이 “json”으로 설정된 $.ajax()와 같다.
  // $.getJSON(apiKey, function(data){
  //   // data로 할 일
  //   // console.log(data.city.name);

  //   // 예보 내용
  //   // let cTime = data.list[0].dt_txt;
  //   // let cTemp = data.list[0].main.temp;
  //   // let minTemp = data.list[0].main.temp_min;
  //   // let maxTemp = data.list[0].main.temp_max;
  //   // let iconTemp = data.list[0].weather[0].icon;
  //   // let iconImg = `<img src="http://openweathermap.org/img/w/${iconTemp}.png" />`;

  //   // 실시간 내용
  //   let cTemp = data.main.temp;
  //   let minTemp = data.main.temp_min;
  //   let maxTemp = data.main.temp_max;
  //   let iconTemp = data.weather[0].icon;
  //   let iconImg = `<img src="http://openweathermap.org/img/w/${iconTemp}.png" />`

  //   // 날자
  //   /*
  //   Date.now(); == $.now()
  //   new Date(Date.now());
  //   alert(new Date($.now()));
  //   */
  //   let now = new Date($.now());
  //   let toDay = `${now.getFullYear()}.${now.getMonth()+1}.${now.getDay()} / ${now.getHours()} : ${now.getMinutes()}`
  //   console.log(toDay);


  //   date.prepend(toDay); // 날자
  //   ctemp.append(cTemp); // 현재
  //   clowtemp.append(minTemp); // 최저
  //   chightemp.append(maxTemp); // 최고
  //   cicon.append(iconImg); // 아이콘
  // });


  // $.getJSON에 비해 디테일한 설정을 할 수 있다. dataType, async
  function getJSON() {
    $.ajax({
      method: "get",
      url: apiKey,
      dataType: "json",
      // async : false, // 동기 비동기 선택
      success: function(data) {
        console.log("통신성공");

        let cTemp = data.main.temp;
        let minTemp = data.main.temp_min;
        let maxTemp = data.main.temp_max;
        let iconTemp = data.weather[0].icon;
        let iconImg = `<img src="http://openweathermap.org/img/w/${iconTemp}.png" />`

        // 날자
        /*
        Date.now(); == $.now()
        new Date(Date.now());
        alert(new Date($.now()));
        */
        let now = new Date($.now());
        let toDay = `${now.getFullYear()}.${now.getMonth()+1}.${now.getDay()} / ${now.    getHours()} : ${now.getMinutes()}`
        console.log(toDay);


        date.prepend(toDay); // 날자
        ctemp.append(cTemp); // 현재
        clowtemp.append(minTemp); // 최저
        chightemp.append(maxTemp); // 최고
        cicon.append(iconImg); // 아이콘
      },
      error: function() {
          console.log("통신 에러");
      }
    });
  };
  getJSON();



});

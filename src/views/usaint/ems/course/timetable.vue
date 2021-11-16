<template>
  
  <div>
    
    <div class="semester">
      <p>학년도:</p>

      <p>학기:</p>

      <button>이전학기</button>
      <button>다음학기</button>
    </div>  

    <div class="menu">
      <a id="m1">학부전공별</a>
      <a id="m2">교양필수</a>
      <a id="m3">교양선택</a>
      <a id="m4">연계전공</a>
      <a id="m5">융합전공</a>
      <a id="m6">대학원</a>
      <a id="m7">타전공인정과목</a>
      <a id="m8">과목검색</a>
    </div>
      

    <div class="filter">
      <button type="button"><img src="@/assets/images/timetable/yellow.png"/></button>
      <button type="button"><img src="@/assets/images/timetable/red.png"/></button>
      <button type="button" disabled><img src="@/assets/images/timetable/blue.png"/></button>
    </div>

    <div class="table">
      <div class="leftNav">
        좌측네브바가 들어갈 위치입니다. 사이즈 범위를 어떻게 정할 수 있을까요? 박스모델을 쓰면 되겠죠? 파이팅
      </div>

      <div class="info">
        <p id="info1">과목번호</p>
        <p id="info2">주전공</p>
        <p id="info3">다전공</p>
        <p id="info4">과목명</p>
        <p id="info5">교수명</p>
        <p id="info6">강의시간</p>
        <p id="info7">강의실</p>
        <p id="info8">학점(설계)</p>
        <p id="info9">여석/수강인원</p>
        <p id="info10">공학인증</p>
        <p id="info11">교과영역</p>
        <p id="info12">비고</p>
      </div>
      <!-- overflow: auto -->
      <div style="height: 650px; overflow: auto; width:1390px"> 
        <div style="height: 80px; background: #e4e3e3">data1</div>
        <div style="height: 80px; background: #ffffff">data2</div>
        <div style="height: 80px; background: #e4e3e3">data3</div>
        <div style="height: 80px; background: #ffffff">data4</div>
        <div style="height: 80px; background: #e4e3e3">data5</div>
        <div style="height: 80px; background: #ffffff">data6</div>
        <div style="height: 80px; background: #e4e3e3">data7</div>
        <div style="height: 80px; background: #ffffff">data8</div>
        <div style="height: 80px; background: #e4e3e3">data9</div>
        <div style="height: 80px; background: #ffffff">data10</div>
        <div style="height: 80px; background: #e4e3e3">data11</div>
        <div style="height: 80px; background: #ffffff">data12</div>
      </div>
    



    </div>

  </div>

</template>



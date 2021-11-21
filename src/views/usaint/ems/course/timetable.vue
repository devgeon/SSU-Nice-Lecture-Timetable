<template>
  
  <div>
    
    <div class="semester">
      <p>학년도:</p>
      
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
      
      <p>학기:</p>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
          
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
      <button>이전학기</button>
      <button>다음학기</button>
    </div>  

    
    <div>
      <b-tabs content-class="mt-3" style="margin-top:30px;">
        <b-tab title="학부전공별" active><p></p></b-tab>
        <b-tab title="교양필수"><p></p></b-tab>
        <b-tab title="교양선택"><p></p></b-tab>
        <b-tab title="연계전공"><p></p></b-tab>
        <b-tab title="융합전공"><p></p></b-tab>
        <b-tab title="대학원"><p></p></b-tab>
        <b-tab title="타전공인정과목"><p></p></b-tab>
        <b-tab title="과목검색"><p></p></b-tab>
        
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
      

    <div class="filter">
      <button type="button"><img src="@/assets/images/timetable/yellow.png"/></button>
      <button type="button"><img src="@/assets/images/timetable/red.png"/></button>
      <button type="button" disabled><img src="@/assets/images/timetable/blue.png"/></button>
    </div>

    <div class="leftNav">
      <div class="drop1">
        <b-dropdown text="대분류" style="width:100%; margin-bottom:40%; margin-top:10%;">
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-dropdown text="중분류" style="width:100%; margin-bottom:40%">
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-dropdown text="소분류" style="width:100%;">
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <div class="info" style="margin-left:15%; width:80%;">
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
    <div style="height: 650px; overflow: auto; width:80%" id="table"> 
        <div id="greyBox" style="height: 80px; background: #e4e3e3">
          
          <p id="number">{{1234567890}}</p>
          <p id="course_main">{아이콘}</p>
          <p id="course_sub">{아이콘}</p>
          <p id="name">{과목명}</p>
          <p id="professor">{교수명}</p>
          <p id="time1">{강의시간1}</p>
          <p id="loc1">{강의실1}</p>
          <img id="greyLine" src="@/assets/images/timetable/greyLine.png">
          <p id="time2">{강의시간2}</p>
          <p id="loc2">{강의실2}</p>
          <p id="credit">{학점}</p>
          <p id="seats">{여석}</p>
          <p id="certification">{공학인증}</p>
          <p id="subject_area">{교과영역}</p>
          <p id="etc">{비고}</p>


        </div>
        <div id="whiteBox" style="height: 80px; background: #ffffff">
          <p id="number">2150054502</p>
          <p id="course_main">
            <span class="hoverImg" data-hover="{전기-AI융합}">
              <img id="iconMain" :src='"/assets/images/timetable/"+main1+main2+".png"'> <!--01 means 전공(0)기초(1) -->
            </span>
          </p>
          <p id="course_sub"></p>
          <p id="name">{{name+bunban}}</p>
          <p id="professor">{{professor}}</p>
          <p id="time1">{{time1}}</p>
          <p id="loc1">{{loc1}}</p>
          <img id="greyLine" src="@/assets/images/timetable/greyLine.png">
          <p id="time2">{{time2}}</p>
          <p id="loc2">{{loc2}}</p>
          <p id="credit">{{credit}}</p>
          <p id="seats">{{seats1+"/"+seats2}}</p>
          <p id="certification"></p>
          <p id="subject_area"></p>
          <p id="etc"></p>
        </div>
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

    <!-- <div class="table" style="float:left; width:80%; font-size:small;">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div> -->
    

    
  </div>

</template>

<script>
  // export default{
  //   data(){
  //     return{
  //       fields: [
  //         {key:'name', label:'과목명'},
  //         {key:'course_main', label:"주전공"},
  //         {key:'course_sub', label:'부전공'},
  //         {key:'professor', label:'교수명'},
  //         {key:'time1', label:'강의시간1'},
  //         {key:'loc1', label:'강의실1'},
  //         {key:'time2', label:'강의시간2'},
  //         {key:'loc2', label:'강의실2'},
  //         {key:'credit', label:'학점'},
  //         {key:'seats', label:'여석/수강인원'},
  //         {key:'certification', label:'공학인증'},
  //         {key:'subject_area', label:'교과영역'},
  //         {key:'etc', label:'비고'},
  //         //{key:'main1', label:'main1'}, 전공
  //         //{key:'main2', label:'main2'}, 기초
  //       ],
        
        
  //       items: [
  //         { isActive: true,
  //           name:"오픈소스기초설계(나)",
  //           professor:"김성흠",
  //           time1:"목 13:30-14:45",
  //           loc1:"문화관 03407",
  //           time2:"",
  //           loc2:"",
  //           credit:3,
  //           seats:'0/47',
  //           certification:"",
  //           subject_area:"",
  //           etc:"",
  //           //main1:"0",
  //           //main2:"1",
  //         },
  //       ]
        
  //     }
  //   },
    
    
  // }
  export default{
    data(){
      return{
        name:"오픈소스기초설계",
        bunban:"(나)",
        professor:"김성흠",
        time1:"목 13:30-14:45",
        loc1:"문화관 03407",
        time2:"",
        loc2:"",
        credit:3,
        seats1:0,
        seats2:47,
        certification:"",
        subject_area:"",
        etc:"",
        main1:"0",
        main2:"1",
      }
    }
    
  }
</script>
<style scoped>
p{float: left;}

.hoveImg {
  position: relative;
  border-bottom: 1px dotted black;
}

.hoverImg:before {
  content: attr(data-hover);
  visibility: hidden;
  opacity: 0;
  width: 140px;
  background-color: white;
  color: black;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  transition: opacity 1s ease-in-out;

  position: absolute;
  z-index: 1;
  left: 0;
  top: 110%;
}

.hoverImg:hover:before {
  opacity: 1;
  visibility: visible;
}
</style>



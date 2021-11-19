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
      <b-tabs content-class="mt-3">
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



<template>
  <vuescroll>
    <div
      style="position: sticky; top: 0; background-color: #ffffff; z-index: 1"
    >
      <div class="semester" style="margin-top:30px; margin-left:40px;" >
        <p class="selectYear" style="float:left; margin-top:10px; margin-right:10px;">학년도:</p>

        <b-dropdown id="dropdown-1" text="2021" class="m-md-2" style="width:100px;">
          <div style="overflow:auto; height:100px;">
            <b-dropdown-item>2010</b-dropdown-item>
            <b-dropdown-item>2011</b-dropdown-item>
            <b-dropdown-item>2012</b-dropdown-item>
            <b-dropdown-item>2013</b-dropdown-item>
            <b-dropdown-item>2014</b-dropdown-item>
            <b-dropdown-item>2015</b-dropdown-item>
            <b-dropdown-item>2016</b-dropdown-item>
            <b-dropdown-item>2017</b-dropdown-item>
            <b-dropdown-item>2018</b-dropdown-item>
            <b-dropdown-item>2019</b-dropdown-item>
            <b-dropdown-item>2020</b-dropdown-item>

            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>2021</b-dropdown-item>
            <b-dropdown-item>2022</b-dropdown-item>
            <!-- <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
          </div>
        </b-dropdown>

        <p  class="selectSemester" style="float:left; margin-top:10px; margin-right:10px;">학기:</p>

        <b-dropdown id="dropdown-1" text="1학기" class="m-md-2" style="width:100px;">

          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>1학기</b-dropdown-item>
          <b-dropdown-item>여름학기</b-dropdown-item>
          <b-dropdown-item>2학기</b-dropdown-item>
          <b-dropdown-item>겨울학기</b-dropdown-item>


        </b-dropdown>
        <button style="margin-top:6px; margin-left:10px;">이전학기</button>
        <button style="margin-top:6px;">다음학기</button>
      </div>

      <div>
        <b-tabs content-class="mt-3" style="margin-top: 30px; margin-left:40px;">
          <b-tab
            @click="$router.push({ name: 'hakbu' })"
            title="학부전공별"
            active
            ><p></p
          ></b-tab>
          <b-tab @click="$router.push({ name: 'kyopill' })" title="교양필수"
            ><p></p
          ></b-tab>
          <b-tab @click="$router.push({ name: 'kyosun' })" title="교양선택"
            ><p></p
          ></b-tab>
      
          <b-tab @click="$router.push({ name: 'yoonghap' })" title="융합전공"
            ><p></p
          ></b-tab>
          <b-tab @click="$router.push({ name: 'daehakwon' })" title="대학원"
            ><p></p
          ></b-tab>
          <b-tab
            @click="$router.push({ name: 'tajeongong' })"
            title="타전공인정과목"
            ><p></p
          ></b-tab>
          <b-tab @click="$router.push({ name: 'searchsbj' })" title="과목검색"
            ><p></p
          ></b-tab>

          <!-- <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->
        </b-tabs>
      </div>
    </div>
    <!-- <div class="table" style="float:left; width:80%; font-size:small;">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div> -->

    <router-view style="padding: 40px; z-index: 2" />
  </vuescroll>
</template>

<script>
import vuescroll from "vuescroll";

export default {
  components: {
    vuescroll,
  },
};
</script>
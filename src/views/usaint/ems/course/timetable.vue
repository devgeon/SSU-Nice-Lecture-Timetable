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
      <b-tabs content-class="mt-3" style="margin-top: 30px">
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
        <b-tab @click="$router.push({ name: 'yeonkye' })" title="연계전공"
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

    <!-- <div class="table" style="float:left; width:80%; font-size:small;">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div> -->

    <router-view />
  </div>
</template>
<template>
  <vuescroll>
    <div
      style="position: sticky; top: 0; background-color: #ffffff; z-index: 1"
    >
      <div class="semester" style="margin-top: 30px; margin-left: 40px">
        <p
          class="selectYear"
          style="float: left; margin-top: 10px; margin-right: 10px"
        >
          학년도:
        </p>

        <b-dropdown
          id="dropdown-1"
          :text="selected_year.y"
          class="m-md-2"
          style="width: 100px"
        >
          <div style="overflow: auto; height: 100px">
            <b-dropdown-item
              v-for="year in years"
              :key="year.key"
              :active="selected_year.key == year.key"
              @click="changeYearStatus"
            >
              {{ year.y }}
            </b-dropdown-item>
          </div>
        </b-dropdown>

        <p
          class="selectSemester"
          style="float: left; margin-top: 10px; margin-right: 10px"
        >
          학기:
        </p>

        <b-dropdown
          id="dropdown-1"
          :text="selected_semester.sem"
          class="m-md-2"
          style="width: 100px"
        >
          <b-dropdown-item
            v-for="semester in semesters"
            :id="'sem' + semester.key"
            :key="semester.key"
            :active="selected_semester.key == semester.key"
            @click="changeSemesterStatus"
            >{{ semester.sem }}</b-dropdown-item
          >
        </b-dropdown>
        <button
          style="margin-top: 6px; margin-left: 10px"
          @click="prevSemester"
        >
          이전학기
        </button>
        <button style="margin-top: 6px" @click="nextSemester">다음학기</button>
      </div>

      <div>
        <b-tabs
          content-class="mt-3"
          style="margin-top: 30px; margin-left: 40px"
        >
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
const YEAR = 2010;

export default {
  data() {
    return {
      years: Array.from(Array(new Date().getFullYear() - (YEAR - 2)).keys())
        .map((n) => n + YEAR)
        .map((n) => Object({ y: String(n), key: n })),
      selected_year: {
        y: String(new Date().getFullYear()),
        key: new Date().getFullYear(),
      },
      semesters: [
        { sem: "1학기", key: 0 },
        { sem: "여름학기", key: 1 },
        { sem: "2학기", key: 2 },
        { sem: "겨울학기", key: 3 },
      ],
      selected_semester: {
        sem: new Date().getMonth() < 8 ? "1학기" : "2학기",
        key: new Date().getMonth() < 8 ? 0 : 2,
      },
    };
  },
  methods: {
    changeYearStatus(event) {
      this.selected_year = this.years[event.target.text - YEAR];
    },
    changeSemesterStatus(event) {
      this.selected_semester = this.semesters[event.target.id.slice(3)];
    },
    prevSemester() {
      if (this.selected_year.key == YEAR && this.selected_semester.key == 0)
        return;
      if (this.selected_semester.key > 0) {
        this.selected_semester = this.semesters[this.selected_semester.key - 1];
      } else if (this.selected_semester.key == 0) {
        this.selected_semester = this.semesters[this.semesters.length - 1];
        this.selected_year = this.years[this.selected_year.key - YEAR - 1];
      }
    },
    nextSemester() {
      if (
        this.selected_year.key == new Date().getFullYear() + 1 &&
        this.selected_semester.key == this.semesters.length - 1
      )
        return;
      if (this.selected_semester.key < this.semesters.length - 1) {
        this.selected_semester = this.semesters[this.selected_semester.key + 1];
      } else if (this.selected_semester.key == this.semesters.length - 1) {
        this.selected_semester = this.semesters[0];
        this.selected_year = this.years[this.selected_year.key - YEAR + 1];
      }
    },
  },
  components: {
    vuescroll,
  },
};
</script>
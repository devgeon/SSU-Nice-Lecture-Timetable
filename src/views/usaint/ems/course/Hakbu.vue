<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav">
      <!-- <nav class="dm-menu">
        <b-list-group class="dm-menu__list">
          <li
            tabindex="0"
            v-for="univ in dept_list"
            :class="[
              'dm-menu__item',
              univ.sub_list.length > 0 ? 'dm-menu__item--hasMore' : '',
              selected_univ == univ.idx ? 'active' : '',
            ]"
            :key="univ.idx"
            :id="'univ' + univ.idx"
            @click="selectUniv"
          >
            {{ univ.name }}
            <b-collapse :id="'univ_collapse' + univ.idx" accordion="univ">
              <b-list-group class="dm-menu__itemLink">
                <b-list-group-item
                  tabindex="1"
                  v-for="dept in univ.sub_list"
                  v-b-toggle="'dept_collapse' + dept.idx"
                  :class="[
                    'dm-menu__item',
                    dept.sub_list.length > 0 ? 'dm-menu__item--hasMore' : '',
                    selected_dept == dept.idx ? 'active' : '',
                  ]"
                  :key="dept.idx"
                  :id="'dept' + dept.idx"
                  @click="selectDept"
                >
                  {{ dept.name }}
                  <b-collapse :id="'dept_collapse' + dept.idx" accordion="dept">
                    <b-list-group class="dm-menu__list">
                      <b-list-group-item
                        v-for="major in dept.sub_list"
                        :key="major.idx"
                      >
                        {{ major.name }}
                      </b-list-group-item>
                    </b-list-group>
                  </b-collapse>
                </b-list-group-item>
              </b-list-group>
            </b-collapse>
          </li>
        </b-list-group>
      </nav> -->
      <nav class="dm-menu">
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">인문대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기독교학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">국어국문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">영어영문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">독어독문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">불어불문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중어중문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">일어일문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">철학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사학과</a>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">예술창작학부</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">문예창작전공</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">영화예술전공</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">스포츠학부</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">스포츠학부</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">생활체육전공</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">스포츠사이언스전공</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">자연과학대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">수학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">물리학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">화학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통계보험수리학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">의생명시스템학부</a>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">법과대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">법학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">국제법무학과</a>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">사회과학대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회복지학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">행정학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정치외교학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보사회학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">언론홍보학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">평생교육학과</a>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">경제통상대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">계약학과</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">통상산업학과</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">경제학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">글로벌통상학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">금융경제학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">국제무역학과</a>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">경영대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">계약학과</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">혁신경영학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">벤처경영학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">스토리텔링경영학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">복지경영학과</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">경영학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">회계학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">벤처중소기업학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">금융학부</a>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">공과대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">화학공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">유기신소재파이버공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전기공학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기계공학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">산업정보시스템공학과</a>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">건축학부</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">건축학부</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">건축공학전공</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">건축학전공</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">실내건축전공</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">IT대학</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">전자정보공학부</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">전자공학전공</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">IT융합전공</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">컴퓨터학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">소프트웨어학부</a>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">정보통신전자공학부</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">정보통신전자공학부</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">전자공학과</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">AI융합학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">글로벌미디어학부</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">미디어경영학과</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </CourseTable>
</template>

<script>
import { getCurrentUser } from "../../../../utils";
const currentUser = getCurrentUser();

export default {
  data() {
    return {
      // selected_univ: 0,
      // selected_dept: 0,
      // selected_major: 0,
      // dept_list: [
      //   {
      //     idx: 1000,
      //     name: "인문대학",
      //     sub_list: [
      //       { idx: 1001, name: "기독교학과", sub_list: [] },
      //       { idx: 1002, name: "국어국문학과", sub_list: [] },
      //       { idx: 1003, name: "영어영문학과", sub_list: [] },
      //       { idx: 1004, name: "독어독문학과", sub_list: [] },
      //       { idx: 1005, name: "불어불문학과", sub_list: [] },
      //       { idx: 1006, name: "중어중문학과", sub_list: [] },
      //       { idx: 1007, name: "일어일문학과", sub_list: [] },
      //       { idx: 1008, name: "철학과", sub_list: [] },
      //       { idx: 1009, name: "사학과", sub_list: [] },
      //       {
      //         idx: 1010,
      //         name: "예술창작학부",
      //         sub_list: [
      //           { idx: 1010, name: "문예창작전공", sub_list: [] },
      //           { idx: 1011, name: "영화예술전공", sub_list: [] },
      //         ],
      //       },
      //       {
      //         idx: 1012,
      //         name: "스포츠학부",
      //         sub_list: [
      //           { idx: 1012, name: "스포츠학부", sub_list: [] },
      //           { idx: 1013, name: "생활체육전공", sub_list: [] },
      //           { idx: 1014, name: "스포츠사이언스전공", sub_list: [] },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     idx: 2000,
      //     name: "자연과학대학",
      //     sub_list: [
      //       { idx: 2001, name: "수학과", sub_list: [] },
      //       { idx: 2002, name: "물리학과", sub_list: [] },
      //       { idx: 2003, name: "화학과", sub_list: [] },
      //       { idx: 2004, name: "정보통계보험수리학과", sub_list: [] },
      //       { idx: 2005, name: "의생명시스템학부", sub_list: [] },
      //     ],
      //   },
      //   {
      //     idx: 3000,
      //     name: "법과대학",
      //     sub_list: [
      //       { idx: 3001, name: "법학과", sub_list: [] },
      //       { idx: 3002, name: "국제법무학과", sub_list: [] },
      //     ],
      //   },
      //   {
      //     idx: 4000,
      //     name: "사회과학대학",
      //     sub_list: [
      //       { idx: 4001, name: "사회복지학부", sub_list: [] },
      //       { idx: 4002, name: "행정학부", sub_list: [] },
      //       { idx: 4003, name: "정치외교학과", sub_list: [] },
      //       { idx: 4004, name: "정보사회학과", sub_list: [] },
      //       { idx: 4005, name: "언론홍보학과", sub_list: [] },
      //       { idx: 4006, name: "평생교육학과", sub_list: [] },
      //     ],
      //   },
      //   {
      //     idx: 5000,
      //     name: "경제통상대학",
      //     sub_list: [
      //       { idx: 5001, name: "경제학과", sub_list: [] },
      //       { idx: 5002, name: "글로벌통상학과", sub_list: [] },
      //       { idx: 5003, name: "금융경제학과", sub_list: [] },
      //       { idx: 5004, name: "국제무역학과", sub_list: [] },
      //       { idx: 5005, name: "통상산업학과", sub_list: [] },
      //     ],
      //   },
      //   {
      //     idx: 6000,
      //     name: "경영대학",
      //     sub_list: [
      //       { idx: 6001, name: "경영학부", sub_list: [] },
      //       { idx: 6002, name: "회계학과", sub_list: [] },
      //       { idx: 6003, name: "벤처중소기업학과", sub_list: [] },
      //       { idx: 6004, name: "금융학부", sub_list: [] },
      //       {
      //         idx: 6005,
      //         name: "계약학과",
      //         sub_list: [
      //           { idx: 6005, name: "혁신경영학과", sub_list: [] },
      //           { idx: 6006, name: "벤처경영학과", sub_list: [] },
      //           { idx: 6007, name: "스토리텔링경영학과", sub_list: [] },
      //           { idx: 6008, name: "복지경영학과", sub_list: [] },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     idx: 7000,
      //     name: "공과대학",
      //     sub_list: [
      //       { idx: 7001, name: "화학공학과", sub_list: [] },
      //       { idx: 7002, name: "유기신소재파이버공학과", sub_list: [] },
      //       { idx: 7003, name: "전기공학부", sub_list: [] },
      //       { idx: 7004, name: "기계공학부", sub_list: [] },
      //       { idx: 7005, name: "산업정보시스템공학과", sub_list: [] },
      //       {
      //         idx: 7006,
      //         name: "건축학부",
      //         sub_list: [
      //           { idx: 7006, name: "건축학부", sub_list: [] },
      //           { idx: 7007, name: "건축공학전공", sub_list: [] },
      //           { idx: 7008, name: "건축학전공", sub_list: [] },
      //           { idx: 7009, name: "실내건축전공", sub_list: [] },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     idx: 8000,
      //     name: "IT대학",
      //     sub_list: [
      //       {
      //         idx: 8001,
      //         name: "전자정보공학부",
      //         sub_list: [
      //           { idx: 8001, name: "전자공학전공", sub_list: [] },
      //           { idx: 8002, name: "IT융합전공", sub_list: [] },
      //         ],
      //       },
      //       { idx: 8003, name: "컴퓨터학부", sub_list: [] },
      //       { idx: 8004, name: "소프트웨어학부", sub_list: [] },
      //       {
      //         idx: 8005,
      //         name: "정보통신전자공학부",
      //         sub_list: [
      //           { idx: 8005, name: "정보통신전자공학부", sub_list: [] },
      //           { idx: 8006, name: "전자공학과", sub_list: [] },
      //         ],
      //       },
      //       { idx: 8007, name: "AI융합학부", sub_list: [] },
      //       { idx: 8008, name: "글로벌미디어학부", sub_list: [] },
      //       { idx: 8009, name: "미디어경영학과", sub_list: [] },
      //     ],
      //   },
      // ],
      axios_params: {
        page: "hakbu",
        dept: currentUser.dept,
      },
    };
  },
  // methods: {
  //   selectUniv(event) {
  //     if (event.target.id.slice(0, 4) != "univ") return;
  //     if (this.selected_univ == event.target.id.slice(4))
  //       this.selected_univ = 0;
  //     else this.selected_univ = event.target.id.slice(4);
  //     console.log("univ", this.selected_univ);
  //     console.log(event.target.id);
  //   },
  //   selectDept(event) {
  //     if (this.selected_dept == event.target.id.slice(4))
  //       this.selected_dept = 0;
  //     else this.selected_dept = event.target.id.slice(4);
  //     console.log("dept", this.selected_dept);
  //     console.log(event.target.id);
  //   },
  // },
};
</script>

<style scoped>
</style>

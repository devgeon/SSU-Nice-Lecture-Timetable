<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav">
      <!-- <div class="drop1">
        <b-dropdown
          text="대분류"
          style="width: 100%; margin-bottom: 40%; margin-top: 10%"
        >
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-dropdown text="중분류" style="width: 100%; margin-bottom: 40%">
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-dropdown text="소분류" style="width: 100%">
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div> -->
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
      axios_params: {
        page: "hakbu",
        dept: currentUser.dept,
      },
    }
  }
};
</script>

<style scoped>
</style>

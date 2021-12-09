<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav">
      <nav class="dm-menu">
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">2020년도 이후</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">공동체/리더십역량</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">인성과리더십</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">자기계발과진로탐색</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">의사소통/글로벌역량</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">한국어의사소통</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">국제어문</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">창의/융합역량</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">문학/예술</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">역사/철학/종교</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">정치/경제/경영</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">사회/문화/심리</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">자연과학/공학/기술</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">2019년도</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">숭실품성</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">인성과리더십</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">기초역량</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">한국어의사소통과국제어문</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">균형교양</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">인문학(인간/문화/사고력)</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">사회과학(사회/역사)</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">자연/공학(자연/과학/기술)</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">2016~2018년도</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">숭실품성/인성</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">가치관및윤리교육</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">공동체인성교육</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">숭실품성/리더십</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">통일리더십</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">리더십이론및실천</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">기초역량/사고력</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">논리및비판적사고</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">창의및융합적사고</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">기초역량/한국어의사소통</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">읽기와쓰기</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">의사소통</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">기초역량/국제어문</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">영어</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">국제어</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">고전어문</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">기초역량/과학정보기술</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">정보기술</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">과학</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">균형교양/인문학</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">문학/어학/예술</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">역사</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">철학/사상</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">균형교양/사회과학</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">사회/정치/경제</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">문화및문명</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">균형교양/자연과학</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">자연과학</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">실용교양</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">개인과가족생활</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">경제경영</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">공공생활</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">기술생활</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">자기개발과진로탐색</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">2015년도 이전</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">인성과리더쉽(핵심-창의)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">창의성과의사소통능력(핵심-창의)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">세계의언어(핵심-창의)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">세계의문화와국제관계(핵심-창의)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">문학과예술(융합-인문)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">역사와철학(융합-인문)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">인간과사회(융합-사회)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정치와경제(융합-사회)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">자연과학과수리(융합-자연)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보와기술(융합-자연)</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">학문과진로탐색(실용-생활)</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </CourseTable>
</template>

<script>
export default {
  data() {
    return {
      axios_params: {
        page: "kyosun",
      },
    }
  }
};
</script>

<style scoped>
</style>
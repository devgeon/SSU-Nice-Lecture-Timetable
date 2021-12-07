<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav">
      <nav class="dm-menu">
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">융합전공</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">빅데이터컴퓨팅</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스마트소재/제품</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">양자나노</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">빅데이터</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">에너지공학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">통일외교 및 개발협력</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스마트자동차</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보보호</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">ICT유통물류</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">문화서비스산업</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스포츠마케팅</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회적기업과 사회혁신</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">뉴미디어콘텐츠</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">동아시아 경제통상</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">AI모빌리티</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스마트안전보건환경</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">지식재산</a>
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
        page: "yoonghap",
        dept: 1  // 융합전공 정리 후 수정 요함
      },
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav" style="width: 150px; position: sticky; top: 0">
      <nav class="dm-menu">
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a href="/" class="dm-menu__itemLink">융합전공</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">빅데이터컴퓨팅</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">스마트소재/제품</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">양자나노</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">빅데이터</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">에너지공학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">통일외교 및 개발협력</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">스마트자동차</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">정보보호</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">ICT유통물류</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">문화서비스산업</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">스포츠마케팅</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">사회적기업과 사회혁신</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">뉴미디어콘텐츠</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">동아시아 경제통상</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">AI모빌리티</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">스마트안전보건환경</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a href="/" class="dm-menu__itemLink">지식재산</a>
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
  /* demo styles */
body { width: 500px; margin: 3rem auto;background: lightgray; }
UL, LI { margin:0; padding:0; }
UL { list-style: none; }
UL A {  font-family:sans-serif; text-decoration: none; color: #333; }

/* menu styles */
.dm-menu {
  background: white;
  padding: 0 1rem;
  line-height: 3rem;
}

.dm-menu__list { 
  overflow: hidden; 
}

.dm-menu__list .dm-menu__list {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.dm-menu__list .dm-menu__list {
  max-height: 0;
  transition: max-height .3s linear;
}

.dm-menu__item {
  font-weight:bold;
  cursor:pointer;
  border-bottom: 1px solid lightgray;
}

.dm-menu__list .dm-menu__list .dm-menu__item {
  border: none;
  font-weight:normal;
}

.dm-menu__item:focus { 
  outline: none; 
}

/* .dm-menu__item:focus-within {
  background: rgba(0,0,0,.018);
} */

.dm-menu__item:focus-within > UL {
  max-height: 999px;
  transition: max-height 1.7s linear;
}

.dm-menu__item--hasMore:before {
  content: '\276F';
  transform: rotate(90deg);
  margin-right: .5rem;
  float: right;
  font-weight:bold;
}

.dm-menu__item--hasMore:focus-within:before {
  transform: rotate(-90deg);
}

.dm-menu__itemLink {
  padding-left: .5rem
}

.dm-menu__itemLink:hover {
  color: red;
}






</style>
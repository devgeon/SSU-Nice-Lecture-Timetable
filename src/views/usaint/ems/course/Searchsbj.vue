<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav">
      <div class="drop1">
          <b-dropdown text="검색 기준" style="width:100%; margin-bottom:40%; margin-top:10%;">
          <b-dropdown-item href="#">과목명</b-dropdown-item>
          <b-dropdown-item href="#">교수명</b-dropdown-item>
          </b-dropdown>
      </div>
      <div>
          <b-form inline>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-form-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Jane Doe"
              ></b-form-input>

              <b-button variant="primary">검색</b-button>
          </b-form>
      </div>
    </div>
  </CourseTable>
</template>

<script>
export default {
  data() {
    return {
      axios_params: {
        page: "search",
        type: "name",  // name(과목명), prof(교수명)
        word: "AI",  // 검색어 입력 구현 후 수정 요함
      },
    }
  }
};
</script>

<style scoped>
</style>

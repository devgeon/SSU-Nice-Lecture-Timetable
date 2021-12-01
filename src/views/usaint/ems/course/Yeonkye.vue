<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav" style="width: 150px; position: sticky; top: 0">
      <div class="drop1">
        <b-dropdown
          text="연계전공"
          style="width: 100%; margin-bottom: 40%; margin-top: 10%"
        >
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </CourseTable>
</template>

<script>
export default {
  data() {
    return {
      axios_params: {
        page: "yeonkye",
        dept: -3  // 연계전공 정리 후 수정 요함
      },
    }
  }
};
</script>

<style scoped>
</style>
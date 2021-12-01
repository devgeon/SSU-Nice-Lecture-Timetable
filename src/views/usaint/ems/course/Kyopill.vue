<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav" style="width: 150px; position: sticky; top: 0">
      <div class="drop1">
        <b-dropdown
          text="과목"
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
        page: "kyopill",
      },
    }
  }
};
</script>

<style scoped>
</style>
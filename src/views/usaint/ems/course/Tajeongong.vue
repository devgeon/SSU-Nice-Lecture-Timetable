<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav" style="width: 150px; position: sticky; top: 0">
      <div class="drop1">
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
      </div>
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
        page: "tajeongong",
        dept: currentUser.dept,
      },
    }
  }
};
</script>

<style scoped>
</style>

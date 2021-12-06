<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav" style="width: 150px; position: sticky; top: 0">
      <nav class="dm-menu">
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a href="/" class="dm-menu__itemLink">교필 1단계</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a href="/" class="dm-menu__itemLink">교필 2단계</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a href="/" class="dm-menu__itemLink">교필 3단계</a>
                  </li>
                </ul>
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
        page: "kyopill",
      },
    }
  }
};
</script>

<style scoped>
</style>
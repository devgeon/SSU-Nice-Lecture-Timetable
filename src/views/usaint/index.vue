<template>
  <usaint-layout :currentUser="currentUser">
    <router-view />
  </usaint-layout>
</template>

<script>
import usaintLayout from "../../layouts/usaintLayout.vue";

export default {
  components: {
    "usaint-layout": usaintLayout,
  },
  props: {
    currentUser: Object,
  },
};
</script>
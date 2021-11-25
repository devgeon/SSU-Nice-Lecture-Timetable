<template>
  <router-view :currentUser="currentUser" />
</template>

<script>
export default {
  props: {
    currentUser: Object,
  },
};
</script>
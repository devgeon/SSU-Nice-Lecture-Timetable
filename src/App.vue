<template>
  <div id="app">
    <router-view :currentUser="currentUser" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: {
        id: 20211735,
        name: "엄호용",
        department: 8007,
      },
    };
  },
  name: "App",
};
</script>

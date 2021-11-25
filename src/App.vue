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
        grade: 1,
        name: "엄호용",
        department: 1001,
      },
    };
  },
  name: "App",
};
</script>

<template>
  <div class="app_box">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style scoped lang="scss">
.app_box {
  margin: 0 auto;
  max-width: 750px;
  height: 100vh;
}
</style>

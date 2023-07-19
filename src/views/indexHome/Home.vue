<template>
  <div class="home">
    <van-search @click="watchIninput" disabled placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    watchIninput() {
      this.$router.push({ path: "/search" });
    },
  },
};
</script>

<style scoped lang="scss"></style>

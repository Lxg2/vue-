<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active" class="tabbar">
      <van-tabbar-item
        icon="wap-home"
        :class="{ active_tab_item_active: path == '/home' }"
        @click="$router.push({ path: '/home' })"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        icon="wap-nav"
        :class="{ active_tab_item_active: path == '/movies' }"
        @click="$router.push({ path: '/movies' })"
        >分类</van-tabbar-item
      >
      <van-tabbar-item
        icon="play-circle"
        :class="{ active_tab_item_active: path == '/videos' }"
        @click="$router.push({ path: '/videos' })"
        >短片</van-tabbar-item
      >
      <van-tabbar-item
        icon="manager"
        :class="{ active_tab_item_active: path == '/profile' }"
        @click="$router.push({ path: '/profile' })"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="scss">
.active_tab_item_active {
  color: #d81e06;
}
.tabbar {
  max-width: 750px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

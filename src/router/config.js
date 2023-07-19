export default [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/Home.vue"),
    redirect: "/home",
    children: [
      // 首页
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/indexHome/Home.vue"),
        meta: {
          title: "首页",
        },
      },
      // 分类
      {
        path: "movies",
        name: "Movies",
        component: () => import("@/views/indexHome/Movies.vue"),
        meta: {
          title: "分类",
        },
      },
      // 短片
      {
        path: "videos",
        name: "Videos",
        component: () => import("@/views/indexHome/Videos.vue"),
        meta: {
          title: "短片",
        },
      },
      // 我的
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/views/indexHome/Profile.vue"),
        meta: {
          title: "短片",
        },
      },
    ],
  },
  // 登录
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Login.vue"),
  },
  // 搜索
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search.vue"),
    meta: {
      title: "搜索",
    },
  },
];

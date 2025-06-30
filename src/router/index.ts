import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/demo-dashboard/'),
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        title: "登入"
      }
    },
    {
      path: "/",
      component: () => import("../views/MenuView.vue"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../views/Dashboard.vue"),
          meta: {
            title: "儀表板"
          }
        },
        {
          path: "analysis",
          children: [
            {
              path: "manufacture",
              name: "manufactureAnalysis",
              component: () => import("../views/analysis/manufacture/index.vue"),
              meta: {
                title: "生產庫存分析"
              }
            },
            {
              path: "finance",
              name: "financeAnalysis",
              component: () => import("../views/analysis/finance/index.vue"),
              meta: {
                title: "財務指標分析"
              }
            }
          ]
        }
      ]
    },
    // 添加捕獲所有不存在路徑的路由規則
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ]
});

// 移除路由守衛，讓登入直接進入
export default router;

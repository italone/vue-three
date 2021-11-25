import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router' 

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    redirect: "/home",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          activePath: "/home"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  }
]

// 导入路由模块
const apiModuleFiles = import.meta.globEager("./modules/*.ts")  
Object.keys(apiModuleFiles).forEach(item=>{
  const objs: any = apiModuleFiles[item].default  
  Object.keys(objs).forEach(key => {
    routes[0].children?.push(objs[key])
  })
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

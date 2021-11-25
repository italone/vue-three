import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from "element-plus/lib/locale/lang/zh-cn";
import { get, post, $delete, $put } from './utils/http'
import store from './store/index'
import './assets/iconfont/iconfont.css' //icon 样式库
import "./assets/style/index.scss"; // 全局css
import api from "./api/api";
const app = createApp(App)
app.config.globalProperties.$api = api
app.config.globalProperties.$get = get
app.config.globalProperties.$fetch  = get
app.config.globalProperties.$post = post
app.config.globalProperties.$post2 = post
app.config.globalProperties.$put = $put
app.config.globalProperties.$delete = $delete
app.use(ElementPlus,{locale}).use(router).use(store).mount('#app')

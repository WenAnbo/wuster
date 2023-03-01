import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
// 引入elemtui
import 'element-plus/dist/index.css'

//引入路由
import router from "./router/index.js";
const app =createApp(App)
//elemtui
app.use(ElementPlus)
//路由
app.use(router)

app.mount('#app')

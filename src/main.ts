// 引入全局样式
import '@/styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import Particles from 'particles.vue3'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 全局导入ElementPlus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import "virtual:svg-icons-register";

// app.use(Particles)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')

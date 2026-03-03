import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'

const pinia = createPinia()

import "@/styles/common.scss"

// 测试接口
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res)
})

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
app.use(lazyPlugin)

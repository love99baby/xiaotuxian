import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// 测试接口
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res)
})

const app = createApp(App)
app.use(router)
app.mount('#app')

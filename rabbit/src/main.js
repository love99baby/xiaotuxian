import { createApp } from 'vue'
import App from './App.vue'

// 测试接口
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res)
})

createApp(App).mount('#app')

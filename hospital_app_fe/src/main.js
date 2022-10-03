import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.bundle.min.js'
import '@/assets/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')

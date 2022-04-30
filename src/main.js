import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import VueAxios from "vue-axios"
import scss from './assets/style.scss'
createApp(App).use(router,VueAxios,scss).mount('#app')

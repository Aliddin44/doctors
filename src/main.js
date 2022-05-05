import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import VueAxios from "vue-axios"




import "./assets/style.scss";


import { quillEditor, Quill } from 'vue3-quill'

createApp(App).use(router,VueAxios,quillEditor,Quill).mount('#app')

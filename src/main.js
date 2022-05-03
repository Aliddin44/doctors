import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import VueAxios from "vue-axios"
// import Vue2Editor from "vue2-editor";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import "./assets/style.scss";


// import scss from './assets/style.scss'
createApp(App).use(router,VueAxios,QuillEditor).mount('#app')

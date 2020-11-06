/*
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-05 15:23:24
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
// import './assets/css/main.styl'
// import BaseComponents from './components/base'
import BaseDirective from './directive'

const app = createApp(App)

// app.use(BaseComponents)
app.use(BaseDirective)

app.use(store).use(router).mount('#app')

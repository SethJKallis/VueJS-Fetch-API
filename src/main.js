import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// IMPORTING BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// IMPORTING CSS
import '@/assets/css/styles.css'

createApp(App).use(store).use(router).mount('#app')

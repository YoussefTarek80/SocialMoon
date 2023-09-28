import { createApp } from 'vue'
import './style.css'
import router from './router.js'
import App from './App.vue'
import store from './store/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-free-6.4.0-web/css/all.css'
import reload from './UI/reload/reload.vue';
const app=createApp(App);

app.use(router)
app.component('reload',reload);
app.use(store)
.mount('#app')

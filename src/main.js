import './assets/main.css';
import store from './store';
import router from './routers';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import config from './config.js';

import { createApp } from 'vue'
const options = {
    // You can set your default options here
};
import App from './App.vue'

const app = createApp(App);
app.config.globalProperties.$config = config;
app.use(Toast, options).use(store).use(router).mount('#app')

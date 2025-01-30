import { createApp } from 'vue';
import './style.css';
import { createPinia } from 'pinia'
import App from './Game.vue'

createApp(App)
.use(createPinia)
.mount('#game')

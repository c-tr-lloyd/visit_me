import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import { useAuthStore } from './store/auth.js' 
import router from './router'
import './style.css'
import App from './App.vue'


const app = createApp(App) 

app.use(createPinia()) 
app.use(router)

//const authStore = useAuthStore() 

//authStore.setCsrfToken() 

app.mount('#app') 

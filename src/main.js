import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
}
axios.defaults.baseURL = 'http://localhost:5000'
const app = createApp(App)
app.use(VueSweetalert2, options)
app.use(router)
app.mount('#app')

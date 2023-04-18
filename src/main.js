import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import moment from 'moment'
import VueInteractJs from "vue-interactjs";

const pinia = createPinia()

const app = createApp(App)

// app.prototype.moment = moment;
// app.config.productionTip = false

app.use(pinia)
app.use(VueInteractJs)
app.mount('#app')

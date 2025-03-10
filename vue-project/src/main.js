import { createApp } from 'vue'
import App from './App.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)

app.component('personal-profile', PersonalProfile)
app.component('restapi', RestApi)

app.mount('#app')

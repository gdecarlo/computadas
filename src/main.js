// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppValidPassword from './components/AppValidPassword.vue'
import AppSearchPeople from './components/AppSearchPeople.vue'
import Home from './components/Home.vue'
import { createRouter,createWebHistory } from 'vue-router'
import AppEditPerson from './components/AppEditPerson.vue'

//ruteo

const routes = [
    {path:'/', component: Home},
    {path:'/valid-password', component: AppValidPassword},
    {path:'/search-people', component: AppSearchPeople},
    {path:'/edit-person/:id',component: AppEditPerson}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App)
.use(router)
.mount('#app')

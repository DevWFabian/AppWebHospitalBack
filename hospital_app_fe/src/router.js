import {
    createRouter,
    createWebHistory
} from 'vue-router'
import App from './App.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import DashboardAux from './views/DashboardAux.vue'
import PerfilUsuario from './views/PerfilUsuario.vue'
const routes = [{
    path: '/',
    name: 'root',
    component: Home
}, {
    path: '/login',
    name: "Login",
    component: Login
},
{
    path: '/home',
    name: "Home",
    component: Home
},{
    path: '/admin',
    name: "DashboardAux",
    component: DashboardAux
},
{
    path: '/perfil',
    name: "PerfilUsuario",
    component: PerfilUsuario
},

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Agregar from '@/views/Agregar'
import Categorias from '@/views/Categorias'
import Detalle from '@/views/Detalle'
import Favoritos from '@/views/Favoritos'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Registrar from '@/views/Registrar'
import Politicas from '@/views/Politicas'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { authRequired: true }
  },
  {
    path: '*',
    name: "NotFound",
    component: NotFound,
  },
  {
    path: '/Agregar',
    name: 'Agregar',
    component: Agregar,
    meta: { authRequired: true }
  },
  {
    path: '/ingresar',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/Detalle/:id',
    name: 'Detalle',
    component: Detalle,
    props: true,
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: Favoritos
  },
  {
    path: '/politicas',
    name: 'Politicas',
    component: Politicas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

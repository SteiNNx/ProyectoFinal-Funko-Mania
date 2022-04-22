import Vue from 'vue'
import VueRouter from 'vue-router'

import Categorias from '@/views/Categorias'
import Detalle from '@/views/Detalle'
import Favoritos from '@/views/Favoritos'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Registrar from '@/views/Registrar'
import Politicas from '@/views/Politicas'
import Terminos from '@/views/Terminos'
import Administracion from '@/views/Administracion'
import Buscados from '@/views/Buscados'
import Curiosidades from '@/views/Curiosidades'
import Promociones from '@/views/Promociones'


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
    path: '/curiosidades',
    name: 'Curiosidades',
    component: Curiosidades
  },
  {
    path: '/promociones',
    name: 'Promociones',
    component: Promociones
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: Administracion,
    meta: { authRequired: true }
  },
  {
    path: '/detalle/:id',
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
  {
    path: '/terminos',
    name: 'Terminos',
    component: Terminos
  },
  {
    path: '/buscados',
    name: 'Buscados',
    component: Buscados
  },
  {
    path: '/pago',
    name: 'Pago',
    component: Pago
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

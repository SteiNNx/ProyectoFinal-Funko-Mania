import Vue from 'vue'
import VueRouter from 'vue-router'

import Administracion from '@/views/Administracion'
import Buscados from '@/views/Buscados'
import Categorias from '@/views/Categorias'
import CheckoutCompra from '@/views/CheckoutCompra'
import CheckoutPostCompra from '@/views/CheckoutPostCompra'
import Curiosidades from '@/views/Curiosidades'
import Detalle from '@/views/Detalle'
import Favoritos from '@/views/Favoritos'
import Home from '@/views/Home'
import Login from '@/views/Login'
import MisCompras from '@/views/MisCompras'
import NotFound from '@/views/NotFound'
import Politicas from '@/views/Politicas'
import Promociones from '@/views/Promociones'
import Registrar from '@/views/Registrar'
import Terminos from '@/views/Terminos'


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
    path: '/checkout-compra',
    name: 'CheckoutCompra',
    component: CheckoutCompra
  },
  {
    path: '/checkout-post-compra',
    name: 'CheckoutPostCompra',
    component: CheckoutPostCompra
  },
  {
    path: '/mis-compras',
    name: 'MisCompras',
    component: MisCompras
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/pages/colors',
        name: 'Colors',
        component: () => import('@/views/pages/Colors.vue'),
      },
      {
        path: '/pages/typography',
        name: 'Typography',
        component: () => import('@/views/pages/Typography.vue'),
      },
      {
        path: '/pages/navs',
        name: 'Navs',
        component: () => import('@/views/pages/Navs.vue'),
      },
      {
        path: '/pages/paginations',
        name: 'Paginations',
        component: () => import('@/views/pages/Paginations.vue'),
      },
      {
        path: '/pages/tables',
        name: 'Tables',
        component: () => import('@/views/pages/Tables.vue'),
      },
      {
        path: '/pages/dropdowns',
        name: 'Dropdowns',
        component: () => import('@/views/pages/Dropdowns.vue'),
      },
      {
        path: '/pages/buttons',
        name: 'Buttons',
        component: () => import('@/views/pages/Buttons.vue'),
      },

      {
        path: '/pages/select',
        name: 'Select',
        component: () => import('@/views/pages/Select.vue'),
      },
      {
        path: '/pages/checks-radios',
        name: 'Checks & Radios',
        component: () => import('@/views/pages/ChecksRadios.vue'),
      },
      {
        path: '/pages/layout',
        name: 'Layout',
        component: () => import('@/views/pages/Layout.vue'),
      },
      {
        path: '/pages/login',
        name: 'Login',
        component: () => import('@/views/pages/Login.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router

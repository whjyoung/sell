import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Search from '@/pages/Search/Search'
import Profile from '@/pages/Profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'msite',
      component: Msite
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

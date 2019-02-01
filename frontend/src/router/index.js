import Vue from 'vue'
import Router from 'vue-router'
import Customer from '@/components/Customer'
import Seller from '@/components/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})


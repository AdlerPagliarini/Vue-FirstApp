import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstApp from '@/components/FirstApp'
import UserApp from '@/components/UserApp'
import Customers from '@/components/Customers'
import CustomerDetails from '@/components/CustomerDetails'
import AddCustomer from '@/components/AddCustomer'
//import VueResource from 'vue-resource'

Vue.use(Router)
//Vue.use(VueResource);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/customer/:id',
      name: 'CustomerDetails',
      component: CustomerDetails
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/add-customer',
      name: 'AddCustomer',
      component: AddCustomer
    },
    {
      path: '/first-app',
      name: 'FirstApp',
      component: FirstApp,
      props: { msg: "This is msg prop" }
    },
    {
      path: '/user',
      name: 'UserApp',
      component: UserApp
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

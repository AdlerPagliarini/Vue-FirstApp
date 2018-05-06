import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstApp from '@/components/FirstApp'
import UserApp from '@/components/UserApp'
//import VueResource from 'vue-resource'

Vue.use(Router)
//Vue.use(VueResource);

export default new Router({
  mode: 'history',
  base: __dirname + "/vue-js",
  routes: [
    {
      path: '/',
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

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstApp from '@/components/FirstApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstApp',
      component: FirstApp,
      props: { msg: "This is msg prop" }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

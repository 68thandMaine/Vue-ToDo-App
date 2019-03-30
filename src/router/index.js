import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import ToDoForm from '@/components/ToDoForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todoform',
      name: 'ToDoForm',
      component: ToDoForm
    }
  ]
})

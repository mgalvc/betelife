import Vue from 'vue'
import Router from 'vue-router'
import VoluntarioForm from '@/components/VoluntarioForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/novo-voluntario',
      name: 'VoluntarioForm',
      component: VoluntarioForm
    }
  ]
})

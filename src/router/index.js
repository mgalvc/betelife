import Vue from 'vue'
import Router from 'vue-router'
import VoluntarioForm from '@/components/VoluntarioForm'
import AlunoForm from '@/components/AlunoForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/novo-voluntario',
		name: 'VoluntarioForm',
		component: VoluntarioForm
    },
    {
    	path: '/novo-aluno',
    	name: 'AlunoForm',
    	component: AlunoForm
    }
  ]
})

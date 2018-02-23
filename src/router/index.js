import Vue from 'vue'
import Router from 'vue-router'
import Keyboard1 from '@/components/Keyboard1'
import Keyboard2 from '@/components/Keyboard2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Keyboard1',
            component: Keyboard1
        },
        {
            path: '/keyboard2',
            name: 'Keyboard2',
            component: Keyboard2
        },
    ]
})

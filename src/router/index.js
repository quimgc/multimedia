import Vue from 'vue'
import Router from 'vue-router'
import GameComponent from '@/components/GameComponent'
import HelloWorld from '@/components/HelloWorld'
import ClockComponent from '@/components/ClockComponent'
import PaintComponent from '@/components/PaintComponent'

Vue.use(Router)

// no em funciona el lazy loading no sé perquè.
// const HelloWorld = () => import('@/components/HelloWorld')
// const ClockComponent = () => import('@/components/ClockComponent')
// const GameComponent = () => import('@/components/GameComponent')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/clock',
      name: 'ClockComponent',
      component: ClockComponent
    },
    {
      path: '/game',
      name: 'GameComponent',
      component: GameComponent
    },
    {
      path: '/paint',
      name: 'PaintComponent',
      component: PaintComponent
    }
  ]
})

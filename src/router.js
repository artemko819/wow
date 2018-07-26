import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Gold from './views/Gold.vue'
import PowerLevel from './views/PowerLevel.vue'
import Profession from './views/Profession.vue'
import Pvp from './views/Pvp.vue'
import ShopChar from './views/ShopChar.vue'
import EasyStart from './views/EasyStart.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/services/gold',
      name:'gold',
      component:Gold
    },
    {
      path:'/services/powerlevel',
      name:'powerLevel',
      component:PowerLevel
    },
    {
      path:'/services/profession',
      name:'profession',
      component:Profession
    },
    {
      path:'/services/pvp',
      name:'pvp',
      component:Pvp
    },
    {
      path:'/services/shop-char',
      name:'shopchar',
      component:ShopChar
    },
    {
      path:'/services/easy-start',
      name:'easyStart',
      component:EasyStart
    }
  ]
})

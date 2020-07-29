import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InfoOuders from '../views/InfoOuders.vue'
import InfoAnimatoren from '../views/InfoAnimatoren.vue'
import Pit from '../views/Pit.vue'
import Visie from '../views/Visie.vue'
import Corona from '../views/Corona.vue'
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Speelplein De Speelberg vzw'
    }
  },
  {
    path: '/ouders',
    name: 'Info voor ouders',
    component: InfoOuders,
    meta: {
      title: 'Info voor ouders | Speelplein De Speelberg vzw'
    }
  },
  {
    path: '/animatoren',
    name: 'Info voor animatoren',
    component: InfoAnimatoren,
    meta: {
      title: 'Info voor animatoren | Speelplein De Speelberg vzw'
    }
  },
  {
    path: '/pit',
    name: 'De PIT',
    component: Pit,
    meta: {
      title: 'De PIT | Speelplein De Speelberg vzw'
    }
  },
  {
    path: '/visie',
    name: 'Onze visie',
    component: Visie,
    meta: {
      title: 'Onze visie | Speelplein De Speelberg vzw'
    }
  },
  {
    path: '/coronavirus',
    name: 'Maatregelen coronavirus',
    component: Corona,
    meta: {
      title: 'Coronamaatregelen | Speelplein De Speelberg vzw'
    }
  },
  {
    path: '*',
    component: ErrorPage,
    meta: {
      title: 'Pagina niet gevonden'
    }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faInstagram, faFacebookF, faFacebookMessenger, faBars, faAngleLeft)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

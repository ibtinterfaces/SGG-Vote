import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import fileStartliste from './startliste.json'
import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';

Vue.use(VueSocketio, io(location.hostname + ':8000'), { store });

Vue.use(Vuetify, {
  theme: {
  colactive: '#55B883',
  secondary: '#009',
  primary: '#f00',
  accent: '#0f0',
  colok: '#8dc149',
  colbusy: '#D50000'
  }
})
console.log('Debug Server IP: ' + location.hostname) 

Vue.config.productionTip = false

export default new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')

store.commit('clear_starterlist')
store.commit('update_starterlist', fileStartliste)

// Resultview Control later controlled by Kampfgericht new result
// Starting with individual result
var toggle = false
setInterval(function(){ 
  console.log('Toggle Result Page')
  toggle = !toggle
  store.commit('toggleresult', toggle)
  store.commit('inc_pausenRangIndex')
}, 15000);

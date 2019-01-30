import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import 'vuetify/dist/vuetify.min.css'

// import VueSocketio from 'vue-socket.io'

Vue.use(Vuetify, {
  theme: {
  colactive: '#55B883'
  }
})
console.log('Debug Server IP: ' + location.hostname) 


Vue.config.productionTip = false

new Vue({
// export const bus = new Vue({
    router,
    store,
    // components: { App},
  render: h => h(App)
}).$mount('#app')

// Vue.use(VueSocketio, location.hostname + ':3000', store)

store.commit('clearstarterlist')

// Resultview Control later controlled by Kampfgericht new result
// Starting with individual result
var toggle = false
setInterval(function(){ 
  console.log('Toggle Result Page')
  toggle = !toggle
  store.commit('toggleresult', toggle)
}, 10000);

// Dummy Data
for (var x = 1; x < 47; x++) {
  var starter = {}
   // Update userlist
   starter.nr = x
   starter.platzierung = x
   starter.verein = 'SG Götzenhain'
   starter. gesPunkte = (25 - x/10).toFixed(3)
  if(x%2) {
    starter.name1 = 'Pippi Langstrumpf,  Bibbi Blocksberg,  Hexe Lilli'
    starter.klasse = 'N' + ((x%2) +1)
    starter.type = 'W' + ((x%2) +2)
  } else {
    starter.name1 = 'Pippi Langstrumpf,  Bibbi Blocksberg'
    starter.klasse = 'N' + ((x%2) +1)
    starter.type = 'W' + ((x%2) +2)
  }

  store.commit('addstarter2list', starter)

    // if(x%2) {
    //   store.commit('addstarter2list', {
    //     'name3': 'Hexe Lilli ',
    //     'klasse': 'W' + ((x%2) +2)
    //   })
    
    // }
}
  // store.commit('addstarter2list', store.state.starter)

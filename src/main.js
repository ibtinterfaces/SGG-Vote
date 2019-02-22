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
// Vue.use(VueSocketio, io('https://lit-tor-53130.herokuapp.com:8000'), { store });
// Vue.use(VueSocketio, io('https://lit-tor-53130.herokuapp.com:8000'), { store });

// switched to vue-socket.io-extended due receive bug in above code!!!
// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: location.hostname + ':8000',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   }
// }))

// Import the EventBus we just created.
// import { EventBus } from './event-bus.js';

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

// read Config file after power Reset
// var fs = require('fs');
// var starter = {}

// Vue.prototype.$eventHub = new Vue(); // Global event bus

// var data = { 
//   orgaselect: 1 
// }

// new Vue({
export const EventBus = new Vue({
    router,
    store,
    // data: data,
    methods: {
      // setOrgaSelect(val) 
      //       {
      //    // name will be automatically transported to the parameter.
      //           console.log(':-) ' + val)
      //           EventBus.$data.orgaselect = val
      //           console.log('yes ' + EventBus.orgaselect)
      //       }
    },
    // created() {
    //     this.$eventHub.$on('new-orga-select', this.setOrgaSelect)
    // },

    // beforeDestroy(){
    //     this.$eventHub.$off('new-orga-select');
    // },

    // components: { App},
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


// // Listen for the i-got-clicked event and its payload.
// EventBus.$on('orgaselect', val => {
//   console.log(`Oh, that's nice. Nw orgaselect ${val}  :)`)
// });


// const port = 8000
// io = require("socket.io"),
// server = io.listen(port);

// // event fired every time a new client connects:
// server.on("connection", (socket) => {
//   console.info(`Client connected [id=${socket.id}]`);
//   /// server.emit(DATA_COMMAND, trackerData)
 

//   socket.on("disconnect", () => {
//       console.info(`Client gone [id=${socket.id}]`);
//   });

//   socket.on('mobile_data', (data) => {
//       console.info(data);
//   });
  
// });


// // Dummy Data
// for (var x = 1; x < 47; x++) {
//   var starter = {}
//    // Update userlist
//    starter.nr = x
//    starter.platzierung = x
//    starter.verein = 'SG Götzenhain'
//    starter. gesPunkte = (25 - x/10).toFixed(3)
//   if(x%2) {
//     starter.name1 = 'Pippi Langstrumpf,  Bibbi Blocksberg,  Hexe Lilli'
//     starter.klasse = 'N' + ((x%2) +1)
//     starter.type = 'W' + ((x%2) +2)
//   } else {
//     starter.name1 = 'Pippi Langstrumpf,  Bibbi Blocksberg'
//     starter.klasse = 'N' + ((x%2) +1)
//     starter.type = 'W' + ((x%2) +2)
//   }

//   store.commit('addstarter2list', starter)
// }

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

// export const store = new Vuex.Store({
  strict: true,
  state: {
    
    // Set up on Orga Page 
    aktTeam: 0,  
    lastTeam: 1,  
    kampfgerichtInUse: 0,
    
    // Resultview control
    ToggleResultView: 0,
    // Data of one starter
    starter: {
      name1: '',
      // name2: '',
      // name3: '',
      verein: '',
      klasse: '',
      type: '',
      action: '',
               // Val  Diff ??   DJ         
      technik:   [0.0, 0.0, 0.0, 0.0],
      akrobatik: [0.0, 0.0, 0.0, 0.0],
      wertung:   [0.0, 0.0, 0.0, 0.0],
      gesPunkte: 0.0,
      platzierung: 0
    },

    // Data input on mobile devices für Kampfgerichte
    mobileWertung: {
      dj: 0,
      value: 0,
      technik:   [0.0, 0.0, 0.0, 0.0], // ???????
      akrobatik: [0.0, 0.0, 0.0, 0.0],
    },

  // Array list of starters [0..N]
  starterList: [],

  // Array list of Kampfgerichte[0..N]  
  kampfgericht: []
  
  },

  // computed: {
  //   xobj: {
  //     get () {
  //       return this.$store.state.aktTeam
  //     },
  //     set (value) {
  //       this.$store.commit('updateA', value)
  //     }
  //   }
  // },
  mutations: {
    // List updates
    clearstarterlist (state) {
      state.starterList = [] // Reset List
    },
    addstarter2list (state, obj) {
      state.starterList.push(obj)
    },
    updateaktteam (state, payload) {
      state.aktTeam = payload
    },
    toggleresult (state, payload) {
      state.ToggleResultView = payload
    },

    // // Websocket Mobiledevice communication für Kampfgericht
    // SOCKET_CONNECT: (state, status) => {
    //   state.connect = true
    // },
    // SOCKET_DISCONNECT: (state, status) => {
    //   state.connect = false
    // },
    // SOCKET_MOBILE_DATA: (state, message) => {
    //   state.kampfgericht = message[0]
    //   state.kampfgericht.push(message[0])
    //   console.log(message[0])
    // },



  }  
  // getters: {
  //   getAktTeam (state) {
  //     console.log('now selected: ' + state.aktTeam)
  //     return state.aktTeam
  //   }
  // }

  // setters: {
  //   setAktTeam (state, val) {
  //   this.updateaktteam(state, val)
  //   }
  // },

})

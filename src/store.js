import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

// export const store = new Vuex.Store({
  strict: true,
  state: {
    
    // Set up on Orga Page
    vote: [], // index 0 in vote index 1-N Lastvotes
    orgaselect: 0,
    // orga: {
    //   voting: 2,  
    //   voted: 3,  
    // },

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
  starterActive: [],
  StarterVoted: [],
  


  // Array list of Kampfgerichte[0..N]  
  kampfgericht: []
  
  },

  // computed: {
  //   xobj: {
  //     get () {
  //       return this.$store.state.voting
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
    updatestarterlist (state, obj) {
      state.starterList = obj // Reset List
    },
    addstarter2list (state, obj) {
      state.starterList.push(obj)
    },
    updatevoting (state, payload) {
      state.vote.unshift(payload)
    },
    toggleresult (state, payload) {
      state.ToggleResultView = payload
    },
    updateorgaselect (state, obj) {
      state.orgaselect = obj // Reset List
    },
    updatestarteraktive (state, obj) {
      state.starterActive.unshift(obj)
    }
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



  },  
  getters: {
    tableData: state => {
      return state.starterList
    },
    tableDataActive: state => {
      return state.starterActive
    },
    inVote: (state) => (nr) => {
      if (state.starterList.length === 0) {
        return []
      } else {
        var x = []
        // x.push(state.starterList.find(thing => thing.nr === nr))
        x.push(state.starterList.find(thing => thing.nr === nr))
        console.log('DEBUG')
        console.log(x)
        return x
      }
  },
    // filteredtableDataVoting: state => {
    //   return state.starterList.filter((i) => {
    //     console.log('1: ' + i.nr)
    //     console.log('2: ' + state.orgaselect)
    //      return ((i.nr === state.orgaselect))
    //      // return ((i.nr === 7))
    //    })
    // },
    filteredtableDataVoted: state => {
      return state.starterList.filter((i) => {
        console.log(i.nr)
        console.log((i.nr === state.orgaselect))
         return ((i.nr === state.orgaselect))
         // return ((i.nr === 7))
       })
    },
    filteredtableDataklass: state => {
    return state.starterList.filter((i) => {
      return ((i.klasse === 'N') && (i.type === 'W2'))
       // return ((i.nr === 7))
     })
    },
    displayKlasse: state => { return (state.starterList.length === 0 ? ' ' : state.starterList[state.orgaselect].klasse) },
    displayAlterskl: state => { return (state.starterList.length === 0 ? ' ' : state.starterList[state.orgaselect].alterskl) },
    displayType: state => { return (state.starterList.length === 0 ? ' ' : state.starterList[state.orgaselect].type) },
    displayRoutine: state => { return (state.starterList.length === 0 ? ' ' : state.starterList[state.orgaselect].routine) },
  }

  // setters: {
  //   setVoting (state, val) {
  //   this.updatevoting(state, val)
  //   }
  // },

})

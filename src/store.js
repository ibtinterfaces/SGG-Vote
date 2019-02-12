import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

// export const store = new Vuex.Store({
  strict: true,
  state: {
    
    // Set up on Orga Page
    vote: [], // index 0 in vote index 1-N Lastvotes
    // orgaselect: 0,
    connect: false,

    orga: {
      aktiveTeam: 2,  
      votedTeam: 2,
      KampfgerichtBusy: true,  
    },

    kampfgerichtInUse: 0,
    
    // Resultview control
    ToggleResultView: 0,

    // Data of one starter
    starter: {
      name1: '',
      name2: '',
      name3: '',
      verein: '',
      klasse: '',
      type: '',
      action: '',
               // Val  Diff ??   DJ         
      technik:   [0.0, 0.0, 0.0, 0.0],
      artistik: [0.0, 0.0, 0.0, 0.0],
      wertung:   [0.0, 0.0, 0.0, 0.0],
      gesPunkte: 0.0,
      platzierung: 0
    },

    // Vote values of all mobiles go here
    mobileWertung: [ 
      { // Kampfgericht 1
        technik: {
          input:  [5.1, 6.1, 7.1, 8.1],
          busy: [false, false, false, false],
          result: 0.0
        },
        artistik: {
          input: [5.0, 6.0, 7.0, 8.0],
          busy: [false, false, false, false],
          result: 0.0
        },
        dj: 3.3,
        djBusy: false,
        cjp: 2.2,
        cjpBusy: false,
        results: {
          technik: 0.0,
          artistik: 0.0,
          dj: 3.3,
          cjp: 2.2
          }
      }
    ],

  // // Array list of starters [0..N]
  starterList: [],

  // starterActive: [],
  // StarterVoted: [],
  


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
      state.starterActive = []
      state.starterActive.push(obj)
    },

    // Websocket Mobiledevice communication für Kampfgericht
    //SOCKET_CONNECT: (state, status) => {
    SOCKET_CONNECT: (state) => {
        state.connect = true
      console.log('SOCKET_CONNECT')
    },
    // SOCKET_DISCONNECT: (state, status) => {
    SOCKET_DISCONNECT: (state) => {
        state.connect = false
      console.log('SOCKET_DISCONNECT')
   },
    SOCKET_SYNC_ORGASELECT: (state, message) => {
        state.orga.aktiveTeam = message
      // state.kampfgericht.push(message[0])
      console.log('SOCKET_SYNC_ORGASELECT ', message)
    },



  },  
  getters: {
    // Full table data
    tableDataFull: state => {
      if (state.starterList.length === 0) {
        console.log('Caution no data in List')
        return []
      } else {
      return state.starterList
      }
    },

    // Filter one entry by Nr.
    tableDataOneByNr: (state) => (nr) => {
      if (state.starterList.length === 0) {
        return []
      } else {
        var x = []
        x.push(state.starterList.find(thing => thing.nr === nr))
        console.log(x)
        return x
      }
    },

    // Filter by klass and type for rangliste 
    tableDataSameKlass: (state) => {
      return state.starterList.filter((i) => {
        return ((i.klasse === state.starterList[state.orga.votedTeam].klasse ) && (i.type === state.starterList[state.orga.votedTeam].type))
       })
      },
    displayKlasse: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].klasse) },
    displayAlterskl: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].alterskl) },
    displayType: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].type) },
    displayRoutine: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].routine) },
  }

  // setters: {
  //   setVoting (state, val) {
  //   this.updatevoting(state, val)
  //   }
  // },

})

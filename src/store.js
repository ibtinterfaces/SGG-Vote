import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

// export const store = new Vuex.Store({
  strict: true,
  state: {
    connect: false, // Data server connect

    // // Array list of starters [0..N]
    starterList: [],
    
    // Set up on Orga Page
    vote: [], // index 0 in vote index 1-N Lastvotes
    orga: {
      aktiveTeam: 2,  
      votedTeam: 2,
    },

    // Result view control: single result and filtered result list 
    ToggleResultView: 0,

    // // Data of one starter
    // starter: {
    //   name1: '',
    //   name2: '',
    //   name3: '',
    //   verein: '',
    //   klasse: '',
    //   type: '',
    //   action: '',
    //            // Val  Diff ??   DJ         
    //   technik:   [0.0, 0.0, 0.0, 0.0],
    //   artistik: [0.0, 0.0, 0.0, 0.0],
    //   wertung:   [0.0, 0.0, 0.0, 0.0],
    //   gesPunkte: 0.0,
    //   platzierung: 0
    // },

    // Vote values of all mobiles go here
    mobileWertung: [ 
      { // Kampfgericht 1
        technik: {
          input:  [0.0, 0.0, 0.0, 0.0],
          busy: [false, false, false, false],
          result: 0.0
        },
        artistik: {
          input: [0.0, 0.0, 0.0, 0.0],
          busy: [false, false, false, false],
          result: 0.0
        },
        djresult: 0.0,
        djBusy: false,
        cjpresult: 0.0,
        cjpBusy: false,
      }
    ],

  },

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

    // Calculated pre results berfor validate and takeover
    updatepreresult (state, obj) {
      state.mobileWertung[0].technik.result = obj.technik
      state.mobileWertung[0].artistik.result = obj.artistik
      state.mobileWertung[0].djresult = obj.dj
      state.mobileWertung[0].cjpresult = obj.cjp
    },
    updatecr (state, payload) {
      state.mobileWertung[0].cjpresult = payload
    },
    updatedr (state, payload) {
      state.mobileWertung[0].djresult = payload
    },
    // Calculated results berfor validate and takeover in starterlist
    updatefinalresult (state, payload) {
      state.mobileWertung[0].technik.result = payload // Reset List
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
    SOCKET_MOBILE_VOTE: (state, message) => {
      // this._vm.$socket.emit('mobile_vote',message)
      // this.$store.commit('updatemobilevote', message)
      switch(message.name) {
        case 'Technik':   state.mobileWertung[(message.kgNr-1)].technik.input.splice((message.krNr-1), 1, message.value)
                          break
        case 'Artistik':  state.mobileWertung[(message.kgNr-1)].artistik.input.splice((message.krNr-1), 1, message.value) 
                          break
        case 'DJ':        state.mobileWertung[(message.kgNr-1)].djresult = message.value
                          break
        case 'CJP':       state.mobileWertung[(message.kgNr-1)].cjpresult = message.value
                          break
        default: // better do nothing
      }
      console.log('SOCKET_MOBILE_VOTE', message)
    },
    SOCKET_MOBILE_BUSY: (state, message) => {
      switch(message.name) {
        case 'Technik': state.mobileWertung[(message.kgNr-1)].technik.busy.splice((message.krNr-1), 1, message.busy)
                        break
        case 'Artistik': state.mobileWertung[(message.kgNr-1)].artistik.busy.splice((message.krNr-1), 1, message.busy)
                        break
        case 'DJ': state.mobileWertung[(message.kgNr-1)].djBusy = message.busy
                        break
        case 'CJP': state.mobileWertung[(message.kgNr-1)].cjpBusy = message.busy
                        break
        default: // better do nothing
      }
    console.log('SOCKET_MOBILE_BUSY', message)
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

    // getTechnik1: state => () => state.mobileWertung[0].technik.input[0]

  }

  // setters: {
  //   setVoting (state, val) {
  //   this.updatevoting(state, val)
  //   }
  // },

})

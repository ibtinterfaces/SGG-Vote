import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

// export const store = new Vuex.Store({
  strict: true,
  state: {
    connect: false, // Data server connect
    // Array list of starters [0..N]
    starterList: [],
    // vote: [], // index 0 in vote index 1-N Lastvotes
    // Set up on Orga Page
    orga: {
      aktiveTeam: 1,  
      votedTeam: 2,
    },
    // Result view control: single result and filtered result list 
    ToggleResultView: 0,
    orgaBusy: false,

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
    cleanInitWertung: [ 
      { // Kampfgericht 1
        technik: {
          input:  [null, null, null, null],
          busy: [false, false, false, false],
          result: null
        },
        artistik: {
          input: [null, null, null, null],
          busy: [false, false, false, false],
          result: null
        },
        djresult: null,
        djBusy: false,
        cjpresult: null,
        cjpBusy: false,
        diffresult: null,
        finalresult: 0.000,
      }
    ],
    mobileWertung: [ 
      { // Kampfgericht 1
        technik: {
          input:  [null, null, null, null],
          busy: [false, false, false, false],
          result: null
        },
        artistik: {
          input: [null, null, null, null],
          busy: [false, false, false, false],
          result: null
        },
        djresult: null,
        djBusy: false,
        cjpresult: null,
        cjpBusy: false,
        diffresult: null,
        finalresult: 0.000,
      }
    ],

  },

  mutations: {
    // List updates
    clear_starterlist (state) {
      state.starterList = [] // Reset List
    },
    update_starterlist (state, obj) {
      state.starterList = obj // Reset List
    },
    // addstarter2list (state, obj) {
    //   state.starterList.push(obj)
    // },
    // update_voting (state, payload) {
    //   state.vote.unshift(payload)
    // },
    toggleresult (state, payload) {
      state.ToggleResultView = payload
    },
    update_orga_select (state, nr) {
      state.orga.aktiveTeam = nr // Reset List
    },
    clear_mobile_buffer (state) {
      state.mobileWertung = [...state.cleanInitWertung]
      // state.mobileWertung = state.cleanInitWertung
      // Vue.$set(state.mobileWertung[0].technik.input, 0, null)

      // Vue.$set(state, 'mobileWertung[0].technik.input', [null, null, null, null]);

      // state.mobileWertung[0].technik.input.$set(1, null)
      // state.mobileWertung[0].technik.input.$set(2, null)
      // state.mobileWertung[0].technik.input.$set(3, null)
        },
    // Calculated pre results berfor validate and takeover
    update_pre_result (state, obj) {
      state.mobileWertung[0].technik.result = obj.technik
      state.mobileWertung[0].artistik.result = obj.artistik
      state.mobileWertung[0].djresult = obj.dj
      state.mobileWertung[0].cjpresult = obj.cjp
      state.mobileWertung[0].finalresult =obj.result.toFixed(3)
      
    },
    update_cjp_r (state, payload) {
      state.mobileWertung[0].cjpresult = payload
    },
    update_dj_r (state, payload) {
      state.mobileWertung[0].djresult = payload
    },
    // Updates to starterList[] Array
    update_diff_list (state, payload) {
      state.starterList[state.orga.aktiveTeam].D = payload
    },

    // Put final result in starterlist
    update_final_results (state) {
        state.starterList[state.orga.aktiveTeam].T = state.mobileWertung[0].technik.result 
        state.starterList[state.orga.aktiveTeam].A = state.mobileWertung[0].artistik.result 
        state.starterList[state.orga.aktiveTeam].DJ = state.mobileWertung[0].djresult 
        state.starterList[state.orga.aktiveTeam].CJP = state.mobileWertung[0].cjpresult 
        state.starterList[state.orga.aktiveTeam].gesPunkte = state.mobileWertung[0].finalresult
    },
    // },


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
     SOCKET_SYNC_VOTEDTEAM: (state, message) => {
      state.orga.votedTeam = message
    // state.kampfgericht.push(message[0])
    console.log('SOCKET_SYNC_VOTEDTEAM ', message)
    },
    SOCKET_SYNC_STARTERLIST: (state, message) => {
      state.starterList = message
    // state.kampfgericht.push(message[0])
    console.log('SOCKET_SYNC_STARTERLIST ', message)
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

    SOCKET_SYNC_FINAL_RESULTS: (state, message) => {
      console.log('Receive new final results')
      state.starterList[state.orga.aktiveTeam].T = message[0].technik.result 
      state.starterList[state.orga.aktiveTeam].A = message[0].artistik.result 
      state.starterList[state.orga.aktiveTeam].DJ = message[0].djresult 
      state.starterList[state.orga.aktiveTeam].CJP = message[0].cjpresult 
      state.starterList[state.orga.aktiveTeam].gesPunkte = message[0].finalresult
    },


  },  
  getters: {
    getAktiveTeam: state  => {
      return state.orga.aktiveTeam
    },
    getVotedTeam: state  => {
      return state.orga.votedTeam
    },

    getDiff: (state) => {
      if (state.starterList.length === 0) {
        return 0
      } else {
        var x = 0
        x = state.starterList.find(thing => thing.nr === state.orga.aktiveTeam)
        return parseFloat(x.D).toFixed(2)
      }
    },
    // getDiff: state  => {
    //   var obj = {}
    //   console.log('DEBUG: index: ' + state.orga.aktiveTeam + 'get Diff: ' + state.starterList[state.orga.aktiveTeam].D)
    //   obj = state.starterList.slice(0,1)
    //   console.log('obj')
    //   console.log(obj)
    //   console.log('obj.D')
    //   console.log(obj[0].D)
    //   return obj[0].D
    // },
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
        console.log(' DEBUG FILTER LIST' + i.gesPunkte + ' 0.000')
        return ((i.gesPunkte >= 0.001 ) && (i.klasse === state.starterList[state.orga.votedTeam].klasse ) && (i.type === state.starterList[state.orga.votedTeam].type))
       })
      },
    // Filter für OneResult Rang Anzeige  
    aktuellerRang: (state) => {
    console.log('Enter New Filter')
    const rang = state.starterList
    .filter((i) => ( (i.gesPunkte >= 0.001 ) && (i.klasse === state.starterList[state.orga.votedTeam].klasse ) && (i.type === state.starterList[state.orga.votedTeam].type)))
    rang.sort((a, b) => b.gesPunkte - a.gesPunkte )
    return (rang.findIndex((t) =>  (t.nr === state.orga.votedTeam)) +1)
    },

    displayKlasse: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].klasse) },
    displayAlterskl: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].alterskl) },
    displayType: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].type) },
    displayRoutine: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].routine) },

    kg1Busy: (state)  => {
        return (!(state.mobileWertung[0].technik.busy[0] ||
                  state.mobileWertung[0].technik.busy[1] ||
                  state.mobileWertung[0].technik.busy[2] ||
                  state.mobileWertung[0].technik.busy[3] ||
                  state.mobileWertung[0].artistik.busy[0] ||
                  state.mobileWertung[0].artistik.busy[1] ||
                  state.mobileWertung[0].artistik.busy[2] ||
                  state.mobileWertung[0].artistik.busy[3] ||
                  state.mobileWertung[0].djBusy ||
                  state.mobileWertung[0].cjpBusy
                  ))
        }
    

    // getTechnik1: state => () => state.mobileWertung[0].technik.input[0]

  }

  // setters: {
  //   setVoting (state, val) {
  //   this.update_voting(state, val)
  //   }
  // },

})

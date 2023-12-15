import Vue from 'vue'
import Vuex from 'vuex'
import vm from './main.js';
Vue.use(Vuex)

export default new Vuex.Store({

// export const store = new Vuex.Store({
  strict: true,
  state: {
    connect: false, // Data server connect
    showEdit: false,
    showEditIndex: 0,
    showEditMode: '',
    // Array list of starters [0..N]
    starterList: [],
    pausenRangIndex: 0,
/*
    pause : [
      { klasse: 'A', type: 'PW'     }, // indx 0
      { klasse: 'A', type: 'W2'     },
      { klasse: 'A', type: 'W3'     },
      { klasse: 'D', type: 'PW'     },
      { klasse: 'D', type: 'W2'     },
      { klasse: 'D', type: 'W3'     },
      { klasse: 'N', type: 'PW'     },
      { klasse: 'N', type: 'W2'     },
      { klasse: 'N', type: 'W3'     }, // indx 8
    ],
*/
/*  
    pause : [
      { klasse_rang: 'PW' }, // indx 0
      { klasse_rang: 'KFL1' },
      { klasse_rang: 'KFL2+3' },
      { klasse_rang: 'PAAR' },
      { klasse_rang: 'GRUPPE' },
      { klasse_rang: 'MKL' } // index 5
    ],
*/

// Klasse Rang 2022
/*
  pause : [
      { klasse_rang: 'PW Schuler' }, // indx 0
      { klasse_rang: 'PW WKK1.1' },
      { klasse_rang: 'W2 Schuler' },
      { klasse_rang: 'W3 KFL1' },
      { klasse_rang: 'W2 KFL1' },
      { klasse_rang: 'W3 WKK1.1' },
      { klasse_rang: 'W2 WKK1.1' },
      { klasse_rang: 'W3 WKK1.2' },
      { klasse_rang: 'W2 WKK1.2' },
      { klasse_rang: 'W3 Schuler' } //index 9
    ],
*/

// Klasse Rang 2023
pause : [
  { klasse_rang: 'A' }, // indx 0
  { klasse_rang: 'MX-1' },
  { klasse_rang: 'PW-1' },
  { klasse_rang: 'W2-1' },
  { klasse_rang: 'W3-1' },
  { klasse_rang: 'W2-2' },
  { klasse_rang: 'W3-2' },
  { klasse_rang: 'W2-3' },
  { klasse_rang: 'W3-3' },
  { klasse_rang: 'W2-4' } //index 9
],

     // vote: [], // index 0 in vote index 1-N Lastvotes
    // Set up on Orga Page
    orga: {
      aktiveTeam: 1,  
      votedTeam: 2,
    },
    // Result view control: single result and filtered result list 
    ToggleResultView: 0,
    orgaBusy: false,
    orgaPause: false,

    editBuffer: {
      name1: '',
      name2: '',
      name3: '',
      D: 0,
      klasse: '',
      alterskl: '',
      typr: '',
      routine: '',
      gesPunkte: 0.0

      
    },

    mobileWertung: [ 
      { // Kampfgericht 1
        technik: {
          in1: null,
          in2: null,
          in3: null,
          in4: null,
          resp1: null,
          resp2: null,
          resp3: null,
          resp4: null,
          result: null,
        },
        artistik: {
          in1: null,
          in2: null,
          in3: null,
          in4: null,
          resp1: null,
          resp2: null,
          resp3: null,
          resp4: null,
          result: null,
        },
        dj: null,
        respDj: null,
        cjp: null,
        respCjp: null,
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
    toggleresult (state, payload) {
      state.ToggleResultView = payload
    },
    update_orga_select (state, nr) {
      state.orga.aktiveTeam = nr // Reset List
    },
    update_pre_result (state, obj) {
      state.mobileWertung[0].technik.result = obj.technik
      state.mobileWertung[0].artistik.result = obj.artistik
      state.mobileWertung[0].dj = obj.dj
      state.mobileWertung[0].cjp = obj.cjp
      state.mobileWertung[0].finalresult =obj.result.toFixed(3)
      
    },
    update_t1 (state, payload) {
      state.mobileWertung[0].technik.in1 = payload
    },
    update_t2 (state, payload) {
      state.mobileWertung[0].technik.in2 = payload
    },
    update_t3 (state, payload) {
      state.mobileWertung[0].technik.in3 = payload
    },
    update_t4 (state, payload) {
      state.mobileWertung[0].technik.in4 = payload
    },
    update_a1 (state, payload) {
      state.mobileWertung[0].artistik.in1 = payload
    },
    update_a2 (state, payload) {
      state.mobileWertung[0].artistik.in2 = payload
    },
    update_a3 (state, payload) {
      state.mobileWertung[0].artistik.in3 = payload
    },
    update_a4 (state, payload) {
      state.mobileWertung[0].artistik.in4 = payload
    },

    update_t_r (state, payload) {
      state.mobileWertung[0].technik.result = payload
    },
    update_a_r (state, payload) {
      state.mobileWertung[0].artistik.result = payload
    },

    update_cjp_r (state, payload) {
      state.mobileWertung[0].cjp = payload
    },
    update_dj_r (state, payload) {
      state.mobileWertung[0].dj = payload
    },
    // Updates to starterList[] Array
    update_diff_list (state, payload) {
      state.starterList[state.orga.aktiveTeam].D = payload
    },

    update_edit_buffer (state, payload) {
      state.editBuffer = payload
    },

    close_edit (state) {
      state.showEdit = false
      state.showEditMode = 0
  },

    // Put final result in starterlist
    update_final_results (state) {
        state.starterList[state.orga.aktiveTeam].T = state.mobileWertung[0].technik.result
        state.starterList[state.orga.aktiveTeam].A = state.mobileWertung[0].artistik.result 
        state.starterList[state.orga.aktiveTeam].DJ = state.mobileWertung[0].dj
        state.starterList[state.orga.aktiveTeam].CJP = state.mobileWertung[0].cjp
        state.starterList[state.orga.aktiveTeam].gesPunkte = state.mobileWertung[0].finalresult
    },
    inc_pausenRangIndex (state) {
      if(state.pausenRangIndex >= 9) {
        state.pausenRangIndex = 0
      } else {
        state.pausenRangIndex++
      }
    },
    edit_set_mode (state, mode, select_nr) {
      state.showEditMode = mode
      state.showEdit = true
      state.showEditIndex = select_nr
    },
    edit_ok (state) {
      console.log("edit ok")
      if(state.showEditMode === 3) {
        // Add
        console.log("TRACE")
        console.log(state.orga.aktiveTeam)
        console.log(state.starterList)
        state.starterList.splice(state.orga.aktiveTeam, 0, state.starterList[state.orga.aktiveTeam]);
        console.log(state.starterList)
        console.log("TRACE")
      } else if(state.showEditMode === 2) {
        // Del
        state.starterList.splice(state.orga.aktiveTeam,1);
      } else if(state.showEditMode === 1) {
        // Edit
        state.starterList[state.orga.aktiveTeam].D = state.editBuffer.D
        state.starterList[state.orga.aktiveTeam].name1 = state.editBuffer.name1
        state.starterList[state.orga.aktiveTeam].name2 = state.editBuffer.name2
        state.starterList[state.orga.aktiveTeam].name3 = state.editBuffer.name3
      } else {
        // Do nothing
      }
      // this.close_edit
      vm.$socket.emit('sync_starterlist', state.starterList)

    },
    // },


    // Websocket Mobiledevice communication für Kampfgericht
    //SOCKET_CONNECT: (state, status) => {
    SOCKET_CONNECT: (state) => {
        state.connect = true
      // console.log('SOCKET_CONNECT')
    },
    // SOCKET_DISCONNECT: (state, status) => {
    SOCKET_DISCONNECT: (state) => {
        state.connect = false
      // console.log('SOCKET_DISCONNECT')
    },
    SOCKET_SYNC_ORGASELECT: (state, message) => {
      state.orga.aktiveTeam = message
    // state.kampfgericht.push(message[0])
      // console.log('SOCKET_SYNC_ORGASELECT ', message)
     },
     SOCKET_SYNC_VOTEDTEAM: (state, message) => {
      state.orga.votedTeam = message
    // state.kampfgericht.push(message[0])
    // console.log('SOCKET_SYNC_VOTEDTEAM ', message)
    },
    SOCKET_SYNC_STARTERLIST: (state, message) => {
      state.starterList = message
    // state.kampfgericht.push(message[0])
    // console.log('SOCKET_SYNC_STARTERLIST ', message)
    },


    // Artistik Technik DJ CJP votes
    SOCKET_MOB_VOTE_T1: (state, message) => {
      // console.log(message)
      state.mobileWertung[message.kgNr].technik.in1 = message.value
      vm.$socket.emit('mob_resp_t1', message)
    },
    SOCKET_MOB_VOTE_T2: (state, message) => {
      state.mobileWertung[message.kgNr].technik.in2 = message.value
      vm.$socket.emit('mob_resp_t2', message)
    },
    SOCKET_MOB_VOTE_T3: (state, message) => {
      state.mobileWertung[message.kgNr].technik.in3 = message.value
      vm.$socket.emit('mob_resp_t3', message)
    },
    SOCKET_MOB_VOTE_T4: (state, message) => {
      state.mobileWertung[message.kgNr].technik.in4 = message.value
      vm.$socket.emit('mob_resp_t4', message)
    },

    SOCKET_MOB_VOTE_A1: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.in1 = message.value
      vm.$socket.emit('mob_resp_a1', message)
    },
    SOCKET_MOB_VOTE_A2: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.in2 = message.value
      vm.$socket.emit('mob_resp_a2', message)
    },
    SOCKET_MOB_VOTE_A3: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.in3 = message.value
      vm.$socket.emit('mob_resp_a3', message)
    },
    SOCKET_MOB_VOTE_A4: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.in4 = message.value
      vm.$socket.emit('mob_resp_a4', message)
    },

    SOCKET_MOB_VOTE_DJ: (state, message) => {
      state.mobileWertung[message.kgNr].dj = message.value
      vm.$socket.emit('mob_resp_dj', message)
    },
    SOCKET_MOB_VOTE_CJP: (state, message) => {
      state.mobileWertung[message.kgNr].cjp = message.value
      vm.$socket.emit('mob_resp_cjp', message)
    },

    // Artistik Technik DJ CJP RESPONSES
    SOCKET_MOB_RESP_T1: (state, message) => {
      state.mobileWertung[message.kgNr].technik.resp1 = message.value
    },
    SOCKET_MOB_RESP_T2: (state, message) => {
      state.mobileWertung[message.kgNr].technik.resp2 = message.value
    },
    SOCKET_MOB_RESP_T3: (state, message) => {
      state.mobileWertung[message.kgNr].technik.resp3 = message.value
    },
    SOCKET_MOB_RESP_T4: (state, message) => {
      state.mobileWertung[message.kgNr].technik.resp4 = message.value
    },

    SOCKET_MOB_RESP_A1: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.resp1 = message.value
    },
    SOCKET_MOB_RESP_A2: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.resp2 = message.value
    },
    SOCKET_MOB_RESP_A3: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.resp3 = message.value
    },
    SOCKET_MOB_RESP_A4: (state, message) => {
      state.mobileWertung[message.kgNr].artistik.resp4 = message.value
    },

    SOCKET_MOB_RESP_DJ: (state, message) => {
      state.mobileWertung[message.kgNr].respDj = message.value
    },
    SOCKET_MOB_RESP_CJP: (state, message) => {
      state.mobileWertung[message.kgNr].respCjp = message.value
    },

    SOCKET_CLEANUP_MOBILE: (state) => {
      // console.log('SOCKET_CLEANUP_MOBILE', message)
      // vm.$set(state.mobileWertung, 0, state.cleanInitWertung)
      state.mobileWertung[0].technik.in1 = null
      state.mobileWertung[0].technik.in2 = null
      state.mobileWertung[0].technik.in3 = null
      state.mobileWertung[0].technik.in4 = null

      state.mobileWertung[0].technik.result = null

      state.mobileWertung[0].artistik.in1 = null
      state.mobileWertung[0].artistik.in2 = null
      state.mobileWertung[0].artistik.in3 = null
      state.mobileWertung[0].artistik.in4 = null

      state.mobileWertung[0].artistik.result = null

      state.mobileWertung[0].technik.resp1 = null
      state.mobileWertung[0].technik.resp2 = null
      state.mobileWertung[0].technik.resp3 = null
      state.mobileWertung[0].technik.resp4 = null

      state.mobileWertung[0].artistik.resp1 = null
      state.mobileWertung[0].artistik.resp2 = null
      state.mobileWertung[0].artistik.resp3 = null
      state.mobileWertung[0].artistik.resp4 = null

      state.mobileWertung[0].dj = null
      state.mobileWertung[0].cjp = null
      state.mobileWertung[0].respDj = null
      state.mobileWertung[0].respCjp = null

    },
    SOCKET_ORGA_BUSY: (state, message) => {
      state.orgaBusy = message
      // console.log('SOCKET_ORGA_BUSY', message)
    },
    SOCKET_ORGA_PAUSE: (state, message) => {
      state.orgaPause = message
      // console.log('SOCKET_ORGA_PAUSE', message)
    },
    SOCKET_SYNC_FINAL_RESULTS: (state, message) => {
      // console.log('Receive new final results')
      state.starterList[state.orga.aktiveTeam].T = message[0].technik.result 
      state.starterList[state.orga.aktiveTeam].A = message[0].artistik.result 
      state.starterList[state.orga.aktiveTeam].DJ = message[0].dj 
      state.starterList[state.orga.aktiveTeam].CJP = message[0].cjp
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

    getStarterNr: (state) => {
      if (state.starterList.length === 0) {
        return 0
      } else {
        var x = 0
        x = state.starterList.find(thing => thing.nr === state.orga.aktiveTeam)
        return parseFloat(x.nr).toFixed(0)
      }
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
    getName1: (state) => {
      if (state.starterList.length === 0) {
        return 0
      } else {
        var x = 0
        x = state.starterList.find(thing => thing.nr === state.orga.aktiveTeam)
        return x.name1
      }
    },
    getName2: (state) => {
      if (state.starterList.length === 0) {
        return 0
      } else {
        var x = 0
        x = state.starterList.find(thing => thing.nr === state.orga.aktiveTeam)
        return x.name2
      }
    },
    getName3: (state) => {
      if (state.starterList.length === 0) {
        return 0
      } else {
        var x = 0
        x = state.starterList.find(thing => thing.nr === state.orga.aktiveTeam)
        return x.name3
      }
    },

    // Full table data
    tableDataFull: state => {
      if (state.starterList.length === 0) {
        // console.log('Caution no data in List')
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
        // console.log(x)
        return x
      }
    },

    // Changed with postfix rang for new sort
    //.klasse_rang
    //.type_rang

     // Filter by klass and type for rangliste 
     tableDataSameKlassPause: (state) => (nr) => {
      return state.starterList.filter((i) => {
        // console.log(' DEBUG FILTER LIST' + i.gesPunkte + ' 0.000')
        //return ((i.gesPunkte >= 0.001 ) && (i.klasse_rang === state.pause[nr].klasse_rang ) && (i.type_rang === state.pause[nr].type_rang))
        return ((i.gesPunkte >= 0.001 ) && (i.klasse_rang === state.pause[nr].klasse_rang ))
       })
      },
   
    // Filter by klass and type for rangliste 
    tableDataSameKlass: (state) => {
      return state.starterList.filter((i) => {
        // console.log(' DEBUG FILTER LIST' + i.gesPunkte + ' 0.000')
        return ((i.gesPunkte >= 0.001 ) && (i.klasse_rang === state.starterList[state.orga.votedTeam].klasse_rang ) && (i.type_rang === state.starterList[state.orga.votedTeam].type_rang))
       })
      },
    // Filter für OneResult Rang Anzeige  
    aktuellerRang: (state) => {
      // console.log('Enter New Filter')
      const rang = state.starterList
      .filter((i) => ( (i.gesPunkte >= 0.001 ) && (i.klasse_rang === state.starterList[state.orga.votedTeam].klasse_rang ) && (i.type_rang === state.starterList[state.orga.votedTeam].type_rang)))
      rang.sort((a, b) => b.gesPunkte - a.gesPunkte )
      return (rang.findIndex((t) =>  (t.nr === state.orga.votedTeam)) +1)
    },

    displayKlasse: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].klasse) },
    displayAlterskl: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].alterskl) },
    displayType: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].type) },
    displayRoutine: (state) => (nr) => { return (state.starterList.length === 0 ? ' ' : state.starterList[nr].routine) },

    kg1Busy: (state)  => { return state.orgaBusy },
    orgaBusy: (state)  => { return  state.orgaBusy },

    editAdd: (state) => { return state.showEditMode === 3},
    editDel: (state) => { return state.showEditMode === 2},
    editEdit: (state) => { return state.showEditMode === 1}
  }
})

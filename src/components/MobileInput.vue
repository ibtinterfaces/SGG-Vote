<template>
  <div class="input">
    <Led id="led" line1="" line2="" v-bind:input="busyStatus"></Led>
    <v-btn-toggle id="lockbutton" v-model="lockSel">
      <v-btn outline color="colactive" @click="clickLock">
        <v-icon>lock</v-icon>
      </v-btn>
    </v-btn-toggle>
  <v-container fluid ma-0 pa-0>

  <p class="title text-xs-center">Kampfgericht {{kampfSelect}}</p>

  <v-container fluid ma-0 pa-0>
    <v-layout>
      <v-spacer></v-spacer>
      <p class="colapse">{{ selectionText || 'null' }} </p>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>

  <v-container fluid ma-0 pa-0>
    <v-layout>
      <v-spacer></v-spacer>
        <v-checkbox class="px-0" :disabled="lockStatus" v-model="selTmodel" value="true" label="Technik" color="colactive" hide-details></v-checkbox>
        <v-checkbox class="px-0" :disabled="lockStatus" v-model="selAmodel" value="true" label="Artistik" color="colactive" hide-details></v-checkbox>
        <v-checkbox class="px-0" :disabled="lockStatus" v-model="selDmodel" value="true" label="DJ" color="colactive" hide-details></v-checkbox>
        <v-checkbox class="px-0" :disabled="lockStatus" v-model="selCmodel" value="true" label="CJP" color="colactive" hide-details></v-checkbox>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>

    <v-layout col dense>
      <v-flex xs12 sm6 d-flex px-3>
        <v-select
          :disabled="lockStatus"
          :items="kampfgNr"
          label="Kampfgericht Nr."
          color="colactive"
          v-model="kampfSelectmodel"
          item-value="kampfSelect"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex px-3>
        <v-select
          :disabled="lockStatus"
          :items="kampfgIndex"
          label="Richter Nr."
          color="colactive"
          v-model="richtSelectmodel"
          item-value="richtSelect"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>

    <v-data-table
      :headers="headers"
      :items="myData"
      disable-initial-sort
      v-bind:pagination.sync="pagination"
      hide-actions
      item-key="items.key"
       class="elevation-1"
    >
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <span slot="activator" class="pa-0 ma-0">
            {{ props.header.text }}
          </span>
          <span class="pa-0 ma-0">
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td class="text-xs-center colapse pa-0 ma-0">{{ props.item.nr }}</td>
       <!-- <td class="text-xs-left colapse pa-0 ma-0"><span>{{ props.item.name1 }}</span><span>{{ props.item.name2 }}</span><span>{{ props.item.name3 }}</span></td> -->
        <td class="text-xs-center colapse pa-0 ma-0"><p>&nbsp;{{ props.item.name1 }}</p><p>&nbsp;{{ props.item.name2 }}</p><p>&nbsp;{{ props.item.name3 }}</p></td>
        <!-- <td class="text-xs-center title">{{ props.item.verein }}</td> -->
        <!-- <td class="text-xs-center colapse pa-0 ma-0"><span>{{ props.item.alterskl }}</span><span>{{ props.item.klasse }}</span><span>{{ props.item.type }}</span></td>> -->
        <td class="text-xs-center colapse pa-0 ma-0"><p>&nbsp;{{ props.item.alterskl }}</p><p>&nbsp;{{ props.item.klasse }}</p><p>&nbsp;{{ props.item.type }}</p></td>
      </template>
    </v-data-table>

    <v-container fluid>
      <v-layout row wrap>


        <v-flex xs6 sm6 md6 px-1>
           <v-text-field
            v-show="visibleT"
            type="number"
            name="Technik"
            :label="voteNameT"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="voteValueT"
            color="colactive"
            :append-icon="sendStatusT ? 'check' : undefined"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs6 sm6 md6 px-1>
           <v-text-field
            v-show="visibleA"
            type="number"
            name="Artistik"
            :label="voteNameA"
            id="Artistik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="voteValueA"
            color="colactive"
            :append-icon="sendStatusA ? 'check' : undefined"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex  xs6 sm6 md6 px-1>
           <v-text-field
            v-show="visibleD"
            type="number"
            name="DJ"
            :label="voteNameD"
            id="DJ"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="voteValueD"
            color="colactive"
            :append-icon="sendStatusD ? 'check' : undefined"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex  xs6 sm6 md6 px-1>
           <v-text-field
            v-show="visibleC"
            type="number"
            name="CJP"
            :label="voteNameC"
            id="CJP"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="voteValueC"
            color="colactive"
            :append-icon="sendStatusC ? 'check' : undefined"
            clearable
          ></v-text-field>
        </v-flex>
        <!-- <v-spacer></v-spacer> -->


        <!-- <v-flex xs12>
              <v-progress-circular v-show="busyStatus" color="colactive" :indeterminate="busyStatus" :value="0" size="50" class="ml-0 mt-1"></v-progress-circular>
        </v-flex> -->

        <!-- <v-spacer></v-spacer> -->

      </v-layout>
    </v-container>

     <v-container fluid>
      <v-layout row>

        <v-flex xs12>
              <v-btn class="px-4" outline color="colactive" @click="clicNewkVote">
                Send Vote
              </v-btn>
        </v-flex>

        <!-- <v-flex xs12>
            <v-btn-toggle v-model="busySel">
              <v-btn class="px-5" color="colbusy" @click="clickBusy">Busy
              </v-btn>
            </v-btn-toggle>
        </v-flex> -->
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import store from '@/store'
import Led from '@/components/Led.vue'

// import { mapState } from 'vuex';

export default {
  name: 'MobileInput',
  components: {
    Led
  },
  props: {
    // msg: String
  },
    data () {
      return {
        // lock: true,
        lockSel: 0,
        busySel: 1,
        nameSel: 'Technik',     // old
        djSel: 'DJ',
        cjpSel: 'CJP',
        kampfSelect: 1,
        richtSelect: 1,
        selT: false, // new
        selA: false, // new
        selD: false, // new
        selC: false, // new
        voteValueT: '',
        voteValueA: '',
        voteValueD: '',
        voteValueC: '',
        returnVoteValueT: 0,
        returnVoteValueA: 0,
        returnVoteValueD: 0,
        returnVoteValueC: 0,
        // sendStatusT: false,
        // sendStatusA: false,
        // sendStatusD: false,
        // sendStatusC: false,
        // test2: 0,
        // test3: 0,
        // test4: 0,
        // Value: 0.0,
        // Technik: 0.0,
        // Artistik: 0.0,
        // Dj: 0.0,
        kampfgNr: [1], // nur eins 
        kampfgIndex: [1, 2, 3, 4],

        pagination : {'sortBy': 'gesPunkte', 'descending': true, 'rowsPerPage': -1},
        headers: [
        //  {
        //     text: 'Platzierung',
        //     align: 'center',
        //     sortable: false,
        //     value: 'plazierung'
        //   },
          {
            text: 'Nr',
            align: 'center',
            sortable: false,
            value: 'nr'
          },
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          // {
          //   text: 'Verein',
          //   align: 'center',
          //   sortable: false,
          //   value: 'verein'
          // },
          {
            text: 'Klasse',
            align: 'center',
            sortable: false,
            value: 'klasse'
          },
          // {
          //   text: 'Typ',
          //   align: 'center',
          //   sortable: false,
          //   value: 'type'
          // },
          //  {
          //   text: 'Punkte',
          //   align: 'center',
          //   sortable: true,
          //   value: 'gesPunkte'
          // }
          ]
      }
    },
    computed: {
      myData () {
        return this.$store.getters.tableDataOneByNr(store.state.orga.aktiveTeam)
      },
      lockStatus () {
        return (this.lockSel === 0)
      },
      busyStatus () {
        return (this.busySel === 0)
      },
      voteNameT () {
        return 'Kg. ' + this.kampfSelect + ' ' + 'Technik ' + this.richtSelect
      },
      voteNameA () {
        return 'Kg. ' + this.kampfSelect + ' ' + 'Artistik ' + this.richtSelect
      },
      voteNameD () {
        return 'Kg. ' + this.kampfSelect + ' ' + 'DJ '
      },
      voteNameC () {
        return 'Kg. ' + this.kampfSelect + ' ' + 'CJP '
      },
      newTeam () {
        return store.state.orga.aktiveTeam
      },
      // sendStatusT () {
      //   return 
      // },      
      kampfSelectmodel: {
      set(val){this.kampfSelect = val},
      get(){ 
        return parseInt(this.kampfSelect) }
      },
      richtSelectmodel: {
      set(val){this.richtSelect = val},
      get(){ return parseInt(this.richtSelect) }
      },
      selTmodel: {
      set(val){this.selT = val},
      get(){ return this.selT }
      },
      selAmodel: {
      set(val){this.selA = val},
      get(){ return this.selA }
      },
      selDmodel: {
      set(val){this.selD = val},
      get(){ return this.selD }
      },
      selCmodel: {
      set(val){this.selC = val},
      get(){ return this.selC }
      },
      visibleT () { return (this.selT === "true")},
      visibleA () { return (this.selA === "true")},
      visibleD () { return (this.selD === "true")},
      visibleC () { return (this.selC === "true")},
      selectionText () {
      var text = ' '
      if(this.visibleT === true) {
        text = text.concat(' Technik ' + this.richtSelect + ' ')
      }
      if(this.visibleA === true) {
        text = text.concat(' Artistik ' + this.richtSelect + ' ')
      }
      if(this.visibleD === true) {
        text = text.concat(' DJ ' )
      }
      if(this.visibleC === true) {
        text = text.concat(' CJP ')
      }
      console.log('New Text: ' + text)
      return text
      },


      sendStatusT () {
      var val = false
      console.log("this.richtSelect:" + this.richtSelect)
      // var swval = parseInt(this.richtSelect)
      var swval = this.richtSelect
      console.log("swval:" + this.swval)
        switch(swval) {
          case 1: val = (store.state.mobileWertung[(this.kampfSelect-1)].technik.resp1 === parseFloat(this.voteValueT))
                  break
          case 2: val = (store.state.mobileWertung[(this.kampfSelect-1)].technik.resp2 === parseFloat(this.voteValueT))
                  break
          case 3: val = (store.state.mobileWertung[(this.kampfSelect-1)].technik.resp3 === parseFloat(this.voteValueT))
                  break
          case 4: val = (store.state.mobileWertung[(this.kampfSelect-1)].technik.resp4 === parseFloat(this.voteValueT))
                  break
          default: console.log('CAUTION ILLEGAL VALUE IN SEND TECHNIK VALUE!!!  :' + swval)
        }
        return val
      },
      sendStatusA () {
      var val = false
        // var swval = parseInt(this.richtSelect)
        var swval = this.richtSelect
        switch(swval) {
          case 1: val = (store.state.mobileWertung[(this.kampfSelect-1)].artistik.resp1 === parseFloat(this.voteValueA))
                  break
          case 2: val = (store.state.mobileWertung[(this.kampfSelect-1)].artistik.resp2 === parseFloat(this.voteValueA))
                  break
          case 3: val = (store.state.mobileWertung[(this.kampfSelect-1)].artistik.resp3 === parseFloat(this.voteValueA))
                  break
          case 4: val = (store.state.mobileWertung[(this.kampfSelect-1)].artistik.resp4 === parseFloat(this.voteValueA))
                  break
          default: console.log('CAUTION ILLEGAL VALUE IN SEND ARTISTIK VALUE!!!')
        }
        return val
      },
      sendStatusD () {
        return (store.state.mobileWertung[(this.kampfSelect-1)].respDj === parseFloat(this.voteValueD))
      },
      sendStatusC () {
        return (store.state.mobileWertung[(this.kampfSelect-1)].respCjp === parseFloat(this.voteValueC))
      }
    },
    methods: {
      clickTest () {
        // this.click = !this.click
        this.saveConfig()
      },
      saveConfig () {
       localStorage.selT = this.selT
       localStorage.selA = this.selA
       localStorage.selD = this.selD
       localStorage.selC = this.selC
       localStorage.kampfSelect = this.kampfSelect 
       localStorage.richtSelect = this.richtSelect
      },
      getConfig () {
        console.log('Read localStorage')
        if(localStorage.selT) {
          this.selT = localStorage.selT
        }

        if(localStorage.selA) {
          this.selA = localStorage.selA
        }
        if(localStorage.selD) {
          this.selD = localStorage.selD
        }
        if(localStorage.selC) {
          this.selC = localStorage.selC
        }
        if(localStorage.kampfSelect && (localStorage.kampfSelect !== "undefined")) {
          this.kampfSelect = localStorage.kampfSelect
          console.log("Found local storage kampfSelect :-) val:")
        } else {
          this.kampfSelect = 1
          console.log("Not Found local storage kampfSelect :-(")
        }

        if(localStorage.richtSelect && (localStorage.richtSelect !== "undefined")) {
          this.richtSelect = localStorage.richtSelect
        } else {
          this.richtSelect = 1
        }

      //   if (localStorage.nameSel) {
      //   this.nameSel = localStorage.nameSel;
      //   }
      //   if (localStorage.djSel) {
      //     this.djSel = localStorage.djSel;
      //   }
      //   if (localStorage.cjpSel) {
      //     this.cjpSel = localStorage.cjpSel;
      //   }
      // if (localStorage.kampfSelect) {
      //   this.kampfSelect = localStorage.kampfSelect;
      //   }
      // if (localStorage.richtSelect) {
      //   this.richtSelect = localStorage.richtSelect;
      //   }
      },
      clickLock () {
          localStorage.lockSel = this.lockSel
      },


      clickBusy () {
        var obj ={
          kgNr: 0,
          krNr: 0,
          name: 0,
          busy: 0
        }
        obj.kgNr = this.kampfSelect
        obj.krNr = this.richtSelect
        obj.busy = (this.busySel !== 0)

        if (this.selT) {
          obj.name = 'Technik'
          this.$socket.emit('mobile_busy',obj)
        }
        if (this.selA) {
          obj.name = 'Artistik'
          this.$socket.emit('mobile_busy',obj)
        }
        if (this.selD) {
          obj.name = 'DJ'
          this.$socket.emit('mobile_busy',obj)
        }
        if (this.selC) {
          obj.name = 'CJP'
          this.$socket.emit('mobile_busy',obj)
        }
      },


      clickVote () {
        var obj ={
          kgNr: 0,
          krNr: 0,
          name: 0,
          value: 0
        }

        obj.kgNr = this.kampfSelect
        obj.krNr = this.richtSelect

        if (this.selT) {
          obj.name = 'Technik'
          obj.value = parseFloat(this.voteValueT)
          this.$socket.emit('mobile_vote',obj)
        }
        if (this.selA) {
          obj.name = 'Artistik'
          obj.value = parseFloat(this.voteValueA)
          this.$socket.emit('mobile_vote',obj)
        }
        if (this.selD) {
          obj.name = 'DJ'
          obj.value = parseFloat(this.voteValueD)
          this.$socket.emit('mobile_vote',obj)
        }
        if (this.selC) {
          obj.name = 'CJP'
          obj.value = parseFloat(this.voteValueC)
          this.$socket.emit('mobile_vote',obj)
        }

      },

      clicNewkVote () {
        console.log('Click SEND VOTE ')
        var obj ={
          kgNr: 0,
          value: 0
        }
        obj.kgNr = this.kampfSelect - 1


        if (this.selT === 'true') {
          obj.value = parseFloat(this.voteValueT)

          var swval = parseInt(this.richtSelect)
          console.log('switch: ' + swval)
          switch(swval) {
            case 1: this.$socket.emit('mob_vote_t1',obj)
                    break
            case 2: this.$socket.emit('mob_vote_t2',obj)
                    break
            case 3: this.$socket.emit('mob_vote_t3',obj)
                    break
            case 4: this.$socket.emit('mob_vote_t4',obj)
                    break
            default: console.log('ILLEGAL Richter number: '+ swval)
          }
          console.log('Kampfgericht ' + (obj.kgNr+1)  + ' Technik ' + this.richtSelect + ' Value :' + obj.value)
        }

        if (this.selA === 'true') {
          obj.value = parseFloat(this.voteValueA)
          var val = parseInt(this.richtSelect)
          console.log('switch: ' + val)
          switch(val) {
            case 1: this.$socket.emit('mob_vote_a1',obj)
                    break
            case 2: this.$socket.emit('mob_vote_a2',obj)
                    break
            case 3: this.$socket.emit('mob_vote_a3',obj)
                    break
            case 4: this.$socket.emit('mob_vote_a4',obj)
                    break
          }
          console.log('Kampfgericht ' + (obj.kgNr+1)  + ' Artistik ' + this.richtSelect + ' Value :' + obj.value)
        }

        if (this.selD === 'true') {
          obj.value = parseFloat(this.voteValueD)
          this.$socket.emit('mob_vote_dj',obj)
          console.log('Kampfgericht ' + (obj.kgNr+1)  + ' DJ ' + this.richtSelect + ' Value :' + obj.value)
        }

        if (this.selC === 'true') {
          obj.value = parseFloat(this.voteValueC)
          this.$socket.emit('mob_vote_cjp',obj)
          console.log('Kampfgericht ' + (obj.kgNr+1)  + ' CJP ' + this.richtSelect + ' Value :' + obj.value)
        }

      }


    },
    watch: {
      newTeam: function() {
        console.log('Aktive Team CHANGED !!!!!!!!')
        this.voteValueT = null // war ''
        this.voteValueA = null
        this.voteValueD = null
        this.voteValueC = null

     },
     
     kampfSelectmodel () {
      this.saveConfig()
     },
     richtSelectmodel () {
      this.saveConfig()
     },
     selTmodel () {
      this.saveConfig()
     },
     selAmodel () {
      this.saveConfig()
     },
     selDmodel () {
      this.saveConfig()
     },
     selCmodel () {
      this.saveConfig()
     }
    //  voteNameT () {
    //   this.saveConfig()
    //  },
    //  voteNameA () {
    //   this.saveConfig()
    //  },
    //  voteNameD () {
    //   this.saveConfig()
    //  },
    //  voteNameC () {
    //   this.saveConfig()
    //  }
     
    },
    created () {
    // mounted () {
      this.getConfig()
    }
    // mutations: {
    //   check:  {
    //     get: function() {
    //       return this.check
    //     },
    //     set: function(value, nr) {
    //       this.$store.state.mobileWertung.technik[nr] = value  
    //     }
    //   }

    // }


}
</script>

<style scoped lang="scss">
#lockbutton { 
  position: absolute;   
  height: auto;
  right: 9px; top: 9px;
  }          
#led { 
  position: absolute;   
  height: auto;
  left: 0; top: 0;
  }          
</style>

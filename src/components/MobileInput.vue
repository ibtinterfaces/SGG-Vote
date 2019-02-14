<template>
  <div class="input">
    <Led id="led" line1="" line2="" v-bind:input="busyStatus"></Led>
    <v-btn-toggle id="lockbutton" v-model="lockSel">
      <v-btn outline color="colactive">
        <v-icon>lock</v-icon>
      </v-btn>
    </v-btn-toggle>
  <v-container fluid ma-0 pa-0>
      <!-- <v-flex xs12 sm6 d-flex pa-5> -->
        
        <p class="title text-xs-center">Kampfgericht {{kampfSelect}}</p>

  <v-container>
    <v-layout>
        <v-spacer></v-spacer>
        <p class="colapse">{{ nameSel || 'null' }} {{richtSelect}}</p>
          <v-spacer></v-spacer>
</v-layout>
  </v-container>


  <v-container fluid>
    <v-layout>
    <v-radio-group v-model="nameSel" :mandatory="false">
      <v-flex xs3>
        <v-radio class="px-0" :disabled="lockStatus" label="Technik" value="Technik" color="colactive"></v-radio>
      </v-flex>
      <v-flex xs3>
        <v-radio class="px-0" :disabled="lockStatus" label="Artistik" value="Artistik" color="colactive"></v-radio>
      </v-flex>
      <v-flex xs3>
        <v-radio class="px-0" :disabled="lockStatus" label="DJ" value="DJ" color="colactive"></v-radio>
      </v-flex>
      <v-flex xs3>
        <v-radio class="px-0" :disabled="lockStatus" label="CJP" value="CJP" color="colactive"></v-radio>
      </v-flex>
    </v-radio-group>
    </v-layout>
  </v-container>




      <!-- </v-flex> -->
    <v-layout col dense>
      <v-flex xs12 sm6 d-flex px-3>
        <v-select
          :disabled="lockStatus"
          :items="kampfgNr"
          label="Kampfgericht Nr."
          color="colactive"
          v-model="kampfSelect"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex px-3>
        <v-select
          :disabled="lockStatus"
          :items="kampfgIndex"
          label="Richter Nr."
          color="colactive"
          v-model="richtSelect"
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
         <!-- <td class="text-xs-center title">{{ props.item.platzierung }}</td> -->
         <!-- <td class="text-xs-center title">{{ props.index + 1 }}</td> -->
         <td class="text-xs-center colapse pa-0 ma-0">{{ props.item.nr }}</td>
      <td class="text-xs-left colapse pa-0 ma-0"><span>{{ props.item.name1 }}</span><span>{{ props.item.name2 }}</span><span>{{ props.item.name3 }}</span></td>
        <!-- <td class="text-xs-center title">{{ props.item.verein }}</td> -->
        <td class="text-xs-center colapse pa-0 ma-0"><span>{{ props.item.alterskl }}</span><span>{{ props.item.klasse }}</span><span>{{ props.item.type }}</span></td>
        <!-- <td class="text-xs-center colapse pa-0 ma-0">{{ props.item.type }}</td> -->
        <!-- <td class="text-xs-center title">{{ props.item.gesPunkte }}</td> -->
      </template>
    </v-data-table>

    <v-container fluid>
      <v-layout row>


        <v-flex xs12 sm10>
           <v-text-field
            type="number"
            name="Technik"
            :label="dataName"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="voteValue"
            color="colactive"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>


        <v-flex xs12>
              <v-btn class="ma-3" outline color="colactive" @click="clickVote">
                Send Vote
              </v-btn>
        </v-flex>

        <!-- <v-spacer></v-spacer> -->
<v-progress-circular v-show="busyStatus" color="colactive" :indeterminate="busyStatus" :value="0" size="50" class="ml-0 mt-1"></v-progress-circular>

      </v-layout>
    </v-container>

     <v-container fluid>
      <v-layout>
        <v-flex xs12>
            <v-btn-toggle v-model="busySel">
              <v-btn class="px-5" color="colbusy" @click="clickBusy">Busy
              </v-btn>
             </v-btn-toggle>
        </v-flex>
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
        lock: true,
        lockSel: 0,
        busySel: 1,
        nameSel: 'Technik',
        kampfSelect: 1,
        richtSelect: 1,
        voteValue: 0,
        returnVoteValue: 0,
        // test1: 0,
        // test2: 0,
        // test3: 0,
        // test4: 0,
        // Value: 0.0,
        // Technik: 0.0,
        // Artistik: 0.0,
        // Dj: 0.0,
        kampfgNr: [1, 2],
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
        return (this.busySel !== 0)
      },
      dataName () {
        return 'Wertung:  Kampfgericht  ' + this.kampfSelect + '  ' + (this.nameSel || 'null' ) + '  ' + this.richtSelect
      }
    },
    methods: {
      clickLock () {
        this.lock = !this.lock
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
        obj.name = this.nameSel
        obj.busy = (this.busySel !== 0)
        this.$socket.emit('mobile_busy',obj)
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
        obj.name = this.nameSel
        obj.value = parseFloat(this.voteValue)
        this.$socket.emit('mobile_vote',obj)
      }
    }

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

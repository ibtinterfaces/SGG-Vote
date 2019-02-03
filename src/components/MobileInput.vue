<template>
  <div class="input">
  <v-container fluid>
      <!-- <v-flex xs12 sm6 d-flex pa-5> -->
        <p class="display-1 text-xs-center">Kampfgericht</p>
        <p class="colapse text-xs-center">{{ radios || 'null' }}</p>

      <!-- </v-flex> -->
    <v-layout col dense>
      <v-flex xs12 sm6 d-flex pa-3>
        <v-select
          :items="kampfgNr"
          label="Kampfgericht Nr."
          color="colactive"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex pa-3>
        <v-select
          :items="kampfgIndex"
          label="Richter Nr."
          color="colactive"
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
          <span slot="activator">
            {{ props.header.text }}
          </span>
          <span>
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
         <!-- <td class="text-xs-center display-1">{{ props.item.platzierung }}</td> -->
         <!-- <td class="text-xs-center display-1">{{ props.index + 1 }}</td> -->
         <td class="text-xs-center display-1">{{ props.item.nr }}</td>
      <td class="text-xs-left display-1">{{ props.item.name1 }}</td>
        <!-- <td class="text-xs-center display-1">{{ props.item.verein }}</td> -->
        <td class="text-xs-center display-1">{{ props.item.klasse }}</td>
        <td class="text-xs-center display-1">{{ props.item.type }}</td>
        <!-- <td class="text-xs-center display-1">{{ props.item.gesPunkte }}</td> -->
      </template>
    </v-data-table>

  <v-container fluid>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Technik" value="Technik" color="colactive"></v-radio>
      <v-radio label="Akrobatik" value="Akrobatik" color="colactive"></v-radio>
      <v-radio label="DJ" value="DJ" color="colactive"></v-radio>
    </v-radio-group>
  </v-container>


    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm10>
          <v-text-field v-show="radios === 'DJ'"
            type="number"
            name="Difficulty"
            label="Difficulty"
            id="Difficulty"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="test1"
            color="colactive"
          ></v-text-field>
           <v-text-field v-show="radios === 'Technik'"
            type="number"
            name="Technik"
            label="Technik Wertung 5-10"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="test2"
            color="colactive"
          ></v-text-field>
           <v-text-field v-show="radios === 'Akrobatik'"
            type="number"
            name="Akrobatik"
            label="Akrobatik Wertung 5-10"
            id="Akrobatik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="test3"
            color="colactive"
          ></v-text-field>
           <v-text-field v-show="radios === 'DJ'"
            type="number"
            name="DJ"
            label="DJ Wertung 5-10"
            id="Dj"
            min=0
            max=30
            step=0.1
            maxlength=2
            v-model="test4"
            color="colactive"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import store from '@/store'
// import { mapState } from 'vuex';

export default {
  name: 'MobileInput',
  props: {
    // msg: String
  },
    data () {
      return {
        test1: 0,
        test2: 0,
        test3: 0,
        test4: 0,
        Difficultyt: 0.0,
        Technik: 0.0,
        Akrobatik: 0.0,
        Dj: 0.0,
        radios: 'Technik',
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
            text: 'Start Nr',
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
          {
            text: 'Type',
            align: 'center',
            sortable: false,
            value: 'type'
          },
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
        return this.$store.getters.tableDataOneByNr(this.$store.state.orga.aktiveTeam)
      },
      // Dummy due 
      displayKlasse () {
          // console.log(store.state.starterList)
          if(this.$store.state.starterList.length === 0) {
            return ' '
          } else {
            return this.$store.state.starterList[store.state.vote[0]].klasse
          }
      },

      // displayType () {
      //     if(this.$store.state.starterList.length === 0) {
      //       return ' '
      //     } else {
      //       return this.$store.state.starterList[store.state.vote[0]].type
      //     }
      // }
    }
}
</script>

<style scoped lang="scss">
</style>

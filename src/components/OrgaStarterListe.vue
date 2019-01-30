<template>
  <div class="rangliste">
    <p class="display-3">Orga Starterliste</p>
   
    <v-data-table
      :headers="headers"
      :items="tableData"
      disable-initial-sort
      v-bind:pagination.sync="pagination"
      hide-actions
      item-key="items.nr"
      v-model="selected"
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
         <tr @click="select(props.item)" :active="props.selected" :style="{backgroundColor: (props.item.nr === activeLine ? '#55B883' : 'transparent' ) }">
          <td class="text-xs-center display-1">{{ props.item.nr }}</td>

        <!-- <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
            @mousedown="selectAktTeam"
          ></v-checkbox>
        </td> -->

          <td class="text-xs-left display-1">{{ props.item.name1 }}</td>
          <td class="text-xs-center display-1">{{ props.item.verein }}</td>
          <td class="text-xs-center display-1">{{ props.item.klasse }}</td>
          <td class="text-xs-center display-1">{{ props.item.type }}</td>
          <td class="text-xs-center display-1">{{ props.item.gesPunkte }}</td>
        </tr>
      </template>
    </v-data-table>
    <p>{{ myDebug }} </p>

  </div>
</template>

<script>
// import Vue from 'vue'
import store from '@/store'

export default {
  name: 'RangListe',
  props: {
    // msg: String
  },
    data () {
      return {
        pagination : {'sortBy': 'nr', 'descending': false, 'rowsPerPage': -1},
        selected: [],
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
            sortable: true,
            value: 'nr'
          },
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Verein',
            align: 'center',
            sortable: false,
            value: 'verein'
          },
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
           {
            text: 'Punkte',
            align: 'center',
            sortable: false,
            value: 'gesPunkte'
          }
          ],
      }
    },
    computed: {
      tableData () {
        return store.state.starterList
      },
      // 'starterData': function columns () {
      //   return store.state.starterList
      // },
      filteredtableData () {
          return store.state.starterList.filter((i) => {
            return ((i.klasse === 'N1') && (i.type === 'W2'))
          })
      },
      myDebug () {
        // return store.state.starterList
        
          if(this.selected.length === 0) {
            return ' '
          } else {
            return this.selected[0].nr
          }
      },
      displayKlasse () {
          // console.log(store.state.starterList)
          if(store.state.starterList.length === 0) {
            return ' '
          } else {
            return store.state.starterList[store.state.lastTeam].klasse
          }
      },
      displayType () {
          if(store.state.starterList.length === 0) {
            return ' '
          } else {
            return store.state.starterList[store.state.lastTeam].type
          }
      },
      activeLine () {
          if(this.selected.length === 0) {
            return 0
          } else {
            return this.selected[0].nr
          }
      }
    // filteredItems () {
    //   // console.log(store.state.starterList)
    //     return store.state.starterList
    //   }

    },
    methods: {
      select(selectedItem) {
        this.selected = []
        this.tableData.forEach(item => {
          if (item.nr === selectedItem.nr) {
           this.selected.push(item)
          }
        })
        // Vue.set(store.state, 'aktTeam', selectedItem.nr)
        // store.commit('updateaktteam', this.selected[0].nr)
        // store.state.aktTeam = 5
        store.commit('updateaktteam', selectedItem.nr)
        // this.myUpdate(selectedItem.nr)
      }
     },
    // actions: {
    //   myUpdate (val) {
    //     store.commit('updateaktteam', val)
    //   }
    // }
    // mounted () {
    //   // Dummy fake data for testing
    // }
}
</script>

<style scoped lang="scss">
</style>

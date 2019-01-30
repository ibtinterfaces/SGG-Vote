<template>
  <div class="rangliste">
    <p class="display-3">Rangliste</p>
     <p class="display-1 mx-5">Klasse:  {{ displayKlasse }},  {{ displayType }}</p>
  
    <v-data-table
      :headers="headers"
      :items="filteredtableData"
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
         <td class="text-xs-center display-1">{{ props.index + 1 }}</td>
         <td class="text-xs-center display-1">{{ props.item.nr }}</td>
      <td class="text-xs-left display-1">{{ props.item.name1 }}</td>
        <td class="text-xs-center display-1">{{ props.item.verein }}</td>
        <!-- <td class="text-xs-center display-1">{{ props.item.klasse }}</td>
        <td class="text-xs-center display-1">{{ props.item.type }}</td> -->
        <td class="text-xs-center display-1">{{ props.item.gesPunkte }}</td>
      </template>
    </v-data-table>
    <!-- <p>{{ myDebug }} </p> -->

  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'RangListe',
  props: {
    // msg: String
  },
    data () {
      return {
        pagination : {'sortBy': 'gesPunkte', 'descending': true, 'rowsPerPage': -1},
        headers: [
         {
            text: 'Platzierung',
            align: 'center',
            sortable: false,
            value: 'plazierung'
          },
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
          {
            text: 'Verein',
            align: 'center',
            sortable: false,
            value: 'verein'
          },
          // {
          //   text: 'Klasse',
          //   align: 'center',
          //   sortable: false,
          //   value: 'klasse'
          // },
          // {
          //   text: 'Type',
          //   align: 'center',
          //   sortable: false,
          //   value: 'type'
          // },
           {
            text: 'Punkte',
            align: 'center',
            sortable: true,
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
        return store.state.starterList
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
      }
    // filteredItems () {
    //   // console.log(store.state.starterList)
    //     return store.state.starterList
    //   }

    },
    mounted () {
      // Dummy fake data for testing
    }
}
</script>

<style scoped lang="scss">
</style>

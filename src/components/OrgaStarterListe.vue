<template>
  <div class="rangliste">
    <p class="display-3">Orga Starterliste</p>
        <p>Selected:{{ myDebug }} </p>
    <EditStarter></EditStarter>
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
            @mousedown="selectVoting"
          ></v-checkbox>
        </td> -->

          <!-- <td class="text-xs-left display-1"><span>{{ props.item.name1 }}</span><span>{{ props.item.name2 }}</span><span>{{ props.item.name3 }}</span></td> -->
          <td class="text-xs-left display-1"><p>&nbsp;{{ props.item.name1 }}</p><p>&nbsp;{{ props.item.name2 }}</p><p>&nbsp;{{ props.item.name3 }}</p></td>
         <!-- <td class="text-xs-center display-1">{{ props.item.verein }}</td> -->
          <td class="text-xs-center display-1">{{ props.item.D }}</td>
          <td class="text-xs-center display-1">{{ props.item.klasse_rang }}</td>
          <td class="text-xs-center display-1">{{ props.item.klasse }}</td>
          <td class="text-xs-center display-1">{{ props.item.alterskl }}</td>
          <td class="text-xs-center display-1">{{ props.item.type }}</td>
          <td class="text-xs-center display-1">{{ props.item.routine }}</td>
          <td class="text-xs-center display-1">{{ props.item.gesPunkte }}</td>
          <td class="text-xs-center display-1" @click="myedit(props.item)"><v-icon>edit</v-icon></td>
          <td class="text-xs-center display-1" @click="myadd(props.item)"><v-icon>add</v-icon></td>
          <td class="text-xs-center display-1" @click="mydelete(props.item)"><v-icon>delete</v-icon></td>
        </tr>
      </template>
    </v-data-table>

  </div>
</template>

<script>
// import Vue from 'vue'
import store from '@/store'
import EditStarter from '@/components/EditStarter.vue'

// Import the EventBus we just created.
// import { EventBus } from '@/event-bus.js';

export default {
  name: 'OrgaStarterListe',
  components: {
    EditStarter
  },

  props: {
    // msg: String
  },
    data () {
      return {
        pagination : {'sortBy': 'nr', 'descending': false, 'rowsPerPage': -1},
        selected: [],
        tempSelect: 0,
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
          // {
          //   text: 'Verein',
          //   align: 'center',
          //   sortable: false,
          //   value: 'verein'
          // },
          {
            text: 'Diff',
            align: 'center',
            sortable: false,
            value: 'D'
          },
          {
            text: 'W-Gruppe',
            align: 'center',
            sortable: false,
            value: 'klasse_rang'
          },
          {
            text: 'Klasse',
            align: 'center',
            sortable: false,
            value: 'klasse'
          },
          {
            text: 'Altersklasse',
            align: 'center',
            sortable: false,
            value: 'alterskl'
          },
          {
            text: 'Type',
            align: 'center',
            sortable: false,
            value: 'type'
          },
          {
            text: 'Routine',
            align: 'center',
            sortable: false,
            value: 'routine'
          },
           {
            text: 'Punkte',
            align: 'center',
            sortable: false,
            value: 'gesPunkte'
          },
          {
           text: 'Edit',
           align: 'center',
           sortable: false,
           //value: 'gesPunkte'
          },
          {
           text: 'Add',
           align: 'center',
           sortable: false,
           //value: 'gesPunkte'
          },
          {
           text: 'Delete',
           align: 'center',
           sortable: false,
           //value: 'gesPunkte'
          }
          ],
      }
    },
    computed: {
      tableData () {
        return this.$store.getters.tableDataFull
      },
      myDebug () {
        
          if(this.selected.length === 0) {
            return ' '
          } else {
            return this.selected[0].nr
          }
      },
      activeLine () {
          if(this.selected.length === 0) {
            store.commit('update_orga_select', 0)
            return 0
          } else {
            store.commit('update_orga_select', this.selected[0].nr)
            return this.selected[0].nr
          }
      }
    },
    methods: {
      select (selectedItem) {
        this.selected = []
        this.tableData.forEach(item => {
          if (item.nr === selectedItem.nr) {
           this.selected.push(item)
           this.$socket.emit('sync_orgaselect',selectedItem.nr)
          }
        })
      },
      myedit (selectedItem) {
        store.commit('edit_set_mode', 1, selectedItem)

        // store.state.showEditMode = 1
        // store.state.showEdit = true
        // store.state.showEditIndex = selectedItem
        
        console.log("Edit: " + selectedItem.nr)
        // show edit Window
      },
      myadd (selectedItem) {
        store.commit('edit_set_mode', 3, selectedItem)
        console.log("Add: " + selectedItem.nr)
        // store.state.showEditMode = 3
        // store.state.showEditIndex = selectedItem
        // store.state.showEdit = true
        // show edit Window
      },
      mydelete (selectedItem) {
        store.commit('edit_set_mode', 2, selectedItem)
        console.log("Delete: " + selectedItem.nr)
        // store.state.showEditMode = 2
        // store.state.showEditIndex = selectedItem
        // store.state.showEdit = true
        // show edit Window
      }
    },
}
</script>

<style scoped lang="scss">
</style>

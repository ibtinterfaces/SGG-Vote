<template>
  <div class="oneresult pt-0">
    <p class="display-3">Aktiv</p>
    <v-data-table
      :headers="headers"
      :items="tableData"
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
      <td class="text-xs-left display-1"><span>{{ props.item.name1 }}</span><span>{{ props.item.name2 }}</span><span>{{ props.item.name3 }}</span></td>
        <!-- <td class="text-xs-center display-1">{{ props.item.verein }}</td> -->
        <td class="text-xs-center display-1">{{ props.item.klasse }}</td>
        <td class="text-xs-center display-1">{{ props.item.type }}</td>
        <!-- <td class="text-xs-center display-1">{{ props.item.gesPunkte }}</td> -->
      </template>
    </v-data-table>



  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'OneAktive',
  props: {
    // msg: String
  },
    data () {
      return {
        selectNr: 0,
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
      myDebug () {
        return store.state.starterList
      },
      tableData () {
        // console.log('Now try to pass Nr')
        // var nr = this.$EventBus.orgaselect
        // console.log(nr)
        // return this.$store.getters.tableDataActive

        return this.$store.getters.tableDataOneByNr(this.$store.state.orga.aktiveTeam)
        // return this.$store.getters.tableDataOneByNr(7)

        // return this.$store.getters.inVote(this.$store.state.orga.aktiveTeam)
        // return this.$store.getters.inVote(nr)
      }
    },
    methods: {
      // setOrgaSelect(val) 
      //       {
      //    // name will be automatically transported to the parameter.
      //           console.log('K :-) ' + val)
      //           this.selectNr = val
      //           console.log('K xxx ' + this.selectNr)
      //       }
    }
    // created() {
    //     this.$eventHub.$on('new-orga-select', this.setOrgaSelect)
    // },

    // beforeDestroy(){
    //     this.$eventHub.$off('new-orga-select');
    // },

}
</script>

<style scoped lang="scss">

</style>

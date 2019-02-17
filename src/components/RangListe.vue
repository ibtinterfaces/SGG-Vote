<template>
  <div class="rangliste pt-5">
    <p class="display-3">Rangliste</p>
     <p class="display-1 mx-5">Klasse:  {{  klasse }}, {{  type }},  {{  routine }}</p>
  
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
         <td class="text-xs-center display-1">{{ props.index + 1 }}</td>
         <td class="text-xs-center display-1">{{ props.item.nr }}</td>
      <td class="text-xs-left display-1"><span>{{ props.item.name1 }}</span><span>{{ props.item.name2 }}</span><span>{{ props.item.name3 }}</span></td>
        <!-- <td class="text-xs-center display-1">{{ props.item.verein }}</td> -->
        <!-- <td class="text-xs-center display-1">{{ props.item.klasse }}</td>
        <td class="text-xs-center display-1">{{ props.item.type }}</td> -->
        <td class="text-xs-center display-1">{{ props.item.gesPunkte }}</td>
      </template>
    </v-data-table>
    <!-- <p>{{ myDebug }} </p> -->

  </div>
</template>

<script>
// import store from '@/store'

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
          // {
          //   text: 'Verein',
          //   align: 'center',
          //   sortable: false,
          //   value: 'verein'
          // },
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
        return this.$store.getters.tableDataSameKlass
      },
      klasse () {
        return this.$store.getters.displayKlasse(this.$store.state.orga.votedTeam)
      },
      altersKlasse () {
        return this.$store.getters.displayAlterskl(this.$store.state.orga.votedTeam)
      },
      type () {
        return this.$store.getters.displayType(this.$store.state.orga.votedTeam)
      },
      routine () {
        return this.$store.getters.displayRoutine(this.$store.state.orga.votedTeam)
      },
    },
    mounted () {
      // Dummy fake data for testing
    }
}
</script>

<style scoped lang="scss">
</style>

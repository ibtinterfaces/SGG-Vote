<template>
  <div class="oneresult pt-5">
    <p class="display-1">Letzte Wertung</p>
    
    <v-data-table
      :headers="headers"
      :items="tableData"
      disable-initial-sort
      v-bind:pagination.sync="pagination"
      hide-actions
      item-key="items.key"
       class="elevation-1"
       id="vote-last"
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
         <td class="text-xs-center display-1" colspan="10">
			<div id="test">
				<div class="row">
					<div class="col col-50" id="names">
						<img src="img/SGG_logo.png" width="100" alt="SG Götzenhain"/>
						<p>&nbsp;{{ props.item.name1 }}</p><p>&nbsp;{{ props.item.name2 }}</p><p>&nbsp;{{ props.item.name3 }}</p>
					</div>
					<div class="col col-50">
						<div class="vote purp col col-20">#{{ props.item.nr }}</div><div class="label col col-33">Disziplin: {{ props.item.type }}</div><div class="label col col-33">Klasse: {{ props.item.klasse }}</div>
					</div>
				</div>
				<div class="row">
					<div class="col col-40">
						<div class="col"><div class="label">Endnote</div><div class="vote dblue">{{ props.item.gesPunkte }}</div></div>
						<!-- <div class="col"><div class="label">Rang</div><div class="vote purp">{{ props.item.platzierung }}</div></div> -->
						<div class="col"><div class="label">Rang</div><div class="vote purp">{{ aktuellerRang }}</div></div>
					</div>
					<div class="col col-60">
						<div class="col col-33">
							<div class="col"><div class="label">&nbsp;</div><div class="vote white">&nbsp;</div></div>
							<div class="col"><div class="label">CJP</div><div class="vote blue">-{{ props.item.CJP }}</div></div>
						</div>
						<div class="col col-33">
							<div class="col"><div class="label">Diff</div><div class="vote blue">{{ props.item.D }}</div></div>
							<div class="col"><div class="label">DJ</div><div class="vote blue">-{{ props.item.DJ }}</div></div>
						</div>
						<div class="col col-33">
							<div class="col"><div class="label">Technik</div><div class="vote dblue">{{ props.item.T }}</div></div>
							<div class="col"><div class="label">Artistik</div><div class="vote dblue">{{ props.item.A }}</div></div>
						</div>
					</div>	
				</div>
			</div>
		</td>
        <!--td class="text-xs-left display-1"><span>{{ props.item.name1 }}</span><span>{{ props.item.name2 }}</span><span>{{ props.item.name3 }}</span></td-->
        <!--td class="text-xs-center display-1">{{ props.item.klasse }}</td-->
        <!--td class="text-xs-center display-1">{{ props.item.type }}</td-->

        <!--td class="text-xs-center display-1">{{ props.item.D }}</td-->
        <!--td class="text-xs-center display-1">{{ props.item.T }}</td-->
        <!--td class="text-xs-center display-1">{{ props.item.A }}</td-->
        <!--td class="text-xs-center display-1">{{ props.item.DJ }}</td-->
        <!--td class="text-xs-center display-1">{{ props.item.CJP }}</td-->
        <!--td class="text-xs-center display-1">{{ props.item.gesPunkte }}</td-->
      </template>
    </v-data-table>



  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'OneResult',
  props: {
    // msg: String
  },
    data () {
      return {
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
            text: 'Disziplin',
            align: 'center',
            sortable: false,
            value: 'type'
          },
          {
            text: 'Diff.',
            align: 'center',
            sortable: false,
            value: 'D'
          },
          {
            text: 'Technik',
            align: 'center',
            sortable: false,
            value: 'T'
          },
          {
            text: 'Artistik',
            align: 'center',
            sortable: false,
            value: 'A'
          },
          {
            text: 'DJ',
            align: 'center',
            sortable: false,
            value: 'DJ'
          },
          {
            text: 'CJP',
            align: 'center',
            sortable: false,
            value: 'CJP'
          },
          {
            text: 'Total',
            align: 'center',
            sortable: false,
            value: 'gesPunkte'
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
        return this.$store.getters.tableDataOneByNr(this.$store.state.orga.votedTeam)
      },
      aktuellerRang () {
        return this.$store.getters.aktuellerRang
      }
    },
    mounted () {
      // Dummy fake data for testing
    }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div class="orga">

    <v-navigation-drawer clipped fixed v-model="drawer" app temporary dark>
      <MyMenue></MyMenue>
    </v-navigation-drawer>
    <v-toolbar dark app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <Led line1="" line2="" v-bind:input="kampfgerichtBusy1"></Led>
          <v-spacer></v-spacer>
      <v-toolbar-title class="display-1">SGG Voting System</v-toolbar-title>
          <v-spacer></v-spacer>
    <Led line1="" line2="" v-bind:input="orgaBusy"></Led>
    </v-toolbar>



    <ValidateVote/>
    <OrgaStarterListe/>
  </div>
</template>

<script>

// Timer engine 
// x seconds individual score
// x seconds Rangliste 

import OrgaStarterListe from '@/components/OrgaStarterListe.vue'
import ValidateVote from '@/components/ValidateVote.vue'
import MyMenue from '@/components/MyMenue'
import Led from '@/components/Led.vue'

export default {
  // name: 'Results',
  components: {
    Led,
    MyMenue,
    OrgaStarterListe,
    ValidateVote
  },
  data () {
    return {
       drawer: false,

    }

  },
  computed: {
    // Drive busy LED on top of result page
    kampfgerichtBusy1 () {
      return this.$store.getters.kg1Busy
      },
    orgaBusy () {
      return this.$store.getters.orgaBusy
      }
  }
}
</script>

<template>
  <div class="orga">

    <v-navigation-drawer clipped fixed v-model="drawer" app temporary dark>
      <MyMenue></MyMenue>
    </v-navigation-drawer>
    <v-toolbar dark app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-spacer></v-spacer>
      <v-toolbar-title class="display-1">SGG Voting System</v-toolbar-title>
          <v-spacer></v-spacer>
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

export default {
  // name: 'Results',
  components: {
    MyMenue,
    OrgaStarterListe,
    ValidateVote
  },
  data () {
    return {
       drawer: false,

    }

  }
}
</script>

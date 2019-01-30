<template>
  <div class="orga">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <h1>Rangliste</h1> -->
    <OrgaStarterListe/>
  </div>
</template>

<script>

// Timer engine 
// x seconds individual score
// x seconds Rangliste 

import OrgaStarterListe from '@/components/OrgaStarterListe.vue'

export default {
  // name: 'Results',
  components: {
    OrgaStarterListe
  }
}
</script>

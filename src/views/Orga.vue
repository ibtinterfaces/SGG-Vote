<template>
  <div class="orga">
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

export default {
  // name: 'Results',
  components: {
    OrgaStarterListe,
    ValidateVote
  }
}
</script>

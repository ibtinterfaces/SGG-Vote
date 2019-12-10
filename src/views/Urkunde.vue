<template>
  <div class="urkunde">
    <Led line1="" line2="" v-bind:input="kampfgerichtBusy1"></Led>
    <RangListe v-bind:urkunde=true></RangListe>
  </div>
</template>

<script>

// Timer engine v-show
// x seconds individual score
// x seconds Rangliste 

// import store from '@/store'

import Led from '@/components/Led.vue'
import RangListe from '@/components/RangListe.vue'

export default {
  // name: 'Results',
  components: {
    Led,
    RangListe
  },
  computed: {
    // Drive busy LED on top of result page
    kampfgerichtBusy1 () {
      return this.$store.getters.kg1Busy
    },
  }
  
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div class="results">
    <Led line1="" line2="" v-bind:input="kampfgerichtBusy1"></Led>
    <OneAktive></OneAktive>
    <OneResult v-show="showOneresult"></OneResult>
    <RangListe v-show="showRangliste"></RangListe>
  </div>
</template>

<script>

// Timer engine v-show
// x seconds individual score
// x seconds Rangliste 

import store from '@/store'

import Led from '@/components/Led.vue'
import RangListe from '@/components/RangListe.vue'
import OneResult from '@/components/OneResult.vue'
import OneAktive from '@/components/OneAktive.vue'

export default {
  // name: 'Results',
  components: {
    Led,
    RangListe,
    OneResult,
    OneAktive
  },
  computed: {
    showRangliste () {
      // return store.state.ToggleResultView
      if(store.state.orgaPause === true) {
        return true
      } else {
          if(this.kampfgerichtBusy1 === true) {
            return true
          } else {
            return store.state.ToggleResultView
          }
      }
    },
    showOneresult () {
      if(store.state.orgaPause === true) {
        return false
      } else {
        if(this.kampfgerichtBusy1 === true)   {
          return false
        } else {
          return !store.state.ToggleResultView
        }
      }
    },
    // Drive busy LED on top of result page
    kampfgerichtBusy1 () {
      return this.$store.getters.kg1Busy
    },
  }
  
}
</script>

<style scoped lang="scss">

</style>

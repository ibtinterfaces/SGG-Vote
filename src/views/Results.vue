<template>
  <div class="results">
    <Led line1="" line2="" v-bind:input="kampfgericht1"></Led>
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
      return store.state.ToggleResultView
      // return true
    },
    showOneresult () {
      return !store.state.ToggleResultView
      // return true
    },
    // Drive busy LED on top of result page
    kampfgericht1 () {
      return (!(store.state.mobileWertung[0].technik.busy[0] ||
                store.state.mobileWertung[0].technik.busy[1] ||
                store.state.mobileWertung[0].technik.busy[2] ||
                store.state.mobileWertung[0].technik.busy[3] ||
                store.state.mobileWertung[0].artistik.busy[0] ||
                store.state.mobileWertung[0].artistik.busy[1] ||
                store.state.mobileWertung[0].artistik.busy[2] ||
                store.state.mobileWertung[0].artistik.busy[3] ||
                store.state.mobileWertung[0].djBusy ||
                store.state.mobileWertung[0].cjpBusy))
    }
  }
  
}
</script>

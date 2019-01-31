<template>
  <div class="results">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
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

import RangListe from '@/components/RangListe.vue'
import OneResult from '@/components/OneResult.vue'
import OneAktive from '@/components/OneAktive.vue'

export default {
  // name: 'Results',
  components: {
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
    }
  }
}
</script>

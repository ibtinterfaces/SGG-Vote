<template>
  <div class="results">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <RangListe v-show="showRangliste"></RangListe>
    <OneResult v-show="showOneresult"></OneResult>
  </div>
</template>

<script>

// Timer engine v-show
// x seconds individual score
// x seconds Rangliste 
import store from '@/store'

import RangListe from '@/components/RangListe.vue'
import OneResult from '@/components/OneResult.vue'

export default {
  // name: 'Results',
  components: {
    RangListe,
    OneResult
  },
  computed: {
    showRangliste () {
      return store.state.ToggleResultView
    },
    showOneresult () {
      return !store.state.ToggleResultView
    }
  }
}
</script>

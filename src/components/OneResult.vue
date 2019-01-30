<template>
  <div class="oneresult">
    <p class="display-3">Einzelergebnis</p>
    <p class="display-1 mx-5">Klasse:  {{ displayKlasse }},  {{ displayAlterskl }}, {{ displayType }},  {{ displayRoutine }}</p>
   </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'RangListe',
  props: {
    // msg: String
  },
    data () {
      return {
      }
    },
    computed: {
      myDebug () {
        return store.state.starterList
      },
      displayKlasse () {
          // console.log(store.state.starterList)
          if(this.$store.state.starterList.length === 0) {
            return ' '
          } else {
            return this.$store.state.starterList[store.state.lastTeam].klasse
          }
      },
      displayAlterskl () {
          // console.log(store.state.starterList)
          if(this.$store.state.starterList.length === 0) {
            return ' '
          } else {
            return this.$store.state.starterList[store.state.lastTeam].alterskl
          }
      },
      displayType () {
          if(this.$store.state.starterList.length === 0) {
            return ' '
          } else {
            return this.$store.state.starterList[store.state.lastTeam].type
          }
      },
      displayRoutine () {
          if(this.$store.state.starterList.length === 0) {
            return ' '
          } else {
            return this.$store.state.starterList[store.state.lastTeam].routine
          }
      }

    },
    mounted () {
      // Dummy fake data for testing
    }
}
</script>

<style scoped lang="scss">

</style>

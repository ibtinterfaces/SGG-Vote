<template>
  <div class="oneresult">
    <p class="display-3">Einzelergebnis</p>
    <p class="display-1 mx-5">Klasse:  {{ displayKlasse }},  {{ displayType }}</p>
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
          if(store.state.starterList.length === 0) {
            return ' '
          } else {
            return store.state.starterList[store.state.lastTeam].klasse
          }
      },
      displayType () {
          if(store.state.starterList.length === 0) {
            return ' '
          } else {
            return store.state.starterList[store.state.lastTeam].type
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

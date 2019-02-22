<template>
<div>

      <v-list dense>
        <v-list-tile v-for="(item, i) in items" :key="i" @click="menueFunctions(item.function)">
          <v-list-tile-action>

          <!-- <v-icon color="ok">{{ item.icon }}</v-icon> -->
          <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <FileLoad v-if="(i === 0 )" ref="optLoad"></FileLoad>
            <FileSave v-if="(i === 1 )" ref="optSave"></FileSave>

          </v-list-tile-content>
        </v-list-tile>
      </v-list>

</div>

</template>

<script>
import store from '@/store'
import FileLoad from '@/components/FileLoad'
import FileSave from '@/components/FileSave'

export default {
  name: 'MyMenue',
  components: {
    FileLoad: FileLoad,
    FileSave: FileSave,
  },

  data () {
    return {
    //   switch1: true,
      items: [
        { icon: 'input', title: 'Load Start Liste', function: 20 },
        { icon: 'save', title: 'Save Startliste', function: 10 },
      ]
    }
  },
  computed: {
  },
  methods: {
    menueSavePath () {
      this.$refs.optSave[0].saveFile()
    },
    menueLoadPath () {
      this.$refs.optLoad[0].loadFile()
    },
    // Main Menue
    menueFunctions (id) {
      store.state.showDialog = false
      console.log('Enter Menuefunction')
      console.log(id)
      if (id === 10) {        // Tx-1 show hide
        this.menueSavePath()
      } else if (id === 20) { // Delete Tx-1
        this.menueLoadPath()
      } 
    }
  }
}
</script>

<style scoped>
>>>.v-list__group__header__prepend-icon .v-icon {
    color: red;
}
</style>

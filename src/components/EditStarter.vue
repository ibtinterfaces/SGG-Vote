<template>
  <div ref="dialogEdit">
  <!-- <v-row justify="center"> -->
    <!-- <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn> -->

    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>

        <div v-show="flagAdd">
        <v-card-title class="headline">
          Add a starter below the selected one
        </v-card-title>
        </div>

        <div v-show="flagEdit">
        <v-card-title class="headline">
          Edit a starter
        </v-card-title>

        <v-flex shrink px-2>
           <v-text-field
            type="number"
            name="starterNr"
            label="start Nrummer"
            id="starterNr"
            min=0
            max=30
            step=0.1
            maxlength=2
            v-model.lazy="starterNr"
            color="colactive"
          ></v-text-field>
        </v-flex>
        <v-flex shrink px-2>
           <v-text-field
            name="name1"
            label="name1"
            id="name1"
            v-model="name_1"
            color="colactive"
          ></v-text-field>
        </v-flex>
        <v-flex shrink px-2>
           <v-text-field
            name="name2"
            label="name2"
            id="name2"
            v-model="name_2"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <v-flex shrink px-2>
           <v-text-field
            name="name3"
            label="name3"
            id="name3"
            v-model="name_3"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <v-flex shrink px-2>
           <v-text-field
            name="klasse"
            label="klasse"
            id="klasse"
            v-model.lazy="klasse"
            color="colactive"
          ></v-text-field>
        </v-flex>
        <v-flex shrink px-2>
           <v-text-field
            name="alterskl"
            label="alterskl"
            id="alterskl"
            v-model.lazy="alterskl"
            color="colactive"
          ></v-text-field>
        </v-flex>
        <v-flex shrink px-2>
           <v-text-field
            name="type"
            label="type"
            id="type"
            v-model.lazy="type"
            color="colactive"
          ></v-text-field>
        </v-flex>
        <v-flex shrink px-2>
           <v-text-field
            name="routine"
            label="routine"
            id="routine"
            v-model.lazy="routine"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <v-flex shrink px-2>
           <v-text-field
            type="number"
            name="DIFF"
            label="DIFF"
            id="DIFF"
            min=0
            max=30
            step=0.1
            maxlength=2
            v-model.lazy="diff_1"
            color="colactive"
          ></v-text-field>
        </v-flex>



        </div>



        <div v-show="flagDel">
        <v-card-title class="headline">
          Delete a starter
        </v-card-title>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="ok()"
          >
            OK
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="cancel()"
          >
            CANCEL
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  <!-- </v-row> -->
  </div>
</template><script>

import store from '@/store'

export default {

  name: 'EditStarter',
  // data () {
  //   return {
  //     imageName: '',
  //     imageUrl: '',
  //     imageFile: ''

  //   }
  // },
 computed: {
  dialog () {
   return store.state.showEdit
  },
  flagAdd () {
   console.log(store.state.showEditMode) 
   return this.$store.getters.editAdd

  },
  flagDel () {
   console.log(store.state.showEditMode) 
   return this.$store.getters.editDel
  },
  flagEdit () {
   console.log(store.state.showEditMode) 
   return this.$store.getters.editEdit
  },
      starterNr: {
        get () {
          return store.getters.getStarterNr
        },
        set (value) {
          store.commit('update_edit_buffer', {nr: value})
        }
      },
      name_1: {
        get () {
          return store.getters.getName1
        },
        set (value) {
          store.commit('update_edit_buffer', {name1: value})
        }
      },
      name_2: {
        get () {
          return store.getters.getName2
        },
        set (value) {
          store.commit('update_edit_buffer', {name2: value})
        }
      },
      name_3: {
        get () {
          return store.getters.getName3
        },
        set (value) {
          store.commit('update_edit_buffer', {name3: value})
        }
      },
      klasse: {
        get () {
          return store.getters.getKlasse
        },
        set (value) {
          store.commit('update_edit_buffer', {klasse: value})
        }
      },
      alterskl: {
        get () {
          return store.getters.getAlterskl
        },
        set (value) {
          store.commit('update_edit_buffer', {alterskl: value})
        }
      },
      type: {
        get () {
          return store.getters.getType
        },
        set (value) {
          store.commit('update_edit_buffer', {type: value})
        }
      },
      routine: {
        get () {
          return store.getters.getRoutine
        },
        set (value) {
          store.commit('update_edit_buffer', {routine: value})
        }
      },
      diff_1: {
        get () {
          return store.getters.getDiff
        },
        set (value) {
          store.commit('update_edit_buffer', {D: value})
        }
      },
 },
  methods: {
    ok () {
        console.log("OK")
        store.commit('edit_ok')
        store.commit('close_edit')

        //this.$socket.emit('sync_starterlist', store.state.starterList)
        // store.state.showEdit = false
        // store.state.showEditMode = 0
    },
    cancel () {
        console.log("CANCEL")
        store.commit('close_edit')
        // store.state.showEdit = false
        // store.state.showEditMode = 0
    }
  }
//   mounted () {
//     this.bus.$on('LoadNewTrack', this.MypickFile())
//   }
}
</script>

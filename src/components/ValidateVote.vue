<template>
  <div class="validatevote pt-0">
    <p class="display-3">Validate Voting</p>

    <v-container fluid>
      <v-layout row>
        <v-flex shrink px-2>



          <!-- <v-text-field
            type="number"
            name="[n]"
            label="Value"
            id="Value"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="test1"
            color="colactive"
          ></v-text-field> -->

           <v-text-field
            type="number"
            name="Technik"
            label="Technik"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="test2"
            color="colactive"
            v-for="x in 4" v-bind:key="x"
          ></v-text-field>
        </v-flex>
      <!-- </v-layout>

      <v-layout row> -->
        <v-flex shrink px-2>

           <v-text-field
            type="number"
            name="Artistik"
            label="Artistik"
            id="Artistik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="test3"
            color="colactive"
            v-for="x in 4" v-bind:key="x"
          ></v-text-field>
        </v-flex>
 
        <v-flex shrink px-2>
            <v-text-field
            type="number"
            name="DJ"
            label="DJ"
            id="Dj"
            min=0
            max=30
            step=0.1
            maxlength=2
            v-model="test4"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <v-flex shrink px-2>
           <v-text-field
            type="number"
            name="CJP"
            label="CJP"
            id="CJP"
            min=0
            max=30
            step=0.1
            maxlength=2
            v-model="test4"
            color="colactive"
          ></v-text-field>
        </v-flex>

 
 
      </v-layout>
    </v-container>

  </div>
</template>

<script>
// import store from '@/store'

export default {
  name: 'ValidateVote',
  props: {
    // msg: String
    
  },
    data () {
      return {
        test1: 0,
        test2: 0,
        test3: 0,
        test4: 0

      }
    },
    computed: {
    },
    methods: {
    }

}
</script>

<style scoped lang="scss">

</style>

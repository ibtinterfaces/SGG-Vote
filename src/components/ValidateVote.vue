<template>
  <div class="validatevote pt-0">
    <OneAktive></OneAktive>

    <v-container fluid>
    <p class="colapse">Validate Voting</p>
      <v-layout row justify-center>

        <v-flex shrink px-2>
           <v-text-field
            type="number"
            name="Technik"
            label="Technik 1"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="technik_1"
            color="colactive"
            @change="recalc($store.state.mobileWertung[0].technik)"
          ></v-text-field>
        <!-- </v-flex>
        <v-flex shrink px-2> -->
           <v-text-field
            type="number"
            name="Technik"
            label="Technik 2"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="technik_2"
            color="colactive"
          ></v-text-field>
        <!-- </v-flex>
        <v-flex shrink px-2> -->
           <v-text-field
            type="number"
            name="Technik"
            label="Technik 3"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="technik_3"
            color="colactive"
          ></v-text-field>
        <!-- </v-flex>
        <v-flex shrink px-2> -->
           <v-text-field
            type="number"
            name="Technik"
            label="Technik 4"
            id="Technik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="technik_4"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <v-flex shrink px-2>
           <v-text-field
            type="number"
            name="Artistik"
            label="Artistik 1"
            id="Artistik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="artistik_1"
            color="colactive"
          ></v-text-field>
        <!-- </v-flex>
        <v-flex shrink px-2> -->
           <v-text-field
            type="number"
            name="Artistik"
            label="Artistik 2"
            id="Artistik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="artistik_2"
            color="colactive"
          ></v-text-field>
        <!-- </v-flex>
        <v-flex shrink px-2> -->
           <v-text-field
            type="number"
            name="Artistik"
            label="Artistik 3"
            id="Artistik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="artistik_3"
            color="colactive"
          ></v-text-field>
        <!-- </v-flex>
        <v-flex shrink px-2> -->
           <v-text-field
            type="number"
            name="Artistik"
            label="Artistik 4"
            id="Artistik"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="artistik_4"
            color="colactive"
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
            v-model="$store.state.mobileWertung[0].dj"
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
            v-model="$store.state.mobileWertung[0].cjp"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <v-flex shrink px-2 pt-2>
          <v-btn outline color="colactive">Next Vote</v-btn>
        </v-flex>
 
      </v-layout>

    <p class="colapse">Endnote</p>
      <v-layout row justify-center>
        <v-flex shrink px-2>

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
          ></v-text-field>
        </v-flex>

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


        <v-flex shrink px-2 pt-2>
          <v-btn outline color="colactive">Calc Vote</v-btn>
        </v-flex>
 
      </v-layout>

          <v-btn outline color="colactive">Take Vote</v-btn>


    </v-container>

  </div>
</template>

<script>
import store from '@/store'
import OneAktive from '@/components/OneAktive.vue'

export default {
  name: 'ValidateVote',
  components: {
    OneAktive
  },
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
      technik_1: {
        get () {
          return store.state.mobileWertung[0].technik.input[0]
        },
        set (value) {
          store.state.mobileWertung[0].technik.input[0] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      technik_2: {
        get () {
          return store.state.mobileWertung[0].technik.input[1]
        },
        set (value) {
          store.state.mobileWertung[0].technik.input[1] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      technik_3: {
        get () {
          return store.state.mobileWertung[0].technik.input[2]
        },
        set (value) {
          store.state.mobileWertung[0].technik.input[2] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      technik_4: {
        get () {
          return store.state.mobileWertung[0].technik.input[3]
        },
        set (value) {
          store.state.mobileWertung[0].technik.input[3] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      artistik_1: {
        get () {
          return store.state.mobileWertung[0].artistik.input[0]
        },
        set (value) {
          store.state.mobileWertung[0].artistik.input[0] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      artistik_2: {
        get () {
          return store.state.mobileWertung[0].artistik.input[1]
        },
        set (value) {
          store.state.mobileWertung[0].artistik.input[1] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      artistik_3: {
        get () {
          return store.state.mobileWertung[0].artistik.input[2]
        },
        set (value) {
          store.state.mobileWertung[0].artistik.input[2] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      artistik_4: {
        get () {
          return store.state.mobileWertung[0].artistik.input[3]
        },
        set (value) {
          store.state.mobileWertung[0].artistik.input[3] = parseFloat(value)
          console.log('New Technik_1 value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      }
    //   technik1 () { return this.$store.state.mobileWertung.technik[0] },
    //   technik2 () { return this.$store.state.mobileWertung.technik[1] },
    //   technik3 () { return this.$store.state.mobileWertung.technik[2] },
    //   technik4 () { return this.$store.state.mobileWertung.technik[3] }
    },
    methods: {
      getVoteCount (obj) {
        console.log('getVoteCount try to count votes')
        console.log(obj)

        var result = []
        for (var x = 0; x < 4; x++) {
          if (obj[x] !== 0.0) {
            result.push(x)  
          }
        }
        console.log(result)
        return result
      },
      calcAverage (val1, val2) {
         return ((val1 + val2) / 2)
      },
      calcDoubleAverage (val1, val2, val3) {
         return ((((val1 + val2) / 2) + ((val2 + val3) / 2)) / 2)
      },
      calcFairAverage (array) {
        var count = array.length
        var result = 0
        console.log(array)
        array.sort(function(a, b){return a-b})
        console.log(array)
        if(count === 4) {
          result =  ((array[1]+ array[2]) / 2)
        } else if (count === 5) {
          result =  ((array[1] + array[2] + array[3]) / 3)
        } else {
          console.log('This should not happen in function calcFairAverage  :-( ')
          result = 0.0  
        }
        console.log('calcFairAverage Result: ' + result)
        return result
      },
      recalc (obj) {
        var voteCount = []
        var result
        console.log('Recalculate Technik vote')
        voteCount = this.getVoteCount(obj.input)
        console.log('Votecount: ' + voteCount)

        // select calculation methos
        switch(voteCount.length) {
                  
          case 0: // No calculation possible
                  result = 0.0
                  break
          case 1: // No calculation possible
                  result = 0.0
                  break
          case 2: // Average
                  console.log('With two values calculate average')
                  result = this.calcAverage(obj.input[voteCount[0]], obj.input[voteCount[1]])
                  break
          case 3: 
                  // Doppelter arithmetisches mittel
                  console.log('With three values calculate doeble aritmetic average')
                 result = this.calcDoubleAverage(obj.input[voteCount[0]], obj.input[voteCount[1]], obj.input[voteCount[2]])
                 break
          case 4: 
                  // Doppelter arithmetisches mittel
                  console.log('With four values calcuate FairAverage throw max and min then calculate average')
                 result = this.calcFairAverage([obj.input[voteCount[0]], obj.input[voteCount[1]], obj.input[voteCount[2]], obj.input[voteCount[3]]  ])
                 break
          case 5: 
                  // Doppelter arithmetisches mittel
                  console.log('With four values calcuate FairAverage throw max and min then calculate average')
                 result = this.calcFairAverage([obj.input[voteCount[0]], obj.input[voteCount[1]], obj.input[voteCount[2]], obj.input[voteCount[3]], obj.input[voteCount[4]]  ])
                 break

          default:
                  console.log('This should not happen in function recalc  :-( ')
                  // delete low and high rest everage
        }
            // obj.result = result
            console.log('Result: ' + result)
            return true
      },




    }
    // mutations: {
    //   technik:  {
    //     get: function(nr) {
    //       return this.$store.state.mobileWertung.technik[nr]
    //     },
    //     set: function(value, nr) {
    //       this.$store.state.mobileWertung.technik[nr] = value  
    //     }
    //   }

    // }

}
</script>

<style scoped lang="scss">

</style>

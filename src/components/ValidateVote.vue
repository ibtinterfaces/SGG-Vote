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
            id="T1"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="technik_1"
            color="colactive"
            ref="T1"
          ></v-text-field>
        <!-- </v-flex>
        <v-flex shrink px-2> -->
           <v-text-field
            type="number"
            name="Technik"
            label="Technik 2"
            id="T2"
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
            id="T3"
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
            id="T4"
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
            id="A1"
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
            id="A2"
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
            id="A3"
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
            id="A4"
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
            id="D1"
            min=0
            max=30
            step=0.1
            maxlength=2
            v-model="dj_1"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <v-flex shrink px-2>
           <v-text-field
            type="number"
            name="CJP"
            label="CJP"
            id="C1"
            min=0
            max=30
            step=0.1
            maxlength=2
            v-model="cjp_1"
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
            v-model="diff_1"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <!-- <v-flex shrink px-2 pt-2>
          <v-btn outline color="colactive" @click="nextVote">Next Vote</v-btn>
        </v-flex> -->
 
      </v-layout>

    <p class="colapse">Endnote</p>
      <v-layout row justify-center>
        <v-flex shrink px-2>

           <v-text-field
            type="number"
            name="TechnikR"
            label="Technik"
            id="TechnikR"
            min=5
            max=10
            step=0.1
            maxlength=2
            v-model="technik_R"
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
            v-model="$store.state.mobileWertung[0].artistik.result"
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
            v-model="dj_1"
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
            v-model="cjp_1"
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
            v-model="diff_1"
            color="colactive"
          ></v-text-field>
        </v-flex>

        <!-- <v-flex shrink px-2 pt-2>
          <v-btn outline color="colactive" @click="calcResult">Calc Vote</v-btn>
        </v-flex> -->
 
      </v-layout>
      <v-layout row justify-center>
        <v-flex shrink px-2 pt-2>
          <p class="display-1 myResult px-2">{{endNote}}</p>
        </v-flex>

        <v-flex shrink px-2 pt-2>
          <v-btn outline color="colactive" @click="calcResult">Calc Vote</v-btn>
        </v-flex>

        <v-flex shrink px-2 pt-2>
          <v-btn outline color="colactive" @click="takeVote">Take Vote</v-btn>
        </v-flex>

        <v-flex shrink px-2 pt-2>
          <v-btn outline color="colactive" @click="nextVote">Next Vote</v-btn>
        </v-flex>
      </v-layout>

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
      endNote () {
            if ( isNaN(store.state.mobileWertung[0].finalresult)) {
              return '0.000'
            } else {
              return parseFloat(store.state.mobileWertung[0].finalresult).toFixed(3)
            }

      },
      technik_1: {
        get () {
          console.log('Test ' +store.getters.getTechnik1)
          // return store.getters.getTechnik1
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
      technik_R: {
        get () {
          return store.state.mobileWertung[0].technik.result
        },
        set (value) {
          store.state.mobileWertung[0].technik.result = parseFloat(value)
          console.log('New Technik Result_1 value :-)   : ' + value)
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
      },
      // dj_1: {
      //   get () {
      //     return store.state.mobileWertung[0].djresult
      //   },
      //   set (value) {
      //     store.state.mobileWertung[0].djresult = parseFloat(value)
      //     console.log('New DJ value :-)   : ' + value)
      //     // this.$socket.emit('tr_contr', store.state.dataToTracker)
      //   }
      // },
      dj_1: {
        get () {
          return store.state.mobileWertung[0].djresult
        },
        set (value) {
          // store.state.mobileWertung[0].cjpresult = parseFloat(value)
          store.commit('update_dj_r', parseFloat(value))

          console.log('New CJP value :-)   : ' + value)
          // this.$socket.emit('tr_contr', store.state.dataToTracker)
        }
      },
      cjp_1: {
        get () {
          return store.state.mobileWertung[0].cjpresult
        },
        set (value) {
          store.commit('update_cjp_r', parseFloat(value))
          console.log('New CJP value :-)   : ' + value)
        }
      },
      diff_1: {
        get () {
          return store.getters.getDiff
        },
        set (value) {
          store.commit('update_diff_list', value)
          console.log('New DIFF value :-)   : ' + value)
          this.$socket.emit('sync_starterlist', store.state.starterList)

        }
      },
      newTeam () {
        return store.state.orga.aktiveTeam
      }
    //   technik1 () { return this.$store.state.mobileWertung.technik[0] },
    //   technik2 () { return this.$store.state.mobileWertung.technik[1] },
    //   technik3 () { return this.$store.state.mobileWertung.technik[2] },
    //   technik4 () { return this.$store.state.mobileWertung.technik[3] }
    },
    methods: {
      // change to getSortVotes ready to read in array
      getVoteCount (obj) {
        console.log('getVoteCount try to count votes')
        console.log(obj)

        var result = []
        for (var x = 0; x < 4; x++) {
          console.log(obj[x])
          if (!(  (obj[x] === null) || isNaN(obj[x]) || (obj[x] === 0.0) ))  {
          // if (obj[x] !== 0.0) {
            result.push(x)  
          }
        }
        console.log('VotCount pushes array')
        console.log(result)
        return result
      },
      calcAverage (val1, val2) {
         return ((val1 + val2) / 2)
      },
      calcDoubleAverage (val1, val2, val3) {
         return this.calcAverage(this.calcAverage(val1, val2), this.calcAverage (val2, val3))
      },
      calcFairAverage (array) {
        var count = array.length
        var result = 0
        console.log(array)
        // sort array ascading
        array.sort(function(a, b){return a-b})
        console.log(array)
        // Calc average without min and max value
        for(var i = 1; i < count-1; i++) {
          result += array[i]
        }
        result = result / (count-2)
        console.log('calcFairAverage Result: ' + result)
        return result
      },

        partCalc (obj) {
        console.log('##################################')  
        var voteCount = []
        var result = 0
        console.log('Recalculate Technik vote')
        // Generates an array with valid votes 
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
                  // FairAverage throw max and min then calculate average
                  console.log('With four values calcuate FairAverage throw max and min then calculate average')
                 result = this.calcFairAverage([obj.input[voteCount[0]], obj.input[voteCount[1]], obj.input[voteCount[2]], obj.input[voteCount[3]]  ])
                 break
          case 5: 
                  // FairAverage throw max and min then calculate average
                  console.log('With four values calcuate FairAverage throw max and min then calculate average')
                 result = this.calcFairAverage([obj.input[voteCount[0]], obj.input[voteCount[1]], obj.input[voteCount[2]], obj.input[voteCount[3]], obj.input[voteCount[4]]  ])
                 break

          default:
                  console.log('This should not happen in function recalc  :-( ')
                  // delete low and high rest everage
        }
            // obj.result = result
            console.log('Result: ' + result)
            return result
      },
      // Main Vote calculation 
      calcResult () {
        console.log('Enter calcResult')
          var obj = {
              team: 0,
              diff: 0.00,
              technik: 0.0,
              artistik: 0.0,
              dj: 0.0,
              cjp: 0.0,
              final: 0.000
            }

        obj.team =store.state.orga.aktiveTeam  
        obj.diff = parseFloat(store.getters.getDiff)
        console.log('calcResult technik')
        obj.technik = (parseFloat(this.partCalc(store.state.mobileWertung[0].technik)) * 2)
        console.log('calcResult artistik')
        obj.artistik = parseFloat(this.partCalc(store.state.mobileWertung[0].artistik))
        console.log('calcResult artistik')
        obj.dj = parseFloat(store.state.mobileWertung[0].djresult)
        console.log('calcResult artistik')
        obj.cjp = parseFloat(store.state.mobileWertung[0].cjpresult)
        console.log('DEBUG:  calc final result() ')
        console.log('    Diff: ' + obj.diff )
        console.log(' technik: ' + obj.technik )
        console.log('artistik: ' + obj.artistik )
        console.log('      dj: ' + obj.dj )
        console.log('     cjp: ' + obj.cjp )
        obj.result = obj.diff
        console.log('   FINAL: ' + obj.result )
        obj.result += obj.technik
        console.log('   FINAL: ' + obj.result )
        obj.result += obj.artistik
        console.log('   FINAL: ' + obj.result )
        obj.result -= obj.dj
        console.log('   FINAL: ' + obj.result )
        obj.result -= obj.cjp
        console.log('REALFINAL: ' + obj.result )
        
        // console.log(obj)

        store.commit('update_pre_result', obj)

      },
      takeVote () {
        store.commit('update_final_results')
        this.$socket.emit('sync_votedteam',store.state.orga.aktiveTeam)
        this.$socket.emit('sync_final_results',store.state.mobileWertung)
        this.$socket.emit('sync_starterlist', store.state.starterList)



      },
      nextVote () {
        store.commit('clear_mobile_buffer')
      }
    },
    watch: {
      newTeam: function() {
        console.log('Aktive Team CHANGED !!!!!!!!')
        this.$refs.T1.innerHTML = null
        store.state.mobileWertung[0].technik.input[0] = null
        
     }
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
.myResult {
  background-color: #55B883;
}

</style>

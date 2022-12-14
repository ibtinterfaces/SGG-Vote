<template>

  <div class="urkunde">
    <Led line1="" line2="" v-bind:input="kampfgerichtBusy1"></Led>
    <v-btn outline color="colactive" @click="printUrkunde">Print Urkunden</v-btn>
    <RangListe v-bind:urkunde=true></RangListe>

  <div class="print">


  </div>  

  </div>
</template>

<script>

// Timer engine v-show
// x seconds individual score
// x seconds Rangliste 

// import store from '@/store'

import Led from '@/components/Led.vue'
import RangListe from '@/components/RangListe.vue'
import jsPDF from 'jspdf'


export default {
  // name: 'Results',
  components: {
    Led,
    RangListe
  },
  computed: {
    // Drive busy LED on top of result page
    kampfgerichtBusy1 () {
      return this.$store.getters.kg1Busy
    },
  },
  methods: {
    printUrkunde () {
    let pdfName = 'test' 
    var doc = new jsPDF()

    //var imgData = '@/assets/logo.png';
    //doc.addImage(imgData, 'PNG', 0, 0, 180, 160);

    const urkunde = '@/assets/logo.png'
    var myimg = new Image()
    myimg.src = urkunde
    //doc.addImage(myimg, 'PNG', 0, 0, 100, 100)

    doc.text("Hello World", 10, 10)
    doc.save(pdfName + '.pdf')

    }

  },
  
}
</script>

<style scoped lang="scss">

.print {
      //your url will be something like this:
      background-image: src="@/assets/Freesample.svg";
      background-repeat: no-repeat;
      height: 50.5em;
      //<img src="@/assets/logo.png" style="height: 5.5em; float: right;">

    }

</style>

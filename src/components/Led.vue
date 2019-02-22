<template>
<div class="led-box mr-2 mt-1">
 <div class="led ma-0"><v-icon size="55" v-bind:class="ledColor">lens</v-icon></div>
  <p class="body-2 ma-0">{{ line1 }}</p>
  <p class="body-2 ma-0">{{ line2 }}</p>
</div>
</template>

<script>
export default {
  name: 'Led',
  props: {
    line1: String,
    line2: String,
    input: Boolean
  },
  computed: {
    ledColor: function () {
      return {
        'led-green': !this.input,
        'led-red': this.input
      }
    }
  }
}
</script>

<style scoped>
.led-box {
  float: left;
}

p {
  line-height: 1.1;
}

.led-box .led-red {
  /* color: #F00; */
  color: #D50000;
}

.led-box .led-green {
  /* color: #BCE60E; */
  color: #8dc149;
}
</style>

<template>
<div>
  <input
  type="file"
  style="display: none; width: 100px"
  ref="myLoad"
  accept=".json"
  @change="onFilePicked"
  >
</div>
</template>

<script>
// import store from '@/store'

export default {
  name: 'FileLoad',
  data () {
    return {
      fileName: '',
      alert: false

      // imageUrl: '',
      // imageFile: ''
    }
  },
  methods: {
    loadFile () {
      this.$refs.myLoad.click()
    },
    onFilePicked (e) {
      console.log('File selected...')
      const files = e.target.files
      if (files[0] !== undefined) {
        this.fileName = files[0].name
        if (this.fileName.lastIndexOf('.') <= 0) {
          console.log('Fail')
          return
        }
        const fr = new FileReader()
        // fr.readAsDataURL(files[0])
        fr.readAsText(files[0])
        fr.addEventListener('load', () => {
          var recString = fr.result

          console.log('File loaded ready to parse...')
          console.log(recString)
          try {
            var obj = JSON.parse(recString)
            // store.commit('clear_starterlist')
            // store.commit('update_starterlist', obj)
            this.$socket.emit('sync_starterlist', obj)
            console.log(obj)

          } catch (error) {
            this.alert = true
            console.log(error)
            alert('This seems not to be a valid tracker path data file!')
            // return false
          }
        })
      } else {
        this.fileName = ''
        // this.imageFile = ''
        // this.imageUrl = ''
      }
    }
  }
//   mounted () {
//     this.bus.$on('LoadNewTrack', this.MypickFile())
//   }
}
</script>

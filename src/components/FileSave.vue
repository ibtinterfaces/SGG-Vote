<template>
<div>
        <input
        type="file"
        style="display: none; width: 100px"
        ref="mySave"
        accept=".trackdat"
        @change="onFilePicked"
        >
    <!-- </v-flex> -->
</div>
</template>

<script>
import store from '@/store'

export default {
  name: 'FileSave',
  data () {
    return {
      imageName: '',
      imageUrl: '',
      imageFile: ''
    }
  },
  methods: {
    saveFile () {
      try {
        var text = JSON.stringify(store.state.starterList, null, ' ')
      } catch (error) {
        console.log(error)
        // console.log('TryCatch JSON')
      }

      var fileName = 'startliste.json'
      var element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
      element.setAttribute('download', fileName)

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    },
    onFilePicked (e) {
      console.log('File selected...')
      const files = e.target.files
      if (files[0] !== undefined) {
        this.fileName = files[0].name
        console.log(this.fileName)
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
            console.log(obj)
            console.log(obj.file)
            console.log(obj.version)
            // cleanup
            this.fileName = ''
            // return true
          } catch (error) {
            console.log(error)
            // return false
          }
        })
      } else {
        this.fileName = ''
      }
    }
  }
//   mounted () {
//     this.bus.$on('LoadNewTrack', this.MypickFile())
//   }
}
</script>

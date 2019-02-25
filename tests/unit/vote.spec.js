import { expect } from 'chai'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

// import State from './State.vue'
import ValidateVote from '@/components/ValidateVote.vue'
import store from '@/store'
// import storeConfig from '@/store'
// import { cloneDeep } from 'lodash'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)

    // Testcase voting
    var wertungTest1 = [ 
            { // Kampfgericht 1
              technik: {
                input:  [5.1, 6.2, 7.1, 8.1],
                busy: [false, false, false, false],
                result: 0.0
              },
              artistik: {
                input: [5.0, 6.0, 7.0, 8.0],
                busy: [false, false, false, false],
                result: 0.0
              },
              dj: 3.3,
              djBusy: false,
              cjp: 2.2,
              cjpBusy: false,
            }
          ]

describe('Test voting math functions', () => {

    it('ValidateVote component test  calcAverage expect 5', () => {
        const wrapper = shallowMount(ValidateVote, {
            localVue,
            store,
        })
        expect(wrapper.vm.calcAverage(5,5)).equal(5)
      })
    
      it('ValidateVote component test  calcDoubleAverage expect 5', () => {
        const wrapper = shallowMount(ValidateVote, {
            localVue,
            store,
        })
        expect(wrapper.vm.calcDoubleAverage(5,5,5)).equal(5)
      })

      it('ValidateVote component test  calcFairAverage expect 5', () => {
        const wrapper = shallowMount(ValidateVote, {
            localVue,
            store,
        })
        expect(wrapper.vm.calcFairAverage([1, 5, 5, 20])).equal(5)
      })


      it('Calculate technik pre results based on input votes', () => {
        const wrapper = shallowMount(ValidateVote, {
            localVue,
            store,
        })
        // Mock store with testcase       
        wrapper.vm.$store.state.mobileWertung[0] = wertungTest1[0]
        // Run test
        expect(wrapper.vm.partCalc(store.state.mobileWertung[0].technik)).equal(6.65)
      })
    
      it('Calculate artistik pre results based on input votes', () => {
        const wrapper = shallowMount(ValidateVote, {
            localVue,
            store,
        })
        // Mock store with testcase     
        wrapper.vm.$store.state.mobileWertung[0] = wertungTest1[0]
        // Run test
        expect(wrapper.vm.partCalc(store.state.mobileWertung[0].artistik)).equal(6.5)
      })

      it('Test technik calcResult() top function to calculate pre results based on input votes', () => {
        const wrapper = shallowMount(ValidateVote, {
            localVue,
            store,
        })
        // Run method
        wrapper.vm.calcResult()
        expect(wrapper.vm.$store.state.mobileWertung[0].technik.result).equal(6.65)
      })

      it('Test artistik calcResult() top function to calculate pre results based on input votes', () => {
        const wrapper = shallowMount(ValidateVote, {
            localVue,
            store,
                })
        // Mock store        
        wrapper.vm.$store.state.mobileWertung[0] = wertungTest1[0]
        // wrapper.vm.$store.commit('unittest_updat_emobile', wertungTest1)
        // Run method
        wrapper.vm.calcResult()
        //expect(wrapper.vm.$store.state.mobileWertung[0].artistik.result).equal(6.5)
        expect(wrapper.vm.$store.state.mobileWertung[0].artistik.result).equal(6.5)
      })

})





// mocks: {
//     $store: {
//       state: {
//         mobileWertung: [ 
//             { // Kampfgericht 1
//               technik: {
//                 input:  [5.1, 6.2, 7.1, 8.1],
//                 busy: [false, false, false, false],
//                 result: 0.0
//               },
//               artistik: {
//                 input: [5.0, 6.0, 7.0, 8.0],
//                 busy: [false, false, false, false],
//                 result: 0.0
//               },
//               dj: 3.3,
//               djBusy: false,
//               cjp: 2.2,
//               cjpBusy: false,
//             }
//           ]
//         }
//     }
//   }




// import { expect } from 'chai'
// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import Vuetify from 'vuetify'
// import Vuex from 'vuex'
// import ValidateVote from '@/components/ValidateVote.vue'

// describe('ValidateVote', function () {

//     const localVue = createLocalVue()

//     localVue.use(Vuetify)
//     localVue.use(Vuex)

//     const store = new Vuex.Store({ })

//     it('checks calcAverage() methode when passed', () => {
//         const wrapper = shallowMount(ValidateVote, { store, localVue })
//         expect(wrapper.calcAverage(5,5)).equalTo(5)
//         // expect(wrapper.calcAverage(5,5)).to.be(5)
//     })
// })
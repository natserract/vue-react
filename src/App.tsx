import Vue from 'vue'
import { createComponent } from '@vue/composition-api'
import MainConcept from './components/container/main-concepts'
import LifecycleHooks from './components/container/lifecycle-hooks'

import Provider from 'vuejs-redux'
import store from './redux/index'

export default Vue.component('App', {
  render() {
    return (
      <Provider mapStateToProps={this.mapStateToProps} store={this.store}>
        {({ viewData }) => (
          console.log(viewData)
        )}
      </Provider>
    )
  },

  data: () => ({
    store
  }),

  methods: {
    mapStateToProps(state) {
      return {
        viewData: state.user
      }
    }
  },

  components: {
    Provider,
    mainConcept: MainConcept,
    lifecycleHooks: LifecycleHooks
  }
})

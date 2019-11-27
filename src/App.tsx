import Vue from 'vue';
import ContextConsumer from './redux';
import * as actions from './redux/action/user.action';

import MainConcept from './components/container/main-concepts';
import LifecycleHooks from './components/container/lifecycle-hooks';
import SingleComponent from './components/container/single-component';
import ComponentContainer from './components/container/component-wrap';
import ImplementOfHOC from './components/container/usingHOC'

export default Vue.component('App', {
  render() {
    return (
      <ContextConsumer mapStateToProps={this.mapStateToProps} mapDispatchToProps={this.mapDispatchToProps}>
        {({ incrementAction, userData }) => (
          <ComponentContainer>
            <SingleComponent
              value={userData.user}
              handleClick={incrementAction} />
            <MainConcept />
            <LifecycleHooks />
            <ImplementOfHOC/>
          </ComponentContainer>
        )}
      </ContextConsumer>
    )
  },

  components: {
    ContextConsumer
  },

  methods: {
    mapStateToProps(state) {
      return {
        userData: state
      }
    },
    mapDispatchToProps(dispatch) {
      return {
        incrementAction: () => dispatch(actions.increment())
      }
    }
  }
})
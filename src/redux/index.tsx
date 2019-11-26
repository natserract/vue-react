
import Vue from 'vue'
import { createStore } from 'redux'

import Provider from 'vuejs-redux';
import RootReducer from './rootReducer'

const store = createStore(RootReducer);

export default Vue.component('ContextConsumer', {
    render() {
        return (
            <Provider
                mapStateToProps={this.mapStateToProps}
                mapDispatchToProps={this.mapDispatchToProps}
                store={store}>
                {this.$scopedSlots.default}
            </Provider>
        )
    },

    props: ['mapStateToProps', 'mapDispatchToProps'],

    components: {
        Provider
    }
})

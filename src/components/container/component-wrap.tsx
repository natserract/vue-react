
import Vue from 'vue'
import { createComponent } from '@vue/composition-api'

export default Vue.component('ComponentContainer', {
    render() {
        return (
            <main className="wrap">
                {this.$slots.default}
            </main>
        )
    }
})
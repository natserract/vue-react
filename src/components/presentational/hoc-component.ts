
import Vue from 'vue'


type VueAPITypes<T> = T & {
    BasicHOC: (args: T) => void,
    HOCFetch: (args: T) => void
}

const VueAPI: VueAPITypes<JSX.IntrinsicElements> = {
    BasicHOC: (WrappedComponent) => {
        return Vue.component('HigherOrderComponent', {
            render(createElement: any) {
                return createElement(WrappedComponent)
            },
        })
    },
    HOCFetch: (WrappedComponent) => {
        return Vue.component('HOCWithProps', {
            render(createElement: any) {
                return createElement(WrappedComponent)
            },
        })
    }
}

export default VueAPI



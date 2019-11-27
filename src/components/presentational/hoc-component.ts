
import Vue from 'vue'

const useDataFetchingHOC = (WrappedComponent: JSX.IntrinsicElements) => (urlParam: string) => {
    return Vue.component('HOCWithProps', {
        data: () => ({
            fetchData: null
        }),
        mounted: function() {
            fetch(urlParam)
                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) }
                    return response.json() as Promise<any>;
                })
                .then(data => this.fetchData = data)
                .catch((err: Error) => {
                    throw err
                })
        },

        render(createElement) {
            return !this.fetchData ? createElement('span', 'Loading Fetch...') :
                createElement(WrappedComponent, {
                    attrs: this.$attrs,
                    props: this.$props,
                    on: this.$listeners
                })
        }
    })
};

export default useDataFetchingHOC
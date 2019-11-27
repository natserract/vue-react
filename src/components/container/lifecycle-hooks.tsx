import {
    createComponent,
    reactive as useState,
    onBeforeMount as componentWillMount,
    onMounted as componentDidMount,
    onUnmounted as componentWillUnmount,
    watch as useEffect
} from '@vue/composition-api';

const Lifecycle = createComponent({
    setup() {
        const state = useState<{ loading: boolean, users: object }>({
            loading: false,
            users: []
        })

        componentWillMount(() => {
            console.log("Component before mount")
        })

        componentDidMount(() => {
            setTimeout(() => {
                const API_URL = 'https://jsonplaceholder.typicode.com/users'
                fetch(API_URL)
                    .then(res => res.json())
                    .then(data => {
                        state.users = data,
                            state.loading = !state.loading;
                    })
                    .catch(err => {
                        console.log(new Error(err))
                    })
                console.log("Component Mounted")
            }, 1000)
        });

        componentWillUnmount(() => {
            console.log("Component Will Unmount")
        })

        return () => (
            <p>{state.loading ? JSON.stringify(state.users) : <p>Loading...</p>}</p>
        )
    }
})

export const Hooks = createComponent({
    setup() {
        const state = useState<{ count: number }>({
            count: 0
        })

        // Re-run it whenever the dependencies have changed - state.users is dependency
        useEffect(() => state.count, (nextState, prevState) => {
            console.log(nextState, '<= this is nextState')
            console.log(prevState, '<= this is prevState');
        })

        return () => (
            <button onClick={() => state.count++}>
                Update Value
            </button>
        )
    }
})

export default Lifecycle

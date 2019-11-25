import {
    createComponent,
    reactive as useState,
    onBeforeMount as componentWillMount,
    onMounted as componentDidMount,
    onUnmounted as componentWillUnmount,
    watch as useEffect
} from '@vue/composition-api';

const LifecycleHooks = createComponent({
    setup() {
        const state = useState<{ loading: boolean, users: object, count: number }>({
            loading: false,
            users: [],
            count: 0
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

        // re-run it whenever the dependencies have changed - state.users is dependency
        useEffect(() => state.count, (nextState, prevState) => {
            console.log(nextState, '<= this is nextState')
            console.log(prevState, '<= this is prevState');
        })

        return () => (
            <div>
                {/* Fetch data - lifecycle hooks */}
                <p>{!state.loading ? <p>Loading...</p> : JSON.stringify(state.users)}</p>

                {/* Implementation of watch API */}
                <button onClick={() => state.count++}>
                    Update Value
                </button>
            </div>
        )
    }
})

export default LifecycleHooks
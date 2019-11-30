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
            const API_URL = 'https://jsonplaceholder.typicode.com/users'
            fetch(API_URL)
                .then(res => res.json() as Promise<any>)
                .then(data => {
                    state.users = data,
                        state.loading = !state.loading;
                })
                .catch((err: Error) => {
                    throw err
                })
            console.log("Component Mounted")
        });

        componentWillUnmount(() => {
            console.log("Component Will Unmount")
        })

        /* => Re-run it whenever the dependencies have changed */
        useEffect(() => state.count, (nextState, prevState) => {
            console.log(nextState, '<= this is nextState')
            console.log(prevState, '<= this is prevState');
        })

        return () => (
            <div className="lifecycle-hooks">
                {state.loading ? JSON.stringify(state.users) : <span>Loading...</span>}

                <button onClick={() => state.count++}>
                    Update Value
                </button>
            </div>
        )
    }
})

export default LifecycleHooks


type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' };

const Counter = (state: number = 0, action: Action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return state + 1;
        }
        case 'DECREMENT': {
            return state - 1;
        }
        case 'RESET': {
            return state
        }
        default: return state
    }
}

export default Counter
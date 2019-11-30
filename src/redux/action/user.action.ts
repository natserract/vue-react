
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export const increment = () => {
    return { 
        type: INCREMENT 
        // your payload here
    }
}

export const decrement = () => {
    return { 
        type: DECREMENT 
    }
}

export const reset = () => {
    return { 
        type: RESET 
    }
}

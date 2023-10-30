import { DECREMENt, INCREMENT, RESET } from "../Constants/Constants"


export const incrementCounter = () => {
    return {
        type : INCREMENT

    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENt

    }
}

export const resetCounter = () => {
    return {
        type: RESET

    }
}
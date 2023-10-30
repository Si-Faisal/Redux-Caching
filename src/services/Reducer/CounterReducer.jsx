import { DECREMENt, INCREMENT, RESET } from "../Constants/Constants";


const initialCounter = { count : 0 };

const CounterReducer = (state = initialCounter, action) => {
    switch (action.type) {

        
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENt:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };
        default:
           return state;
    }
};

export default CounterReducer; 
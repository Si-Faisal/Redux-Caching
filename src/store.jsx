import { createStore } from "redux";
import CounterReducer from "./services/Reducer/CounterReducer";
// import CounterReducer from "../Reducer/CounterReducer";


const store = createStore(CounterReducer);
export default store;
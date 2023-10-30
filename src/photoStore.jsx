import { applyMiddleware, createStore } from "redux";
import { PhotoApiReducer } from "./API-Services/PhotoApiReducer/PhotoApiReducer";
import thunk from "redux-thunk";


const photoStore = createStore(PhotoApiReducer, applyMiddleware(thunk));

export default photoStore;
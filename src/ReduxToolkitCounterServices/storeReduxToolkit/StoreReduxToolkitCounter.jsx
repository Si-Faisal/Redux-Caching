import { configureStore } from "@reduxjs/toolkit";

import counterReducerReduxToolkit from '../Features/Counter/Counterslice'

const storeReduxToolkitcounter = configureStore({
    reducer: {
        counter: counterReducerReduxToolkit,
    }
});

export default storeReduxToolkitcounter;
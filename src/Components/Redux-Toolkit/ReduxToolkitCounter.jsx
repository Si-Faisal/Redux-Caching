import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncreseFive, decrement, increment, reset } from '../../ReduxToolkitCounterServices/Features/Counter/Counterslice';

const ReduxToolkitCounter = () => {

    const count = useSelector((state) => state.counter.count);
    // console.log(count);

    const dispatch = useDispatch();

     const handleValueChange = (action) => {
        if (action === 'increment') {
            dispatch(increment());
        } else if (action === 'decrement') {
            dispatch(decrement());
        } else if (action === 'reset') {
            dispatch(reset());
        }else if (action === 'increaseFive') {
            dispatch(IncreseFive(5));
        }
    }



    return (
        <div>
            <h2>Using Redux Toolkit...</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => handleValueChange('increment')}>Increment</button>
            <button onClick={() => handleValueChange('decrement')}>Decrement</button>
            <button onClick={() => handleValueChange('reset')}>Reset</button>
            <button onClick={() => handleValueChange('increaseFive')}>Increase By 5</button>
        </div>
    );
};

export default ReduxToolkitCounter;
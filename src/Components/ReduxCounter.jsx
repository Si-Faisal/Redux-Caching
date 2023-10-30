import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/Action/CounterAction';

const ReduxCounter = () => {
  
    const count = useSelector(state => state.count);
    console.log(count);
    const dispatch = useDispatch();

    const handleValueChange = (action) => {
        if (action === 'increment') {
            dispatch(incrementCounter());
        } else if (action === 'decrement') {
            dispatch(decrementCounter());
        } else if (action === 'reset') {
            dispatch(resetCounter());
        }
    }



    return (
        <div>
            <h2>Using React- Redux</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => handleValueChange('increment')}>Increment</button>
            <button onClick={() => handleValueChange('decrement')}>Decrement</button>
            <button onClick={() => handleValueChange('reset')}>Reset</button>
        </div>
    );
};

export default ReduxCounter;
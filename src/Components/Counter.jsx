import React, { useState } from 'react';

const Counter = () => {

    const [count,setCount] = useState(0)
    
    const handleValueChange = (action) => {
        if (action === 'increment') {
            setCount(count + 1);
        } else if (action === 'decrement') {
            setCount(count - 1);
        } else if (action === 'reset') {
            setCount(0);
        }
    }
    return (
        <div>
            <h2>Using React </h2>
            <h3>Count: { count}</h3>
            <button onClick={() => handleValueChange('increment')}>Increment</button>
            <button onClick={() => handleValueChange('decrement')}>Decrement</button>
            <button onClick={() => handleValueChange('reset')}>Reset</button>
        </div>
    );
};

export default Counter;
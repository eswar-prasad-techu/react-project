import React from 'react';
import useCount from './Components/props/useCount';

const Data = () => {
const{increment,decrement,increaseBy5,decreaseBy5,count,increaseCount} = useCount()

 return (
        <div>
{count}
            <button onClick={increment}>Increment</button>
            <button onClick={()=>increaseCount(2)}>Increment by 2</button>


        </div>
    );
};

export default Data;
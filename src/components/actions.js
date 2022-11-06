import {Alert} from 'react';
import {initial, Filter, useCounter} from './counter'



const handleSet = () => {
    const data = Prompt('Please enter a number not greater than 5000, or else...')
    //dispatch({type: 'SET', })
};

export { handleAdd, handleReset, handleSet, handleSub}
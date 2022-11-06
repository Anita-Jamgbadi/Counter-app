import {React, useReducer} from 'react'
import { initial, useCounter } from './counter'
import './display.css'


// This function displays the counter on the DOM
// and holds the logic behind the useReducer hook

function Display() {
    //Invoke useReducer on the useCounter function 
    const [state, dispatch] = useReducer(useCounter, initial);

    //handles addition 
    const handleAdd = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD'})
    };
    
    //handles subtraction
    const handleSub = (event) => {
        event.preventDefault()
        dispatch({type: 'SUB'})
    };
    
    //handles setValue
    const handleSet = (event) => {
        event.preventDefault();

        //prompts user for data input
        const data = prompt('Please enter a number not greater than 5000, or else...')
        
        //converts data entered into a number
        const number = parseInt(data, 10)
        
        //Controls the addition and subtraction boundary
        if (data >= 0 && data <= 5000) {
            dispatch({type: 'SET', payload: number})
        }
        //What to do if the user enters alphanumeric data
        else if (isNaN(data)){
            throw new Error('The value you entered is not a number!')
            //alert('The value you entered is not a number!')
        }
        //What to do if the user enters a figure over 5000
        else {
            alert('You cannot count over 5000...')
        }
    };

    //Handles reset (to 0)
    const handleReset = (event) => {
        event.preventDefault()
        dispatch({type: 'RESET'})
    };

    return (
        <div className='container'>

            <div className='number-display'>{state}</div>
            
            <div className='inner-container'>
                <div className='increment'>
                    <button className='btn' onClick={handleAdd}>+</button>
                </div>
                <div className='decrement'>
                    <button className='btn' onClick={handleSub}>-</button>
                </div>
                <div className='set-number'>
                    <button className='btn' onClick={handleSet}>Set</button>
                </div>
                <div className='reset-number'>
                    <button className='btn' onClick={handleReset}>Reset</button>
                </div>
            </div>

        </div>
    )
}

export default Display;
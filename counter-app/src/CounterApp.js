import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter,setCounter] = useState(0);
    
    const sumar = () =>{
        setCounter(counter + 1 );
    }

    const restar = () =>{
        setCounter(counter - 1);
    }

    const reset = () =>{
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick = { sumar }>+1</button>
            <button onClick = { restar } class="resta">-1</button>
            <button onClick = { reset } class="reset">Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp

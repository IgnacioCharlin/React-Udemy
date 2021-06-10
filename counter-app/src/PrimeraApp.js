// Functional component
import React from 'react';
import PropTypes from 'prop-types';


//props sirve para pasar propiedades al componente
const PrimeraApp = ( {nombre, edad} ) =>{
    //const nombre = "Ignacio";
    //const años = 25;

    return <>
                <h1>Hola { nombre }</h1>
                <p>Edad : { edad }</p>
            </>

}

PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

export default PrimeraApp;
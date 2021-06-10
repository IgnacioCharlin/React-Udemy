import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './css/estilo.css';
import CounterApp from './CounterApp';



const divRoot = document.querySelector("#app");

//ReactDOM.render(<PrimeraApp saludo = {123}/> , divRoot);
//ReactDOM.render(<PrimeraApp nombre = "ignacio" edad={25} /> , divRoot);

ReactDOM.render(<CounterApp value={10} />,divRoot);
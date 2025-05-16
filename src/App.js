import './css/App.css'
import React from 'react';
import Form from './components/Form'
import city from './img/city.jpeg'

function App() { 
 return (<div>
 <Form />
 <Form info="Впишіть дані 2" />
 <img src={city} />
 </div>)
}

export default App;
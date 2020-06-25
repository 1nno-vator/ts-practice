import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';

function App() {
  const clickEvent = (name: string) => {
    alert(`${name} 하이하이`);
  }
  const submitEvent = (form: {name:string; description:string; }) => {
    console.log(form);
  }
  return (
    <MyForm onSubmit={submitEvent}/>
    // <Counter/>
    // <Greetings name={'kms'} optional={'hello'} onClick={clickEvent}/>  
  );
}

export default App;

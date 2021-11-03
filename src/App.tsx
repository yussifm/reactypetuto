import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Button  from './component/Button';

function App() {
  return (
    <>
      <h1>Components</h1>
      <Button type="primary">Primary</Button>
      <Button type='default'>Normal</Button>
       <Button type='secondary'>secondary</Button>
    </>
  );
}

export default App;

import React from 'react';

import './App.css';
import {Greet} from './component/Greet'

import Welcome from './component/welcome'

function App() {
  return (
    <div className="App">
   <Greet/>
   <Welcome />
    </div>
  );
}

export default App;

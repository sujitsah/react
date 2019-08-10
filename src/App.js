import React from 'react';

import './App.css';
import Greet from './component/Greet'

import Welcome from './component/welcome'
import Message from './component/message'

function App() {
  return (
    <div className="App">
   {/* <Greet name = 'sujit'/>
   <Welcome name = 'bruce'/>
   <Welcome name = 'sujit'/> */}

   <Message />
    </div>
  );
}

export default App;

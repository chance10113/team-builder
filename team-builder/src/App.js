import './App.css';
import React, { useState, useEffect } from 'react'
import TeamBuildForm from './Form'
import axios from "./FakeData"
const initialFromValues = { name: '', email: '', role: ''}

function App() {
  const [ teamList, setTeamList ] = useState([])
  const [formValues, setFormValues] = useState(initialFromValues)
  return (
    <div>
      {teamList}
    </div>
    
    );
  }
  
  export default App;
  
  
  
  
  // GARBAGE that came with this.
  // import logo from './logo.svg';
 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
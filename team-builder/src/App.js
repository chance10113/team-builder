import './App.css';
import React, { useState } from 'react'
import Form from './Components/Form'

const initialFormValues = { name:"", email:"", role:"" } ;

function App() {
  const [teamList, setTeamList] = useState();
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  };
  
  
  return (
    <div>
      <h1> Descriptive Page Title</h1>

      <Form
        values={formValues}
         update={updateForm}
        // submit={submitForm}
        />
    </div>
    );
  }
  
  export default App;
  




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
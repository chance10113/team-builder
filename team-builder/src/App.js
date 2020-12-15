import './App.css';
import React, { useState, useEffect } from 'react'
import TeamBuildForm from './componets/Form'
import data from './FakeData'
import TeamMate from './componets/TeamMate'
const initialFromValues = { name: '', email: '', role: ''}

function App() {
  const [ teamList, setTeamList ] = useState(data)
  const [formValues, setFormValues] = useState(initialFromValues)
  return (
    <div>
      <h1> This is where the stuff is displaying </h1>

      {/* <TeamBuildForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
        /> */}

        {teamList.map((teamMate) => {
          return <TeamMate key={teamMate.id} details={teamMate} />
        })}
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
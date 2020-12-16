import "./App.css";
import React, { useState, useEffect } from "react";
import TeamBuildForm from "./componets/Form";
import teamData from "./FakeData";
import TeamMate from "./componets/TeamMate";
const initialFormValues = { name: "", email: "", role: "" };

function App() {
  const [teamList, setTeamList] = useState(teamData);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const teamMate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!teamMate.username || !teamMate.email || !teamMate.roll) return

    teamData.post('FakeData', teamMate)
    .then((res) => {
      setTeamList([teamMate, ...teamList])
      setFormValues(initialFormValues)
    })
    .catch((beef) =>{
      console.log('Something Broke!', beef)
    } )

    // useEffect(() => {
    //   teamData.length('FakeData').then((res) => setTeamList(res.data));
    // }, [] )

  };

 


  return (
    <div>
      <h1> This is where the stuff is displaying </h1>

      <TeamBuildForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {teamList.map((teamMate) => {
        return <TeamMate key={teamMate.id} details={teamMate} />;
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

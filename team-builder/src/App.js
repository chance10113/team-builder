import "./App.css";
import React, { useState } from "react";
import TeamBuildForm from "./Components/Form";
import teamData from "./FakeTeamData";
import TeamMate from "./Components/TeamProto";
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

    if (!teamMate.username || !teamMate.email || !teamMate.roll) return;

    teamData
      .post("FakeData", teamMate)
      .then((res) => {
        setTeamList([teamMate, ...teamList]);
        setFormValues(initialFormValues);
      })
      .catch((beef) => {
        console.log("Something Broke!", beef);
      });
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

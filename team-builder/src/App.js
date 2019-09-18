import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TeamList from "./components/TeamList";

function App() {
  const [team, setTeam] = useState([
    { name: "Patrick", email: "stevenson@patrick.ai", role: "Chief" }
  ]);
  const addTeamMember = member => {
    setTeam([...team, member]);
  };
  return (
    <div className="App">
      <Form addTeamMember={addTeamMember} />
      <TeamList team={team} />
    </div>
  );
}

export default App;

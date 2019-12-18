import React, { useState } from 'react';
import './App.css';
import team from './data';
import TeamMember from './Components/TeamMember';


// 1. import useState and set up state property for team members

function App() {
  //set up useState with an array of what details will change
  //add example text now but remove later
  const [teamMember, setTeamMember] = useState(team)


  return (
    <div className="App">
      <h2>Our Team</h2>
      <TeamMember />      
    </div>
  );
}

export default App;

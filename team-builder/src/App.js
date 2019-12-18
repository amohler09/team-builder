import React, { useState } from 'react';
import './App.css';
import TeamMember from './Components/TeamMember';
import Form from './Components/Form';


//import useState and set up state property for team members

function App() {
  //set up useState with an array of what details will change
  //add example text now but remove later
  const [members, setMembers] = useState({id: '', email: '', role: ''})


  return (
    <div className="App">
      <h2>Our Team</h2>
      <Form />
      <TeamMember />      
    </div>
  );
}

export default App;

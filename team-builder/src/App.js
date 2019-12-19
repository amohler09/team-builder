import React, { useState } from 'react';
import './App.css';
import TeamMember from './Components/TeamMember';
import Form from './Components/Form';




//import useState and set up state property for team members

function App() {
  //set up useState with an array of what details will change
  //add example text now but remove later
  const [members, setMembers] = useState([{
    id: '1',
    name: 'Michael Scott',
    email: 'mscott@dundermifflin.com',
    role: 'Regional Manager'
},

{
    id: '2',
    name: 'Dwight Schrute',
    email: 'dschrute@dundermifflin.com',
    role: 'Top Salesman'
},

{
    id: '3',
    name: 'Jim Halpert',
    email: 'jhalpert@dundermifflin.com',
    role: 'Sales Representative'
},

{
    id: '4',
    name: 'Pam Beesly',
    email: 'pbeesly@dundermifflin.com',
    role: 'Receptionist'
},

{
    id: '5',
    name: 'Ryan Howard',
    email: 'rhoward@dundermifflin.com',
    role: 'Sales Representative'
},

{
    id: '6',
    name: 'Andy Bernard',
    email: 'abernard@dundermifflin.com',
    role: 'Regional Director of Sales, Stand in Regional Manager'
},

{
    id: '7',
    name: 'Stanley Hudson',
    email: 'shudson@dundermifflin.com',
    role: 'Sales Representative'
},

{
    id: '8',
    name: 'Kevin Malone',
    email: 'leavememalone@dundermifflin.com',
    role: 'Accountant'
},

{
    id: '9',
    name: 'Meridith Palmer',
    email: 'mpalmer@dundermifflin.com',
    role: 'Supplier Relations'
},

{
    id: '10',
    name: 'Angela Martin',
    email: 'amartin@dundermifflin.com',
    role: 'Head of Accounting'
},

{
    id: '11',
    name: 'Oscar Martinez',
    email: 'omartinez@dundermifflin.com',
    role: 'Accountant'
},

{
    id: '12',
    name: 'Phyllis Lapin',
    email: 'plapin@dundermifflin.com',
    role: 'Sales Representative'
}])


  //set a variable addNewTeamMember to a function which will create a new member
  //set a variable to what will be the NEW team member
  //use setMember with spread operator to set new members
const addNewTeamMember = member => {
  const newMember = {
    id: member.id,
    name: member.name,
    email: member.email,
    role: member.role
    
  };
  setMembers([...members, newMember]);
};

  return (
    <div className="App">
      <h2>Our Team</h2>
      <Form addNewTeamMember={addNewTeamMember}/>
      <TeamMember members={members}/>      
    </div>
  );
}

export default App;

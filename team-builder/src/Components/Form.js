import React, { useState } from 'react';

const Form = props => {
    //console.log('these are the props', props)

    //set a useState object that addresses all inputs
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });


    //use the state from above to set an event for what happens once input has been used
    //when targeting something, we need the VALUE from it
    //set an event that handles changes... use that computed property thing..check Christina's notes
    //[event.target.name]...capturing the name attribute & resetting the values
    const handleChanges = event => {
        setTeamMember({...teamMember, [event.target.name] : event.target.value})
    
    console.log('values', event.target.value);
     //event.target.value are the values typed into the form
    };


    //add a prevent default to stop page from refreshing
    //add a new team member with function created in app.js
    //set useState to be empty strings once submitted
    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({name: '', email: '', role: ''})
    }

    return(
        <form onSubmit={submitForm}>
            <h4>Add A New Team Member!</h4>
            <label htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            placeholder='name'
            onChange={handleChanges}
            //handleChanges is the function created above
            value={teamMember.name}
            //value is coming from the useState above
            /><br />
            <label htmlFor='email'>Email</label>
            <input
            id='email'
            type='text'
            placeholder='email'
            onChange={handleChanges}
            value={teamMember.email}
            /><br />
            <label htmlFor='role'>Role</label>
            <input
            id='role'
            type='text'
            placeholder='role'
            onChange={handleChanges}
            value={teamMember.role}
            /><br />
            <button type='submit'>Add Member!</button>
        </form>
    )
}

export default Form;
import React, { useState } from 'react';

const Form = props => {
    console.log('these are the props', props)

    //set a useState object that addresses all inputs
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    return(
        <form>
            <h4>Add A New Team Member!</h4>
            <label htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            placeholder='name'
            //value={teamMember.name}
            /><br />
            <label htmlFor='email'>Email</label>
            <input
            id='email'
            type='text'
            placeholder='email'
            //value={teamMember.email}
            /><br />
            <label htmlFor='role'>Role</label>
            <input
            id='role'
            type='text'
            placeholder='role'
            //value={teamMember.role}
            /><br />
            <button type='submit'>Add Member!</button>
        </form>
    )
}

export default Form;
import React from 'react';



//there is no state here or any props being passed down

const TeamMember = props => {
    
    return(
        <div className='team-list'>
            {props.members.map(member => (
                <div className='member' key={member.id}>
                <h3>Name: {member.name}</h3>
                <p>Position: {member.role}</p>
                <p>Email: {member.email}</p>
                </div>
            ))}

        </div>
    )
}

export default TeamMember;
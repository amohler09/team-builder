import React from 'react';
import team from '../data';




const TeamMember = props => {
    
    return(
        <div className='team-list'>
            {team.map(member => (
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
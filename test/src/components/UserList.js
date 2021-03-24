import React from 'react';

const UserList = ({users}) => {
    console.log(users);
    return (
        <div>
            {users.map((user)=>(
                <div key={user.id}>{user.login}</div>
            ))}
        </div>
    );
};

export default UserList;
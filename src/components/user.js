import React from "react";
import UserCard from "./users";


const User = props => {

    return (<div className="card-container">

        <UserCard data={props.users} />
        {/* {
            props.users.map(() => {
                return <div><UserCard users={props.users} /></div>
            })
        } */}
    </div>)
}

export default User
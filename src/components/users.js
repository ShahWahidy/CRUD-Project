import React, { useState } from "react";
import UserPosts from "./posts";
import { Card, CardBody, CardTitle } from "reactstrap";
import { FaPhoneAlt, FaUserAlt, FaEnvelope } from "react-icons/fa";


const UserCard = (props) => {
  
  const [loadPosts,  setLoadPosts] = useState(true)
  
  return (<div className="userCard">

    {
      props.data.map((user, idx) => {
        return <Card
          style={{
            width: '25rem',
            padding: '15px'
          }}
        >
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
          />
          <CardBody >
            <CardTitle tag="h5" >
              <FaUserAlt /><span> | </span>{user.username}
            </CardTitle>
            <CardTitle tag="h5" >
              <FaEnvelope/><span> | </span>{user.email}
            </CardTitle>
            <CardTitle tag="h5" >
              <FaPhoneAlt/><span> | </span>{user.phone}
            </CardTitle>
            {
              loadPosts && <UserPosts userId={user.id}/>
            }
          </CardBody>
        </Card>
      })
    }


  </div>
  )
}

export default UserCard;


//test codes
// different way of pulling information
{/* <CardTitle tag="h5" >
<FaUserAlt /><span> | </span>{props.data[idx].username}
</CardTitle>
<CardTitle tag="h5" >
<FaEnvelope/><span> | </span>{props.data[idx].email}
</CardTitle>
<CardTitle tag="h5" >
<FaPhoneAlt/><span> | </span>{props.data[idx].phone} */}
 // console.log(props)
  //const userArray = [...props.data]
  // const handleClick = e => {
  //   e.preventDefault()
  //   setLoadPosts(displayPosts => !displayPosts)
  // }

  // userArray.map((user, ele) => {
  //   console.log(userArray[ele].username);
  // })
// {/* <Button onClick={handleClick} color="primary">
//               Get Posts
// </Button> */}
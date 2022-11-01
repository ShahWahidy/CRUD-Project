import React, { useState } from "react";
import UserPosts from "./posts";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import { FaPhoneAlt, FaUserAlt, FaEnvelope } from "react-icons/fa";


const UserCard = (props) => {
  
  const [loadPosts,  setLoadPosts] = useState(true)
  
  return (<div className="userCard">

    {
      props.data.map((username, idx) => {
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
              <FaUserAlt /><span> | </span>{props.data[idx].username}
            </CardTitle>
            <CardTitle tag="h5" >
              <FaEnvelope/><span> | </span>{props.data[idx].email}
            </CardTitle>
            <CardTitle tag="h5" >
              <FaPhoneAlt/><span> | </span>{props.data[idx].phone}
            </CardTitle>
            {
              loadPosts && <UserPosts/>
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
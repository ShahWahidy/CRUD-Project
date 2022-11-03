import React, { useState } from 'react'
import { Button, Form, Input } from 'reactstrap'


const SearchBar = (props) => {

 const [searchInput, setSearchInput] = useState([]);

 let usersArr = []

 props.users.map((user) => usersArr.push(user.name));


const handleChange = (e) => {
  setSearchInput(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault()
  if(usersArr.includes(searchInput)) {
    console.log('its working');
  } else {
    console.log('its not working');
  }
  
}


return (<div className='search-bar-container'>
  <div className='search-bar'> 
    <Form onSubmit={handleSubmit}>
      <Input placeholder='search users...'
        onChange={handleChange}
        value={searchInput}
      />
      <Button color='primary'>Search</Button>
    </Form> 
  </div>
</div>)


};

export default SearchBar;
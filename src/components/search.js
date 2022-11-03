import React, { useState, useEffect } from 'react'
import { Form, Input } from 'reactstrap'
import { FaSistrix } from "react-icons/fa";


const SearchBar = (props) => {

 const [searchInput, setSearchInput] = useState([]);


useEffect(() => {
  props.setFoundUsers(props.users.filter(u => u.name.includes(searchInput)))

}, [searchInput])

const handleChange = (e) => {
  setSearchInput(e.target.value);
  console.log(props.users);
};



return (<div className='search-bar-container'>
  <div className='search-bar'> 
    <Form >
      <Input placeholder='search users...'
        onChange={handleChange}
        value={searchInput}
      />
      <FaSistrix size={40}/>
    </Form> 
  </div>
</div>)


};

export default SearchBar;
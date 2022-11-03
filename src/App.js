import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import User from './components/user';
import SearchBar from './components/search';

function App() {
  const [users, setUsers] = useState([])
  const [foundUsers, setFoundUsers] = useState([])

  useEffect(() => {
      const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          //console.log('after promise', res.data);
          setUsers(res.data);
          //console.log('after setUsers', users);
        })
        .catch(err => {
          console.log(err);
        })
      }
      fetchData();
  }, [])
  console.log(foundUsers);
  return (
    <div className="App">
    <SearchBar users={users} setFoundUsers={setFoundUsers}/>
    <User users={foundUsers.length ? foundUsers : users} />
    </div>
  );
}

export default App;

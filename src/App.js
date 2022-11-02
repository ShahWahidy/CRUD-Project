import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import User from './components/user';
import SearchBar from './components/search';
import data from './dumyData';

function App() {
  const [users, setUsers] = useState([])

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

  return (
    <div className="App">
    {/* <SearchBar /> */}
    <User users={users} />
    </div>
  );
}

export default App;

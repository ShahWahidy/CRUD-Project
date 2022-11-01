import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import User from './components/user';
import data from './dumyData';

function App() {
  const [users, setUsers] = useState(data)

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
      <h1>Hello its working</h1>

    <User users={users} />
    </div>
  );
}

export default App;

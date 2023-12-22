import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Components/Home';
import axios from 'axios';
import User from './Components/User';
function App() {
  const [users, setUsers] = useState([])
  const [alert, setAlert] = useState({})


  async function HitAPI() {
    try {
      const url = `https://api.github.com/users`
      let res = await axios.get(url)
      // console.log(res.data)
      setUsers(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  function searchAPI(user) {
    if (user.trim().length == 0) {
      // setAlert(true)
      showAlert({ type: "error", msg: "ENTER THE USER" })
    }
    const url = `https://api.github.com/search/users?q=${user}`
    axios.get(url)
      .then((res) => {
        console.log(res.data.items)
        setUsers(res.data.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    HitAPI()
  }, [])

  function clear() {
    setUsers([])
  }

  function showAlert(payload) {
    setAlert(payload)
    setTimeout(() => {
      setAlert({})
    }, 1500);
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Home users={users} searchAPI={searchAPI} clear={clear} alert={alert} />} />
        <Route path="/User/:userName" element={<User />} />
      </Routes>
    </>
  );
}

export default App;

import React from 'react'
import { useParams } from 'react-router-dom'

function UserName() {
    let {username} = useParams();
  return (
    <h1>{username}</h1>
  )
}

export default UserName
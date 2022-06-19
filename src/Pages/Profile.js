import React from 'react'

import { useParams } from "react-router-dom";

const Profile = () => {
  let {username} = useParams();
  return (
    <div>Profile of {username}</div>
  )
}

export default Profile
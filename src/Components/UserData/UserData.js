import React from 'react'
import "./UserData.scss"

const UserData = ({ Dato }) => {
  return (

    <div className="UserDataBig">
        
        <input type="text" placeholder={Dato} />

    </div>
  )
}

export default UserData
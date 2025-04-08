import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({id,email,avatar}) => {

  const navigate = useNavigate();

  return (
    <>
    <div onClick={()=>navigate(`/user/${id}`)}>
      <div>Card for {email}</div>

      <img src={avatar}/>
    </div>
    </>
    
  )
}

export default Card
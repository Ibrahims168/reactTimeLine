import React from 'react'
import './style.css'

const header = (props) => {
    const {user} = props 
  return (
    <div className='Header'>header - {user} </div>
  )
}

export default header
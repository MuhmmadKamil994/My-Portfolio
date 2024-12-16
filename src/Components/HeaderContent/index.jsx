import React from 'react'
import './style.scss'
const HeaderContent = (props) => {
    // const {title,icon}=props

  return (
    <div className='wrapper'>
      <h2>{props.title}</h2>
      <span>{props.icon}</span>
    </div>
  ) 
}

export default HeaderContent;

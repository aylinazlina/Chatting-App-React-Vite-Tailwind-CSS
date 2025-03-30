import React from 'react'

const Button = ({design,type,onClick,content}) => {
  return (
    <div>

        <button className={design} type={type} onClick={onClick}>{content}</button>
      
    </div>
  )
}

export default Button

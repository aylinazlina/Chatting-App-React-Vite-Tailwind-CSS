import React from 'react'

const Button = ({design,onClick,content}) => {
  return (
    <div>

        <button className={design} onClick={onClick}>{content}</button>
      
    </div>
  )
}

export default Button

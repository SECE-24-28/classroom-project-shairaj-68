import React from 'react'
const Content = ({frnds}) => {
  return (                  
    <ul>
      {
      frnds.map((val,index) => (
        <li key={index}>{val}</li>
      ))
      }
      </ul>
  )
}
export default Content
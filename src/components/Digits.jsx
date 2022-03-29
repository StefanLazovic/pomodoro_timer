import React from 'react'

const Digits = (props) => {
   const { number } = props

   return (
      <div className="digits">
         <p>{number < 10 && 0}{number}</p>
      </div>
   )
}

export default Digits
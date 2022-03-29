import React from 'react'

const Button = ({ start, disabled }) => {
   return (
      <>
         <button
            onClick={start} 
            disabled={disabled}
         >
         START
         </button>
      </>
   )
}

export default Button
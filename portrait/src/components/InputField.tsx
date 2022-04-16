import React from 'react'
import './styles.css'


const InputField = () => {
  return (
    <form className='input'>
      <input
      type='input'
      placeholder='Search A Planet'
      className='input__box'
      />
      <button className='input_submit' type='submit'>
        GO
      </button>

    </form>

  )
}

export default InputField

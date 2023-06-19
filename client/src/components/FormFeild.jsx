import React from 'react'

const FormFeild = ({ LabelName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
        >
        {LabelName}
        </label>
        {isSupriseMe && (
          <button type='button'
            click={handleSupriseMe}
            className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise Me
          </button>
        )}

        <div>
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className='bg-gray-50 broder border-gray-300 text-gray-900 text-sm rounded-lg py-2 focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
          />
        </div>
      </div>
    </div>
  )
}

export default FormFeild
import React from 'react'

export default function Searchbox({placeholder,handleChange}) {
  return (
    <div>
      <div className="flex justify-around h-12">
        <input type="text" className='h-10 m-2 p-2 border-solid border-2 border-indigo-600' placeholder={placeholder} onChange={handleChange}  />
      </div>
    </div>
  )
}

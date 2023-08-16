import React from 'react'

export default function Card(props) {
  return (
    <div className="bg-green-100 w-60 p-5 m-5  hover:w-64 hover:m-1 border-double border-4 border-green-600">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="" />
      <h1 className='font-bold p-1'>{props.monster.name}</h1>
      <p className="p-3">
        {props.monster.email}
      </p>
    </div>
  )
}

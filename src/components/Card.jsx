import React from 'react'

export default function Card({title, icon , description ,color}) {
  return (
    <div className='w-80 h-96' style={{ backgroundColor: color }}>
        <img src={icon} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <button className='p-2 border-solid border-2 border-indigo-600 rounded-full py-3 px-8 ' style={{ backgroundColor:"white", color:color }}>Learn more</button>
    </div>
  )
}

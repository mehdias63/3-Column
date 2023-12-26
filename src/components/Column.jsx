import React from 'react'
import Card from './Card'
import data from './data'


export default function Column() {
  return (
    <div>
        {data.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.icon}
              color={card.color}
            />
          ))}
    </div>
  )
}

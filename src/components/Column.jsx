import React from "react";
import Card from "./Card";
import data from "./data";

export default function Column() {
  return (
    <div className="flex flex-col items-center my-2 justify-center md:flex-row md:h-screen">
      {data.map((card , i) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}

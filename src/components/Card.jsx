import React from "react";

export default function Card({ title, icon, description, color }) {
  return (
    <div
      className="count w-80 h-[25em] p-10 text-white md:p-10 md:w-[19.1875rem] md:h-[31em]"
      style={{ backgroundColor: color }}
    >
      <img src={icon} alt={title} />
      <h1 className="font-big font-bold text-[2.5rem] uppercase mt-5 md:mt-8">{title}</h1>
      <p className="font-lexend font-normal text-[0.9375rem] mt-4 tracking-widest">
        {description}
      </p> 
      <button
      style={{ backgroundColor: "white", color: color }}
        className="p-2 rounded-full py-3 px-8 font-lexend font-normal text-[0.9375rem] mt-5 hover:!bg-inherit hover:!text-white  hover:border-solid hover:border-2 hover:border-white hover:transition-all md:ml-3 md:mt-20 "
        
      >
        Learn more
      </button>
    </div>
  );
}

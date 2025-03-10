import React from "react";

const Savedplayer = ({ player }) => {
  const { name, image, category, country } = player;
  return (
      <div className="flex gap-5 justify-between items-center  mb-3 px-8 bg-slate-200 rounded-md">
        <img className="w-36 px-2 py-2 rounded-lg" src={image} alt="" />
        <h1 className="font-bold text-2xl">{name}</h1>
        <h1>{category}</h1>
        <h1>{country}</h1>
      </div>

  );
};

export default Savedplayer;

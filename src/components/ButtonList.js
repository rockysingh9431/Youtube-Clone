import React from "react";

const ButtonList = () => {
  const btnList = [
    "All",
    "Music",
    "Mixes",
    "Live",
    "News",
    "Debates",
    "Bhojpuri Cinema",
    "Ram Janmbhoomi",
    "Gaming",
    "JavaScript",
  ];
  return (
    <div className="flex flex-wrap fixed w-full top-14 bg-white z-10">
      {btnList.map((item,index)=>{
        return (
          <div key={index} className="p-1 px-3 bg-slate-200 rounded-md m-2">{item}</div>
        );
      })}
    </div>
  )
};

export default ButtonList;

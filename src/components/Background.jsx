import React from "react";
import Note from "./Note";

const Background = () => {
  const data = [
    {
      icon: true,
      title: "Today works",
      text: "wakeup @ 6",
      bottom: true,
      notecolor: "green",
      day: "Wensaday",
      stars: 4,
    },
  ];

  return (
    <div className="bg">
      <h1 className="bgtext">ToDo</h1>
      <div className="notebox">
        {data.map((item, index) => (
          <Note data={item} />
        ))}
      </div>
    </div>
  );
};

export default Background;
//icone,title,text,bottom,notecolor,day,stars

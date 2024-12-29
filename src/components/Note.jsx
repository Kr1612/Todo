import React from "react";
import { CiBoxList } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

const Note = ({ data }) => {
  return (
    <div className="mainnote">
      <h2 className="icon">{data.icon && <CiBoxList />}</h2>
      <h3 className="title">{data.title}</h3>
      <p className="text">{data.text}</p>
      {data.bottom && (
        <div className="footer">
          <h4>{data.day}</h4>
          <h4>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </h4>
        </div>
      )}
    </div>
  );
};
export default Note;

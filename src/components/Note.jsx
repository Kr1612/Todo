import React from 'react'
import { CiBoxList } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

export default function Note() {
  return (
    <div className='mainnote'>
      <h1 className='icon'><CiBoxList />
      </h1>
      <h5 className='text'>NOTE: each Icon package has it's own subfolder.</h5>
        <div className='footer'>
          <h4>Monday</h4>
          <h4><FaRegStar />
          <FaRegStar />
          <FaRegStar /></h4>
          
        </div>
      
    </div>
  )
}

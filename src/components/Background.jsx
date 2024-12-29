import React from 'react'
import Note from './Note'

function Background() {
  return (
    <div className='bg'>
      <h1 className='bgtext'>ToDo</h1>
      <div className='notebox'><Note/>
      <Note/>
      <Note/>
      <Note/>

      </div>
      
    </div>
  )
}

export default Background

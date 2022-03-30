import React, { useState } from 'react'
import AddTask from './AddTask'

const Header = () => {

  const [isClick, setClick] = useState(false)

  const handleClick = () => {
    setClick(!isClick)

  }
  return (
    <div className="container" >
      <h1 className="py-4" >Task Tracker</h1>
      {isClick ? (
        <button className="btn btn-danger text-white" onClick={handleClick} >Close Add Task Bar</button>
      ) : (
        <button className="btn btn-primary" onClick={handleClick} >Show Add Task Bar</button>
      )}
      {isClick && <AddTask

      />}

    </div>
  )
}

export default Header
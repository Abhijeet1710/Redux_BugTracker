import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBug } from '../actions';


const Bug = ( {bug} ) => {
  
  const dispatch = useDispatch();

  return (
    <div className={`text-white rounded rounded-md my-4 py-2 ${bug.isResolved ? "bg-gray-300" : "bg-gray-500"}`}
         onClick={() => { dispatch(deleteBug(bug.id)) } }>
        <h1 className='text-center'> {bug.title} </h1>
    </div>
  )
}

export default Bug;
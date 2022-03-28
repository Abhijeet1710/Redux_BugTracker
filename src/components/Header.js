import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBug } from '../actions';

function Header() {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.bugsReducer.counter);

  const addNewBug = () => {
    const ip = prompt("Enter new bug", "For Ex. UI Bug");
    if(ip == "For Ex. UI Bug") return;
    dispatch(addBug(ip));
  }

  return (
    <div className='w-full h-12 border-b-2'>
        <div className='w-4/5 mx-auto flex justify-between items-center py-2'>
            <h1 className=''> Bug Tracker </h1>
            <span className='cursor-pointer rounded px-4' onClick={ addNewBug }> Add Bug <span className='ml-4'> { counter} </span> </span>
        </div>
    </div>
  )
}

export default Header
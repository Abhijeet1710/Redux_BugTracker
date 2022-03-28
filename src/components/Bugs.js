import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Bug from './Bug'


const Bugs = () => {

  const allBugs = useSelector((state) => state.bugsReducer.bugs);

  return (
    <div className='w-9/12 md:w-4/12 mx-auto my-8 md:my-12'>
        {
          allBugs.map( (bug) => <Bug bug={bug} key={bug.id} /> )
        }
    </div>
  )
}

export default Bugs
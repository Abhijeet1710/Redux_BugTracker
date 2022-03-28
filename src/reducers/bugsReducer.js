const initialBugs = {
    bugs: [],
    counter: 0
}

export default function bugsReducer(state = initialBugs, action)  {

   switch(action.type) {
       case "ADD_BUG" :
        return {
           counter: state.counter+1,
            bugs : [
                ...state.bugs,
                {
                    id: new Date().getTime().toString(),
                    title: action.payload.title,
                    isResolved: false
                }
            ]
        }

        case "DELETE_BUG" :
        const newList = state.bugs.filter((bug) => bug.id !== action.payload.id )
        return {
           ...state,
            bugs : newList
        }

       default: return state;
   }

}
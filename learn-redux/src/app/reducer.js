import actions from "./actionTypes"
export default function reducer(state = [], action){
    switch(action.type){
        case actions.BUG_ADDED:
            return[
                ...state, {
                    id: ++lastId,
                    description: action.payload.description,
                    resloved:false
                }
            ];
        case actions.BUG_REMOVE:
            return state.filter(bug => bug.id !== action.payload.description)

        default:
            return state
    }







    if(action.type === 'bugAdded'){
        return[
            ...state, {
                id: ++lastId,
                description: action.payload.description,
                resloved:false
            }
        ];
    }else if(action.type === 'bugRemoved'){
     return state.filter(bug => bug.id !== action.payload.description)
    }
        return state
    
}


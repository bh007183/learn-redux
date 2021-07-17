import * as React from "react"

const PracticeContext = React.createContext({
    test1: "",
    test2: []
})

function practiceReducer(state, action){
    switch (action.type) {
        case "event1":{
            return test1 = action.payload
        }
        case "event2":{
            return test2 = [...state.test2, action.payload]
        }  
    
        default:

            throw new Error(`unknown action type ${action.type}`)
    }
}

function PracticeProvider({children}){
    const [state, dispatch] = React.useReducer(practiceReducer, {test1: "", test2: []})
    const value = {state, dispatch}
return <PracticeContext.Provider value={valiue}>{children}</PracticeContext.Provider>
}

function usePracticeContext(){
    const context = React.useContext(PracticeContext)
    if(!context){
        throw new Error("usePracticeContext must be used inside PrcticeProvider")
    }
    return context
}

export {PracticeProvider, usePracticeContext}
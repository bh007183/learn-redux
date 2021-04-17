import store from "./store"
import actions from "./actionTypes"
import {bugAdded} from "./actions"
import {bugResolved} from "./actions"

store.dispatch(bugAdded("Bug 1"))

const unsubscribe = store.subscribe(()=>{
    console.log("Store changed!", store.getState())
})



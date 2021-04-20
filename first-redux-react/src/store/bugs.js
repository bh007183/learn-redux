import { createSlice } from "@reduxjs/toolkit";
import {apiCallBegan} from "./api"
let lastID = 0
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastID,
        description: action.payload.description,
        resloved: false,
      });
    },
    bugResolved: (bugs, action) => {
        
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resloved = true

       
    }
  },
});
export const {bugAdded, bugResolved } = slice.actions
export default slice.reducer

const url = "/bugs"
export const loadBugs = () => apiCallBegan({
    url: url,
    onSuccess: slice.actions.bugsReceived.type
})
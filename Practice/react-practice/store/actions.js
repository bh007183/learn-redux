import { createSlice } from "@reduxjs/toolkit";
import {apiCallBegan} from "./apiActionCreators";


const slice = createSlice({
  name: "Message",
  initialState: {
    Messages: [],
    
  },
  reducers: {
    setMessages: (Message, action) => {
      Message.Messages = action.payload.messages;
      Message.Participants = action.payload.participants;
    },

   
}
});

export const { setMessages, socketResponse, Error, setModalError, resetMessage, addPart} = slice.actions;
export default slice.reducer;

export const getAllMessages = () =>
  apiCallBegan({
    url: `http://localhost:8080/api/getAllMessages`,
    headers: { authorization: "Bearer: " + localStorage.getItem("token") },
    method: "GET",
    onSuccess: setMessages.type,
    // onError
  });


import {createAction} from "@reduxjs/toolkit"
export const apiStart = createAction("api/fetchInitiated")
export const apiSuccess = createAction("api/fetchSuccess")
export const apiError = createAction("api/fetchError")
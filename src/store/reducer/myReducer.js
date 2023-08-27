import { createSlice } from "@reduxjs/toolkit"

const initialState = "Welcome to my State"

const mySlice = createSlice({
  name: "myReducer",
  initialState,
  reducers: {
    setText: (state, action) => `Hi ${action.payload}, ${state}`,
  },
})
export const { setText } = mySlice.actions
export const myReducerExample = (state) => state.myReducer
export const myReducer = mySlice.reducer

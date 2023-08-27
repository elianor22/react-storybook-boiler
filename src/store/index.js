import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { myReducer } from "./reducer/myReducer"
import { themeReducer } from "./reducer/themeReducer"

export const reducer = combineReducers({
  myReducer: myReducer,
  theme: themeReducer,
})

export const createStore = () =>
  configureStore({
    reducer,
  })
export const store = createStore()

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

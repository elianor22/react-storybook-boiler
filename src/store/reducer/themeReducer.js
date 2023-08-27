import { createSlice } from "@reduxjs/toolkit"

export const themeMode = localStorage.getItem("colorTheme")

const themeSlice = createSlice({
  name: "theme",
  initialState: themeMode || "light",
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem("colorTheme", state === "light" ? "dark" : "light")

      return state === "light" ? "dark" : "light"
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export const theme = (state) => state.sidebar

export const themeReducer = themeSlice.reducer

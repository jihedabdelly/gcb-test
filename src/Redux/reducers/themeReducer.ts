import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../types";



const initialState: ThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeLight: (state) => {
      state.value = "light"
    },
    setThemeDark: (state) => {
      state.value = "dark"
    },
    setThemeMarine: (state) => {
      state.value = "marine"
    },
  },
})

export const { setThemeLight, setThemeDark, setThemeMarine } = themeSlice.actions

export default themeSlice.reducer
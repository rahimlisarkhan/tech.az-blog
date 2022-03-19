import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  appMode: false,
  mixNews: [],
  newsSlug: null
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setAppMode: (state) => {
      state.appMode = !state.appMode
      localStorage.setItem("appMode", `${state.appMode}`)
    },
    fillAppMode: (state) => {
      let mode = localStorage.getItem("appMode")

      state.appMode = mode === "true" ? true : false
    },
    fillMixData: (state, action: PayloadAction<any>) => {
      state.mixNews = [...state.mixNews, ...action.payload]
    },
    fillNewsSlug: (state, action: PayloadAction<any>) => {
      state.newsSlug = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAppMode, fillMixData, fillNewsSlug,fillAppMode } = homeSlice.actions

export default homeSlice.reducer
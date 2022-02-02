import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  appMode: false,
  mixNews: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setAppMode: (state) => {
      state.appMode = !state.appMode
    },
    fillMixData: (state, action: PayloadAction<any>) => {
      state.mixNews = [...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAppMode,fillMixData } = homeSlice.actions

export default homeSlice.reducer
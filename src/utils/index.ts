import {configureStore, createSlice} from '@reduxjs/toolkit'

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkMode: false
    },
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode
        }
    }
})

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer
    },
})

export const {toggleDarkMode} = darkModeSlice.actions
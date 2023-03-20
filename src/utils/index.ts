import {configureStore, createSlice} from '@reduxjs/toolkit'

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkMode: false
    },
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode
        },
        setDarkMode(state, actions) {
            state.darkMode = actions.payload
        }
    }
})

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer
    },
})

export const {toggleDarkMode, setDarkMode} = darkModeSlice.actions
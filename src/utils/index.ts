import {configureStore, createSlice} from '@reduxjs/toolkit'
import {Language} from './enum'

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

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: Language.EN
    },
    reducers: {
        changeLang(state, action) {
            state.language = action.payload as Language
        }
    }
})

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer,
        language: languageSlice.reducer
    },
})

export const {toggleDarkMode, setDarkMode} = darkModeSlice.actions
export const {changeLang} = languageSlice.actions
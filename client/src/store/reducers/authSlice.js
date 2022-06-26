import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        tableFetching(state) {
            state.isLoading = true
        },
        tableFetchingSuccess(state) {
            state.error = ''
            state.isLoading = false
        },
        tableFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {tableFetching, tableFetchingError, tableFetchingSuccess} = authSlice.actions
export default authSlice.reducer

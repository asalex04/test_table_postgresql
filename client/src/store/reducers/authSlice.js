import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state) {
            state.error = ''
            state.isLoading = false
        },
        usersFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {usersFetching, usersFetchingError} = authSlice.actions
export default authSlice.reducer

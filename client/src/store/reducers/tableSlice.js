import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isVisible: false,
    table: []
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        toggleVisible(state) {
            state.isVisible = !state.isVisible
        },
        getRows(state, action) {
            state.table = action.payload
        }
    }
})

export const {toggleVisible, getRows} = tableSlice.actions
export default tableSlice.reducer



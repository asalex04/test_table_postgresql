import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    column: 'Название',
    condition: 'равно',
    value: '',
    itemsPerPage: 3,
    totalItemsCount: 0,
    currentPage: 1
}

export const conditionSlice = createSlice({
    name: 'condition',
    initialState,
    reducers: {
        selectColumn(state, action) {
            state.column = action.payload
        },
        selectCondition(state, action) {
            state.condition = action.payload
        },
        setValue(state, action) {
            state.value = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
    }
})

export const {selectColumn, selectCondition, setValue, setCurrentPage} = conditionSlice.actions
export default conditionSlice.reducer

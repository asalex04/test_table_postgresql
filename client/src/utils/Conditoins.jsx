import React from 'react'
import {selectColumn, selectCondition, setValue} from '../store/reducers/conditionSlice'
import {useDispatch, useSelector} from "react-redux";

const Conditions = () => {
    const {column, condition, value} = useSelector(state => state.condition)
    const dispatch = useDispatch()

    const handleChangeColumn = (event) => {
        dispatch(selectColumn(event.target.value))
    }
    const handleChangeCondition = (event) => {
        dispatch(selectCondition(event.target.value))
    }
    const onChangeValue = (event) => {
        dispatch(setValue(event.target.value))
    }

    return (
        <div style={{display: "flex", marginBottom: 10}}>
            <select value={column} onChange={handleChangeColumn}>
                <option>Название</option>
                <option>Количество</option>
                <option>Расстояние</option>
            </select>
            <select value={condition} onChange={handleChangeCondition}>
                <option>равно</option>
                <option>содержит</option>
                <option>больше</option>
                <option>меньше</option>
            </select>
            <input placeholder={'Вставьте значение'} onChange={onChangeValue} value={value}/>
        </div>
    )
}

export default Conditions





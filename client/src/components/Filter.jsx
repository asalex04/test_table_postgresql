import React from 'react';
import {toggleVisible} from "../store/reducers/tableSlice";
import {useDispatch} from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()

    const handleToggleVisible = () => {
        dispatch(toggleVisible())
    }
    return (
        <button onClick={handleToggleVisible} style={{marginBottom: 10}} >Фильтр</button>
    );
};

export default Filter;

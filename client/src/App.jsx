import React, {useEffect} from 'react';
import Tables from "./components/Tables";
import {fetchTable} from "./api/tableApi";
import {getRows} from "./store/reducers/tableSlice";
import Filter from "./components/Filter";
import {useDispatch, useSelector} from "react-redux";
import ListOfConditions from './utils/Conditoins'
import Paginator from "./components/Paginator/Paginator";

function App() {
    const dispatch = useDispatch()
    const {isVisible, table} = useSelector(state => state.table)
    const {itemsPerPage, currentPage} = useSelector(state => state.condition)

    useEffect(() => {
        fetchTable().then(
            (data) => dispatch(getRows(data))
        )
    },[])

    return (
        <div>
            <Filter/>
                {isVisible ? <ListOfConditions /> : null}
            <Tables/>
            {table &&
            <Paginator
                itemsPerPage={itemsPerPage}
                totalItemsCount={table.length}
                currentPage={currentPage}
            />}
        </div>
    );
}

export default App;

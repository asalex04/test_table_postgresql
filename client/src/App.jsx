import React, {useEffect} from 'react';
import Tables from "./components/Tables";
import {fetchTable} from "./api/tableApi";
import {getRows} from "./store/reducers/tableSlice";
import {tableFetching, tableFetchingSuccess} from './store/reducers/authSlice'
import Filter from "./components/Filter";
import {useDispatch, useSelector} from "react-redux";
import ListOfConditions from './utils/Conditoins'
import Paginator from "./components/Paginator/Paginator";
import {Spinner} from "react-bootstrap";

function App() {
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)
    const {isVisible, table} = useSelector(state => state.table)
    const {itemsPerPage, currentPage} = useSelector(state => state.condition)

    useEffect(() => {
        dispatch(tableFetching())
        setTimeout(() => {
            fetchTable()
                .then((data) => dispatch(getRows(data)))
                .then(() => dispatch(tableFetchingSuccess()))
        }, 1000)
    },[])

    if (isLoading) {
        return <Spinner animation={'grow'}/>
    }

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

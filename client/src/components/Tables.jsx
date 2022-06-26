import React, {useMemo} from 'react';
import {Table} from "react-bootstrap";
import useSortableData from "../hooks/sorting";
import {FILTERS, RENAME} from "../utils/constants";
import {useSelector} from "react-redux";

const formatDate = (newDate) => {
    const date = newDate.split('T')[0]
    return `${date}`
}

const Tables = () => {
    const {table} = useSelector(state => state.table)
    const {condition, column, value, itemsPerPage, currentPage} = useSelector(state => state.condition)
    const filterStr = FILTERS[condition]

    const {items, requestSort} = useSortableData(table)

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * itemsPerPage;
        const lastPageIndex = firstPageIndex + itemsPerPage;
        return items.slice(firstPageIndex, lastPageIndex);
    }

    const filteredElements = currentTableData()
        .filter(elem => (!value ? elem :
            filterStr(elem[RENAME[column]], `${value}`)))
        .map(elem => (
            <tr key={elem.id}>
                <td>{formatDate(elem.date)}</td>
                <td>{elem.title}</td>
                <td>{elem.quantity}</td>
                <td>{elem.distance}</td>
            </tr>
        ))
    return (
        <div>
            <Table striped bordered variant="dark">
                <thead>
                <tr style={{cursor: "pointer"}}>
                    <th>Дата</th>
                    <th onClick={() => requestSort('title')}>Название</th>
                    <th onClick={() => requestSort('quantity')}>Количество</th>
                    <th onClick={() => requestSort('distance')}>Расстояние</th>
                </tr>
                </thead>
                <tbody>
                    {filteredElements}
                </tbody>
            </Table>
        </div>
    );
};

export default Tables;

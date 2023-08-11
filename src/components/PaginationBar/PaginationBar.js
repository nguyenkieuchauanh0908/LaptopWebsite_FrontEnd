import React from 'react'
import styles from './PaginationBar.module.sass'
import classNames from 'classnames/bind'
import Pagination from 'react-bootstrap/Pagination';
const cx = classNames.bind(styles)

function PaginationBar({ pages }) {

    let active = 1
    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination size="lg">
            <Pagination.First />
            <Pagination.Prev />
            {items}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>

    );

}
export default PaginationBar
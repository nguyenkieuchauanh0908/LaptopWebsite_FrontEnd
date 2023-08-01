import React from 'react';
import Sidebar from '../../Layout/components/Sidebar/sidebar';
import styles from './Search.page.scss';
import SearchResult from '../../Layout/components/SearchResult/searchResult'
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
const cx = classNames.bind(styles)
function Search() {
    return (
        <div className={cx('wrapper')}>
            <Row className={cx('main-section')}>
                <Sidebar />
                <SearchResult />
            </Row >
        </div>

    )
}
export default Search
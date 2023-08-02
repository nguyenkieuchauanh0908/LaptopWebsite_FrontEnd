import React from 'react'
import styles from './sidebar.module.scss'
import classNames from 'classnames/bind'
import Col from 'react-bootstrap/esm/Col'
import ViewAll from '../../../components/view-all/view-all.js'

const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <Col sm xs={12} md lg xl={2}>
            <div className={cx('side-bar-wrapper')}>
                <nav class="category">
                    <h3 className={cx('category__heading')}><i className={cx('heading__icon fa-solid fa-list')}></i>Lọc theo giá</h3>
                    <ul className={cx('category-list')}>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Thấp đến cao</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Cao đến thấp</a>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className={cx('side-bar-wrapper')}>
                <nav class="category">
                    <h3 className={cx('category__heading')}><i className={cx('heading__icon fa-solid fa-list')}></i>Danh mục</h3>
                    <ul className={cx('category-list')}>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Laptop</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>PC</a>
                        </li>
                        <li className={cx('category-item category-item--avtive')}>
                            <a href="#" className={cx('category-item__link')}>Linh kiện</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Phụ kiện</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={cx('side-bar-wrapper')}>
                <nav class="category">
                    <h3 className={cx('category__heading')}><i className={cx('heading__icon fa-solid fa-list')}></i>Hãng</h3>
                    <ul className={cx('category-list')}>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Lenovo</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Asus</a>
                        </li>
                        <li className={cx('category-item category-item--avtive')}>
                            <a href="#" className={cx('category-item__link')}>Dell</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Apple</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Msi</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Logitech</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Amd</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Kingston</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Samsung</a>
                        </li>
                        <li className={cx('category-item')}>
                            <a href="#" className={cx('category-item__link')}>Gigabyte</a>
                        </li>
                        <li className={cx('category-item')}>
                            <ViewAll />

                        </li>
                    </ul>
                </nav>
            </div>

        </Col>
    )
}
export default Sidebar
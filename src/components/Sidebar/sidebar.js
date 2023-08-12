import React from 'react'
import styles from './sidebar.module.scss'
import classNames from 'classnames/bind'
import Col from 'react-bootstrap/esm/Col'
import ViewAll from '../view-all/view-all.js'

const cx = classNames.bind(styles)
function Sidebar() {
    let categories = []
    let brands = []

    const getCategories = () => {
        categories = [
            {
                id: 1,
                name: 'Laptop'
            },
            {
                id: 2,
                name: 'PC'
            },
            {
                id: 3,
                name: 'Linh kiện'
            },
            {
                id: 4,
                name: 'Phụ kiện'
            },
            {
                id: 5,
                name: 'Màn hình'
            },

        ]
    }

    const getBrands = () => {
        brands = [
            {
                id: 1,
                name: 'Lenovo'
            },
            {
                id: 2,
                name: 'Asus'
            },
            {
                id: 3,
                name: 'Dell'
            },
            {
                id: 4,
                name: 'MSI'
            },
            {
                id: 5,
                name: 'Acer'
            },

        ]
    }

    getCategories()
    getBrands()

    return (
        <Col sm={3} md={3} lg={2} className={cx('sidebar-container')}>
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
                        {
                            categories.map((category) => (<li className={cx('category-item')}>
                                <a key={category.id} href="#" className={cx('category-item__link')}>{category.name}</a>
                            </li>))
                        }
                    </ul>
                </nav>
            </div>

            <div className={cx('side-bar-wrapper')}>
                <nav class="category">
                    <h3 className={cx('category__heading')}><i className={cx('heading__icon fa-solid fa-list')}></i>Hãng</h3>
                    <ul className={cx('category-list')}>
                        {
                            brands.map((brand) => (
                                <li key={brand.id} className={cx('category-item')}>
                                    <a href="#" className={cx('category-item__link')}>{brand.name}</a>
                                </li>
                            )

                            )
                        }


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
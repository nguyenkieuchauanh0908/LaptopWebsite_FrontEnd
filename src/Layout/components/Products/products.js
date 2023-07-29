import React from 'react';
import classNames from 'classnames/bind';
import styles from './products.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColProductCard from '../Product/product';

const cx = classNames.bind(styles)
function Products() {
    return (
        <Col md={10} className={cx('col-products')}>
            <div className={cx('row-products')}>
                <p>Sản phẩm bán chạy nhất</p>
                <Row sm={3} xs={2} md lg={3} xl={5}>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                </Row>
            </div>
            <div className={cx('row-products')}>
                <p>Sản phẩm bán chạy nhất</p>
                <Row sm={3} xs={2} md lg={3} xl={5}>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                    <div className={cx('card-wrapper')}>
                        <ColProductCard
                            url='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw'
                            pCate='DATA'
                            pName='Laptop Lenovo IdeaPad 3 
                        15IAU7 - 82RK001NVN ...'
                            oldPrice='16.000.000đ'
                            newPrice='12.999.999đ'
                            stars={3}
                            ratingNumber={67}
                            origin="Mỹ"
                        />
                    </div>
                </Row>
            </div>

        </Col >


    );
}

export default Products;
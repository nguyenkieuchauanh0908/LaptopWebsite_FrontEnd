import ColProductCard from '../Product/product';
import styles from './searchResult.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewAll from '../../../components/view-all/view-all';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function SearchResult() {
    return (
        <Col md={10} className={cx('col-products')}>
            <div className={cx('row-products')}>
                {/* Bán chạy nhất */}
                <p className={cx('row-products-label')}>Tìm thấy 5 sản phẩm</p>
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
    )
}

export default SearchResult
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './ProductDetail.module.scss'
import classNames from 'classnames/bind'
import ProductImgs from '../../Layout/components/ProductImgs/ProductImgs'
import ProductInfo from '../../Layout/components/ProductInfo/ProductInfo'
import Comment from '../../Layout/components/Comment/Comment'
import ColProductCard from '../../Layout/components/Product/product'
import ViewAll from '../../components/view-all/view-all';

const cx = classNames.bind(styles)
function ProductDetail() {
    return (
        <div>
            <Container className={cx('wrapper')}>
                <span className={cx('row-heading')}>Thông tin sản phẩm</span>
                <Row className={cx('productInfo')}>
                    <Col className={cx('col-wrapper')} md={{ span: 4 }}>
                        <ProductImgs />
                    </Col>
                    <Col className={cx('col-wrapper')} md={{ span: 6, offset: 1 }}>
                        <ProductInfo
                            name='Laptop Lenovo IdeaPad 3 15IAU7 - 82RK001QVN (i5-1235U/RAM 8GB/512GB SSD/ Windows 11)'
                            brand='Lenovo'
                            newPrice='12.999.999đ'
                            oldPrice='16.000.000đ'
                            status='Selling'

                        />
                    </Col>
                </Row>
            </Container>

            <Container className={cx('wrapper')}>
                <span className={cx('row-heading')}>Thông số kỹ thuật</span>
                <Row>
                    <Col>
                        <p>- Kích thước: 23.8" (1920 x 1080), Tỷ lệ 16:9</p>
                        <p>- Tần số quét: 75Hz</p>
                        <p>- Công nghệ đồng bộ: FreeSync</p>
                        <p>- Cổng hình ảnh: , 1 x HDMI 1.4, 1 x VGA/D-sub </p>
                    </Col>
                </Row>

            </Container>

            <Container className={cx('wrapper')}>
                <span className={cx('row-heading')}>Đánh giá</span>
                <Row>
                    <Comment />
                </Row>
                <Row>
                    <Comment />
                </Row>
                <Row>
                    <Comment />
                </Row>
            </Container>
            <Container className={cx('wrapper')}>
                <span className={cx('row-heading')}>Sản phẩm liên quan</span>
                <Row sm={3} xs={3} md lg={3} xl={6}>
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
                <ViewAll />
            </Container>



        </div>



    )
}
export default ProductDetail
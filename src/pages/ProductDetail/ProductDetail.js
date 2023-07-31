import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './ProductDetail.module.scss'
import classNames from 'classnames/bind'
import ProductImgs from '../../Layout/components/ProductImgs/ProductImgs'
import ProductInfo from '../../Layout/components/ProductInfo/ProductInfo'
import Comment from '../../Layout/components/Comment/Comment'
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
                        <p>
                            Thông số
                        </p>
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
                <p>Sản phẩm </p>
            </Container>



        </div>



    )
}
export default ProductDetail
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
import { RatingStar } from '../../components/Icons'

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
                <div className={cx('overview-wrapper')}>
                    <p className={cx('title')}>Điểm đánh giá trung bình: </p>
                    <div className={cx('rating-stars')}>
                        <div className={cx('stars')}>
                            <div className={cx('stars-wrapper')}>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                            </div>
                        </div>
                        <span className={cx('ratingNumber')}>(63)</span>
                    </div>

                </div>
                <Row>
                    <Comment
                        uName='Nguyễn Kiều Châu Anh'
                        content='Sản phẩm có chất lượng tuyệt vời,  mỏng nhẹ, hợp cho dân văn phòng, để code thì hơi yếu ... '
                        star={5}
                        images={[]}
                    />
                </Row>
                <Row>
                    <Comment
                        uName='Trần Thị Trà My'
                        content='Sản phẩm có chất lượng tuyệt vời,  mỏng nhẹ, hợp cho dân văn phòng, để code thì hơi yếu ... '
                        star={5}
                        images={[]}
                    />
                </Row>
                <Row>
                    <Comment
                        uName='Nguyễn Huỳnh Khoa'
                        content='Lenovo IdeaPad 3 15IAU7 - 82RK001QVN mang đến trải nghiệm tuyệt vời cho người dùng nhờ việc sở hữu hiệu năng mạnh mẽ với CPU Intel Core i5 xử lý tốt các dữ liệu cùng ngoại hình thanh lịch, nổi bật. Lenovo IdeaPad phù hợp với những người dùng có nhu cầu
                        làm việc văn phòng, học tập hoặc giải trí. Laptop IdeaPad 3 15IAU7sở hữu vẻ ngoài lịch lãm, tinh tế với màu xanh chủ đạo đem lại cảm giác cuốn hút khi nhìn vào. Ngoài việc sở hữu vẻ ngoài ấn tượng, kích thước của máy 35.92 x 23.65 x 1.99cm cùng khối lượng 1.63kg giúp máy trở nên nhỏ gọn để bạn dễ dàng bỏ vào trong balo đem theo bên mình.'
                        star={5}
                        images={[]} />
                </Row>
                <div className={cx('viewAll-wrapper')}>
                    <ViewAll />
                </div>
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
                <div className={cx('viewAll-wrapper')}>
                    <ViewAll />
                </div>
            </Container>



        </div>



    )
}
export default ProductDetail
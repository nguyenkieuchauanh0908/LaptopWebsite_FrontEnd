import ColProductCard from '../Product/product';
import styles from './searchResult.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewAll from '../../../components/view-all/view-all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function SearchResult(props) {
    return (
        <>
            {
                props.foundProducts.length > 0 ? (
                    <>
                        <Col xs={12} sm={8} md={8} lg={9} className={cx('col-products')}>
                            <div className={cx('row-products')}>


                                <p className={cx('row-products-label')}>Tìm thấy {props.foundProducts.length} sản phẩm</p>
                                <Row sm xs={2} md={3} lg={3} xl={5}>
                                    {
                                        props.foundProducts.map((product) => (
                                            <div className={cx('card-wrapper')}>
                                                <ColProductCard
                                                    url={product.images[0]}
                                                    pCate={product.category}
                                                    pName={product.name}
                                                    oldPrice={product.price}
                                                    newPrice={product.price - product.price * (10 / 100)}
                                                    stars={product.rating}
                                                    ratingNumber={product.ratingNumber}
                                                />
                                            </div>
                                        ))
                                    }


                                </Row>
                            </div>
                        </Col >
                    </>

                ) : (
                    <Col className={cx('col-products')}>
                        <Row >
                            <div className={cx('cart__null')}>
                                <div className={cx('cart__null-icon')}>
                                    <FontAwesomeIcon icon={faFaceMeh} />
                                </div>
                                <div className={cx('cart__null-text')}>
                                    Không tìm thấy sản phẩm
                                </div>
                                <Button primary to={'/'}>
                                    Quay lại trang chủ
                                </Button>
                            </div>
                        </Row>

                    </Col>


                )
            }
        </>

    )
}


export default SearchResult
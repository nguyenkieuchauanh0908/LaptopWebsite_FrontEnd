import ColProductCard from '../../../components/Product/product';
import styles from './searchResult.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import classNames from 'classnames/bind';
import PaginationBar from '../../../components/PaginationBar/PaginationBar';

const cx = classNames.bind(styles)
function SearchResult({ foundProducts }) {
    return (
        <>
            {
                foundProducts.length > 0 ? (
                    <>
                        <Col xs={12} sm={8} md={8} lg={9} className={cx('col-products')}>
                            <div className={cx('row-products')}>


                                <p className={cx('row-products-label')}>Tìm thấy {foundProducts.length} sản phẩm</p>
                                <Row sm xs={2} md={3} lg={3} xl={5}>
                                    {
                                        foundProducts.map((product, index) =>
                                        (<div className={cx('card-wrapper')}>
                                            <ColProductCard
                                                key={index}
                                                url={product.images[0]}
                                                pCate={product.category}
                                                pName={product.name}
                                                oldPrice={product.price}
                                                stars={product.rating}
                                                ratingNumber={product.ratingNumber}
                                                salePercents={product.salePercents}
                                            />


                                        </div>)
                                        )
                                    }


                                </Row>
                            </div>
                            <div className={cx('row-pagination')}>
                                <Row>
                                    <PaginationBar
                                        pages={5} />
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
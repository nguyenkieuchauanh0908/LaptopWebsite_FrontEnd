import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import ListCart from './ListCart/ListCart';
import CartItem from '../../components/CartItem';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('d-flex justify-content-center', 'title')}>Giỏ Hàng</h2>
                <div className={cx('row align-items-center', 'header')}>
                    <div className={cx('col-lg-6 col-md-6', 'header__products', 'd-flex')}>
                        <input type="checkbox" name="products" />
                        <p>Sản phẩm</p>
                    </div>
                    <div className={cx('col-lg-6 col-md-6 row', 'header__info')}>
                        <div className={cx('col-lg-3 col-md-3')}>
                            <p>Đơn giá</p>
                        </div>
                        <div className={cx('col-lg-3 col-md-3')}>
                            <p>Số lượng</p>
                        </div>
                        <div className={cx('col-lg-3 col-md-3')}>
                            <p>Số tiền</p>
                        </div>
                        <div className={cx('col-lg-3 col-md-3')}>
                            <p>Thao tác</p>
                        </div>
                    </div>
                </div>
                <div className={cx('row align-items-center', 'cart-detail')}>
                    <ListCart>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </ListCart>
                </div>
                <div className={cx('row align-items-center', 'footer')}>
                    <div className={cx('col-lg-6 col-md-6', 'footer__products', 'd-flex')}>
                        <input type="checkbox" name="products" />
                        <p>Chọn tất cả</p>
                        <a>Xóa</a>
                    </div>
                    <div className={cx('row col-lg-6 col-md-6 align-items-center', 'footer__info')}>
                        <div className={cx('col-lg-3 col-md-3')}>
                            <p>Tổng thanh toán</p>
                        </div>
                        <div className={cx('col-lg-3 col-md-3')}>
                            <p>
                                <span className={cx('total-quantity')}>3</span> Sản phẩm
                            </p>
                        </div>
                        <div className={cx('col-lg-3 col-md-3', 'total-payment')}>
                            <p>3.1555.000đ</p>
                        </div>
                        <div className={cx('col-lg-3 col-md-3', 'btn-order')}>
                            <Button to={'./checkout'} primary rightIcon={<FontAwesomeIcon icon={faCaretRight} />}>
                                Đặt hàng
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

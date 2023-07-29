import classNames from 'classnames/bind';
import styles from './CheckOut.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ListCart from '../Cart/ListCart';
import CartItemCheckOut from '../../components/CartItemCheckOut';
import { CodIcon, PayIcon } from '../../components/Icons';
import Image from '../../components/Images';
import Button from '../../components/Button';
const cx = classNames.bind(styles);
function CheckOut() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('d-flex justify-content-center', 'title')}>Thanh Toán</h2>

            <div className={cx('container')}>
                <div className={cx('row', 'address')}>
                    <div className={cx('address-title', 'd-flex')}>
                        <FontAwesomeIcon icon={faLocationDot} className={cx('address-icon')} />
                        <h3>Địa chỉ nhận hàng</h3>
                    </div>
                    <div className={cx('d-flex justify-content-between', 'address-text')}>
                        <div>
                            <span>huỳnh khoa (+84) 869950090</span> 230/1a Nguyễn Thị Định, Phường Bình Trưng Tây, Thành
                            Phố Thủ Đức, TP. Hồ Chí Minh
                        </div>
                        <div>
                            <a>Thay đổi</a>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-lg-8 d-flex flex-column', 'order-left')}>
                        <div className={cx('row align-items-center', 'header')}>
                            <div className={cx('col-lg-6 col-md-6', 'header__products', 'd-flex')}>
                                <p>Chi tiết sản phẩm</p>
                            </div>
                            <div className={cx('col-lg-6 col-md-6 row text-center', 'header__info')}>
                                <div className={cx('col-lg-3 col-md-3')}>
                                    <p>Đơn giá</p>
                                </div>
                                <div className={cx('col-lg-3 col-md-3')}>
                                    <p>Số lượng</p>
                                </div>
                                <div className={cx('col-lg-3 col-md-3')}>
                                    <p>Thành tiền</p>
                                </div>
                                <div className={cx('col-lg-3 col-md-3')}>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('row align-items-center', 'checkout__cart-detail')}>
                            <ListCart>
                                <CartItemCheckOut />
                                <CartItemCheckOut />
                            </ListCart>
                        </div>
                        <div className={cx('row', 'payment-form')}>
                            <div className={cx('payment-title')}>
                                <h3>Hình thức thanh toán</h3>
                            </div>
                            <div className={cx('payment-list', 'd-flex flex-column')}>
                                <label className={cx('d-flex')}>
                                    <input type="radio" name="paymentMethod" value="creditCard" />
                                    <div className={cx('payment-logo')}>
                                        <CodIcon />
                                    </div>
                                    Thanh toán tiền mặt khi nhận hàng (COD)
                                </label>
                                <label className={cx('d-flex')}>
                                    <input type="radio" name="paymentMethod" value="paypal" />
                                    <div className={cx('payment-logo')}>
                                        <PayIcon />
                                    </div>
                                    Chuyển khoản
                                </label>
                                <label className={cx('d-flex')}>
                                    <input type="radio" name="paymentMethod" value="bankTransfer" />
                                    <div className={cx('payment-logo')}>
                                        <Image
                                            className={cx('payment')}
                                            src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png"
                                            alt="vnpay"
                                        />
                                    </div>
                                    Thanh toán bằng VNPAY
                                </label>
                            </div>
                        </div>
                        <div className={cx('row', 'order-note')}>
                            <div class={cx('order-note-text')}>
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Ghi chú
                                </label>
                                <textarea
                                    placeholder="Nhập lời nhắn cho cửa hàng hoặc đơn vị vận chuyển"
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                ></textarea>
                            </div>
                            <label className={cx('d-flex')}>
                                <input type="checkbox" name="paymentInfo" />
                                Thông tin xuất hóa đơn
                            </label>
                        </div>
                    </div>
                    <div className={cx('col-lg-4')}>
                        <div className={cx('row', 'order__info-form')}>
                            <div className={cx('order__info-title')}>
                                <h3>Thông tin đơn hàng</h3>
                            </div>
                            <div className={cx('order__info-discount')}>
                                <h4>Mã giảm giá</h4>
                                <div className={cx('d-flex', 'discount-input')}>
                                    <input placeholder="ABCXYZ" />
                                    <Button primary small>
                                        Áp dụng
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <div className={cx('order__info')}>
                                    <div className={cx('order__info-detail')}>
                                        <div
                                            className={cx(
                                                'd-flex justify-content-between align-items-center',
                                                'subtotal',
                                            )}
                                        >
                                            <h4>Tạm tính</h4>
                                            <p>1.897.600₫</p>
                                        </div>
                                        <div
                                            className={cx(
                                                'd-flex justify-content-between align-items-center',
                                                'shipping-fee',
                                            )}
                                        >
                                            <h4>Phí vận chuyển</h4>
                                            <p>50.000₫</p>
                                        </div>
                                        <div
                                            className={cx(
                                                'd-flex justify-content-between align-items-center',
                                                'discounted-shipping-fee',
                                            )}
                                        >
                                            <h4>Giảm giá phí vận chuyển</h4>
                                            <p>0₫</p>
                                        </div>
                                        <div
                                            className={cx(
                                                'd-flex justify-content-between align-items-center',
                                                'discounted',
                                            )}
                                        >
                                            <h4>Giảm giá trực tiếp</h4>
                                            <p>284.000₫</p>
                                        </div>
                                        <div
                                            className={cx(
                                                'd-flex justify-content-between align-items-center',
                                                'discounted-voucher',
                                            )}
                                        >
                                            <h4>Giảm giá voucher</h4>
                                            <p>50.000₫</p>
                                        </div>
                                    </div>
                                    <div className={cx('order__info-total', 'd-flex justify-content-between')}>
                                        <p>Tổng thanh toán</p>
                                        <div className={cx('total-payment', 'text-end')}>
                                            <p>1.897.600đ</p>
                                            <h4>Đã bao gồm VAT nếu có</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('btn-order')}>
                                <Button primary>Đặt hàng</Button>
                            </div>
                            <div className={cx('text-center')}>
                                Nhấn đặt hàng đồng nghĩa với việc bạn đồng ý tuân theo{' '}
                                <a href="/" style={{ color: '#1d6fdf' }}>
                                    Chính sách đặt hàng
                                </a>{' '}
                                của chúng tôi.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;

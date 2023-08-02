import classNames from 'classnames/bind';
import styles from './CheckOut.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ListCart from '../Cart/ListCart';
import CartItemCheckOut from '../../components/CartItemCheckOut';
import { CodIcon, PayIcon } from '../../components/Icons';
import Image from '../../components/Images';
import Button from '../../components/Button';
import { useState } from 'react';
const cx = classNames.bind(styles);
function CheckOut() {
    const [changeAddress, setChangeAddress] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(true);

    return (
        <div className={cx('wrapper')}>
            {!orderSuccess && (
                <>
                    <h2 className={cx('d-flex justify-content-center', 'title')}>Thanh Toán</h2>

                    <div className={cx('container')}>
                        <div className={cx('row', 'address')}>
                            <div className={cx('address-title', 'd-flex')}>
                                <FontAwesomeIcon icon={faLocationDot} className={cx('address-icon')} />
                                <h3>Địa chỉ nhận hàng</h3>
                            </div>
                            <div className={cx('d-flex justify-content-between', 'address-text')}>
                                <div>
                                    <span>huỳnh khoa (+84) 869950090</span> 230/1a Nguyễn Thị Định, Phường Bình Trưng
                                    Tây, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                                </div>
                                <div>
                                    <a onClick={() => setChangeAddress(true)}>Thay đổi</a>
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
                                            class={cx('form-control', 'font-size-16')}
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
                </>
            )}
            {changeAddress && (
                <div className={cx('change__address')}>
                    <div className={cx('container d-flex align-items-center ', 'change__address-wrapper')}>
                        <div className={cx('row justify-content-center')}>
                            <div className={cx('col-lg-6 ', 'change__address-form')}>
                                <div>
                                    <h1 className={cx('change__address-title')}>ĐỊA CHỈ MỚI</h1>
                                    <form class="row g-3">
                                        <h2>Thông tin khách hàng</h2>
                                        <h3>Người đặt hàng</h3>
                                        <div class="col-12">
                                            <label for="inputAddress" class="form-label">
                                                Họ và Tên *
                                            </label>
                                            <input
                                                type="text"
                                                class={cx('form-control', 'font-size-16')}
                                                id="inputName"
                                                placeholder="Nhập họ và tên"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputPhone" class="form-label">
                                                Số điện thoại *
                                            </label>
                                            <input
                                                type="text"
                                                class={cx('form-control', 'font-size-16')}
                                                id="inputPhone"
                                                placeholder="Nhập số điện thoại"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputEmail" class="form-label">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                class={cx('form-control', 'font-size-16')}
                                                id="inputEmail"
                                                placeholder="Nhập email"
                                            />
                                        </div>
                                        <h3>Địa chỉ nhận hàng</h3>

                                        <div class="col-12">
                                            <label for="inputAddress" class="form-label"></label>
                                            <input
                                                type="text"
                                                class={cx('form-control', 'font-size-16')}
                                                id="inputAddress"
                                                placeholder="Số nhà, tên đường *"
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputCity" class="form-label"></label>
                                            <input
                                                type="text"
                                                class={cx('form-control', 'font-size-16')}
                                                id="inputCity"
                                                placeholder="Tỉnh/Thành phố *"
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputDistrict" class="form-label"></label>
                                            <input
                                                type="text"
                                                class={cx('form-control', 'font-size-16')}
                                                id="inputDistrict"
                                                placeholder="Quận/Huyện *"
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputCommune" class="form-label"></label>
                                            <input
                                                type="text"
                                                class={cx('form-control', 'font-size-16')}
                                                id="inputCommune"
                                                placeholder="Phường/Xã *"
                                            />
                                        </div>
                                        <div class={cx('col-12 text-end', 'button')}>
                                            <button
                                                onClick={() => setChangeAddress(false)}
                                                class={cx('btn btn-light', 'btn-back')}
                                            >
                                                Trở lại
                                            </button>
                                            <button
                                                onClick={() => setChangeAddress(false)}
                                                type="submit"
                                                class={cx('btn btn-primary', 'btn-submit')}
                                            >
                                                Hoàn Thành
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {orderSuccess && (
                <div className={cx('inner')}>
                    <div className={cx('container')}>
                        <div className={cx('row justify-content-center', 'order__success')}>
                            <div className={cx('col-lg-10', 'order__success-full')}>
                                <div className={cx('order__success-title', 'text-center')}>
                                    <h1>Đặt hàng thành công</h1>
                                    <p>
                                        Cảm ơn quý khách đã tin tưởng lựa chọn sản phẩm/dịch vụ của chúng tôi.Chúng tôi
                                        sẽ liên hệ để xác nhận đơn hàng trong thời gian sớm nhất. Nếu cần hỗ trợ quý
                                        khách vui lòng gọi hotline <a href='tel:"18006666"'>1800 6666</a> (miễn phí
                                        cước) để được tư vấn miễn phí.
                                    </p>
                                </div>
                                <div className={cx('info-client')}>
                                    <div className={cx('info-client-title')}>
                                        <h3>Thông tin khách hàng</h3>
                                    </div>
                                    <div className={cx('info-client-content')}>
                                        <div className={cx('info-client-name', 'd-flex')}>
                                            <div className={cx('col-lg-4', 'text-1')}>Họ và tên</div>
                                            <div className={cx('col-lg-8', 'text-2')}>Nguyễn Huỳnh Khoa</div>
                                        </div>
                                        <div className={cx('info-client-phone', 'd-flex')}>
                                            <div className={cx('col-lg-4', 'text-1')}>Số điện thoại</div>
                                            <div className={cx('col-lg-8', 'text-2')}>0123456789</div>
                                        </div>
                                        <div className={cx('info-client-email', 'd-flex')}>
                                            <div className={cx('col-lg-4', 'text-1')}>Email</div>
                                            <div className={cx('col-lg-8', 'text-2')}>huynhkhoa@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('info-order')}>
                                    <div className={cx('info-order-title')}>
                                        <h3>Thông tin đặt hàng</h3>
                                    </div>
                                    <div className={cx('info-order-content')}>
                                        <div className={cx('info-order-code', 'd-flex')}>
                                            <div className={cx('col-lg-4', 'text-1')}>Mã đơn hàng</div>
                                            <div className={cx('col-lg-8', 'text-2')}>KHOA123</div>
                                        </div>
                                        <div className={cx('info-order-address', 'd-flex')}>
                                            <div className={cx('col-lg-4', 'text-1')}>Địa chỉ nhận hàng</div>
                                            <div className={cx('col-lg-8', 'text-2')}>
                                                Chung cư Văn Hoàng, 890 Nguyễn Thị Minh Khai, Phường Nguyễn Cư Trinh,
                                                Quận 1, TP Hồ Chí Minh
                                            </div>
                                        </div>
                                        <div className={cx('info-order-pay', 'd-flex')}>
                                            <div className={cx('col-lg-4', 'text-1')}>Phương thức thanh toán</div>
                                            <div className={cx('col-lg-8', 'text-2')}>
                                                Thanh toán tiền mặt khi nhận hàng (COD)
                                            </div>
                                        </div>
                                        <div className={cx('info-order-note', 'd-flex')}>
                                            <div className={cx('col-lg-4', 'text-1')}>Ghi chú</div>
                                            <div className={cx('col-lg-8', 'text-2')}>Giao cẩn thận, hàng dễ vỡ</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('ordered-product')}>
                                    <div className={cx('ordered-product-title')}>
                                        <h3>Sản phẩm đã đặt</h3>
                                    </div>
                                    <div className={cx('ordered-product-item', 'd-flex justify-content-between')}>
                                        <div className={cx('ordered-product-left', 'd-flex')}>
                                            <div className={cx('product-img')}>
                                                <Image
                                                    src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                                                    alt="img"
                                                />
                                            </div>
                                            <div className={cx('product__info')}>
                                                <h4 className={cx('product__info-name')}>
                                                    Apple Macbook Air M2 2022 8GB 256GB
                                                </h4>
                                                <div className={cx('product__info-memory', 'd-flex')}>
                                                    <p>
                                                        Bộ nhớ: <span>256GB</span>
                                                    </p>
                                                    <p className={cx('color')}>
                                                        Màu: <span>Xám bạc</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('product-right')}>
                                            <p className={cx('product-price', 'text-end')}>105.000₫</p>
                                            <p className={cx('product-quantity', 'text-end')}>
                                                Số lượng: <span>02</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('order__info')}>
                                    <div className={cx('order__info-detail', 'd-flex flex-column')}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('btn-continuel', 'd-flex justify-content-center')}>
                                    <Button to={'/'} primary>
                                        Tiếp tục mua sắm
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckOut;

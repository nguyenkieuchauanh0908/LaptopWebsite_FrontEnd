import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import ListCart from './ListCart/ListCart';
import CartItem from '../../components/CartItem';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Apple Macbook Air M1 2022 8GB 256GB', price: 12000000, quantity: 1, checked: false },
        { id: 2, name: 'Apple Macbook Air M2 2023 16GB 256GB', price: 22300000, quantity: 2, checked: false },
        { id: 3, name: 'Máy tính Asus 2023 16GB 256GB', price: 15600000, quantity: 1, checked: false },
        // ...Thêm các sản phẩm khác vào đây
    ]);
    // tăng số lượng
    const increaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)),
        );
    };
    // giảm số lượng
    const decreaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
            ),
        );
    };
    // xóa từng sản phẩm ra khỏi giỏ hàng
    const deleteItem = (itemId) => {
        const shouldDelete = window.confirm('Bạn có muốn xóa sản phẩm này không?');
        if (shouldDelete) {
            setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
        }
    };

    // xóa tất cả sản phẩm ra khỏi giỏ hàng
    const deleteAllItem = () => {
        const shouldDelete = window.confirm('Bạn có muốn xóa sản phẩm này không?');
        if (shouldDelete) {
            setCartItems((prevCartItems) => prevCartItems.filter((item) => item.checked !== true));
        }
    };
    // Tính tổng giá trị giỏ hàng
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            if (item.checked) {
                return total + item.price * item.quantity;
            }
            return total;
        }, 0);
    };
    // Tính tổng số lượng sản phẩm
    const calculateTotalQuantity = () => {
        return cartItems.reduce((totalQuantity, item) => {
            if (item.checked) {
                return totalQuantity + item.quantity;
            }
            return totalQuantity;
        }, 0);
    };
    // chọn từng sản phẩm
    const handleCheckboxChange = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) => (item.id === productId ? { ...item, checked: !item.checked } : item)),
        );
    };
    // chọn tất cả sản phẩm
    const handleSelectAll = () => {
        const allChecked = cartItems.every((item) => item.checked);
        setCartItems((prevCartItems) => prevCartItems.map((item) => ({ ...item, checked: !allChecked })));
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('d-flex justify-content-center', 'title')}>Giỏ Hàng</h2>
            {cartItems.length !== 0 ? (
                <div className={cx('container')}>
                    <div className={cx('row align-items-center', 'header')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-6 col-md-6', 'header__products', 'd-flex')}>
                                <input
                                    type="checkbox"
                                    checked={cartItems.every((item) => item.checked)}
                                    onChange={handleSelectAll}
                                    name="products"
                                />
                                <p>Sản phẩm</p>
                            </div>
                            <div className={cx('col-lg-6 col-md-6 d-flex', 'header__info')}>
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
                    </div>
                    <div className={cx('row align-items-center', 'cart-detail')}>
                        <ListCart>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    checked={item.checked}
                                    itemName={item.name}
                                    itemPrice={item.price}
                                    itemQuantity={item.quantity}
                                    handleCheckboxChange={() => handleCheckboxChange(item.id)}
                                    deleteItem={() => deleteItem(item.id)} // Thêm hàm xóa sản phẩm
                                    increaseQuantity={() => {
                                        increaseQuantity(item.id);
                                        calculateTotal(); // Gọi lại hàm calculateTotal để tổng giá tiền cập nhật
                                        calculateTotalQuantity(); // Gọi lại hàm calculateTotalQuantity để tổng số lượng cập nhật
                                    }}
                                    decreaseQuantity={() => {
                                        decreaseQuantity(item.id);
                                        calculateTotal(); // Gọi lại hàm calculateTotal để tổng giá tiền cập nhật
                                        calculateTotalQuantity(); // Gọi lại hàm calculateTotalQuantity để tổng số lượng cập nhật
                                    }}
                                />
                            ))}
                        </ListCart>
                    </div>
                    <div className={cx('row align-items-center', 'footer')}>
                        <div className={cx('col-lg-6 col-md-6', 'footer__products', 'd-flex')}>
                            <input
                                type="checkbox"
                                checked={cartItems.every((item) => item.checked)}
                                onChange={handleSelectAll}
                                name="products"
                            />
                            <p>Chọn tất cả</p>
                            <a onClick={deleteAllItem}>Xóa</a>
                        </div>
                        <div className={cx('col-lg-6 col-md-6 d-flex align-items-center', 'footer__info')}>
                            <div className={cx('col-lg-3 col-md-3')}>
                                <p>Tổng thanh toán</p>
                            </div>
                            <div className={cx('col-lg-3 col-md-3')}>
                                <p>
                                    <span className={cx('total-quantity')}>{calculateTotalQuantity()}</span> Sản phẩm
                                </p>
                            </div>
                            <div className={cx('col-lg-3 col-md-3', 'total-payment')}>
                                <p>{calculateTotal().toLocaleString('vi-VN')}đ</p>
                            </div>
                            <div className={cx('col-lg-3 col-md-3', 'btn-order')}>
                                <Button to={'./checkout'} primary rightIcon={<FontAwesomeIcon icon={faCaretRight} />}>
                                    Đặt hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('container')}>
                    <div className={cx('row justify-content-center')}>
                        <div className={cx('col-md-6 col-lg-6', 'cart__null')}>
                            <div className={cx('cart__null-icon')}>
                                <FontAwesomeIcon icon={faFaceMeh} />
                            </div>
                            <div className={cx('cart__null-text')}>
                                Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại
                            </div>
                            <Button primary to={'/'}>
                                Quay lại trang chủ
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;

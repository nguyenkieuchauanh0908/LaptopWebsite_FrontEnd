import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import ListCart from './ListCart/ListCart';
import CartItem from '../../components/CartItem';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as cartService from '../../services/cartService';

const cx = classNames.bind(styles);
function Cart() {
    const userId = '64b8b4a1116933190a3d3544';
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState([]);
    const fetchProductDetails = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`);
            if (!response.ok) {
                throw new Error('Yêu cầu không thành công');
            }
            const product = await response.json();
            return product;
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu thông tin sản phẩm:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const data = await cartService.getCartByUserId(userId);
                setCart(data);
                // Gọi fetchProductDetails cho mỗi sản phẩm trong giỏ hàng
                const productDetailsPromises = data.map(async (item) => {
                    return fetchProductDetails(item.itemId);
                });
                const productDetails = await Promise.all(productDetailsPromises);
                const listcart = productDetails.map((value, index) => [value, data[index]]);
                console.log(listcart);
                setCartItems(listcart);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCartData();
    }, []);

    const [isProductsSelected, setIsProductsSelected] = useState(false);

    // tăng số lượng
    const increaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item[0]._id === itemId
                    ? [{ ...item[0] }, { ...item[1], quantity: parseInt(item[1].quantity) + 1 }]
                    : item,
            ),
        );
    };
    // giảm số lượng
    const decreaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item[0]._id === itemId && item[1].quantity > 1
                    ? [{ ...item[0] }, { ...item[1], quantity: parseInt(item[1].quantity) - 1 }]
                    : item,
            ),
        );
    };
    // xóa từng sản phẩm ra khỏi giỏ hàng
    const deleteItem = (itemId) => {
        const shouldDelete = window.confirm('Bạn có muốn xóa sản phẩm này không?');
        if (shouldDelete) {
            setCartItems((prevCartItems) => prevCartItems.filter((item) => item[0]._id !== itemId));
        }
    };

    // xóa tất cả sản phẩm ra khỏi giỏ hàng
    const deleteAllItem = () => {
        const shouldDelete = window.confirm('Bạn có muốn xóa sản phẩm này không?');
        if (shouldDelete) {
            setCartItems((prevCartItems) => prevCartItems.filter((item) => item[0].checked !== true));
        }
    };
    // Tính tổng giá trị giỏ hàng
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            if (item[0].checked) {
                return total + parseInt(item[0]._price) * parseInt(item[1].quantity);
            }
            return total;
        }, 0);
    };
    // Tính tổng số lượng sản phẩm
    const calculateTotalQuantity = () => {
        return cartItems.reduce((totalQuantity, item) => {
            if (item[0].checked) {
                return totalQuantity + parseInt(item[1].quantity);
            }
            return totalQuantity;
        }, 0);
    };
    // chọn từng sản phẩm
    const handleCheckboxChange = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item[0]._id === productId ? [{ ...item[0], checked: !item[0].checked }, item[1]] : item,
            ),
        );
        setIsProductsSelected(true); // Đã chọn ít nhất một sản phẩm
    };

    // chọn tất cả sản phẩm

    const handleSelectAll = () => {
        const allChecked = cartItems.every((item) => item[0].checked);
        setCartItems((prevCartItems) => prevCartItems.map((item) => [{ ...item[0], checked: !allChecked }, item[1]]));
        setIsProductsSelected(!allChecked);
    };

    // Kiểm Tra Trạng Thái Trước Khi Đặt Hàng:
    const placeOrder = () => {
        if (!isProductsSelected) {
            alert('Vui lòng chọn ít nhất một sản phẩm trước khi đặt hàng.');
            return;
        }
        navigate('./checkout');
        // Tiến hành đặt hàng và xử lý các thao tác khác
    };
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('d-flex justify-content-center', 'title')}>Giỏ Hàng</h2>
            {cartItems.length !== 0 ? (
                <div className={cx('container')}>
                    <div className={cx('row ', 'header')}>
                        <div className={cx('col-lg-6 col-md-6 col-12 d-flex', 'header__products')}>
                            <input
                                type="checkbox"
                                checked={cartItems.every((item) => item[0].checked)}
                                onChange={handleSelectAll}
                                name="products"
                            />
                            <p>Sản phẩm</p>
                        </div>
                        <div className={cx('col-lg-6 col-md-6 d-flex', 'header__info')}>
                            <div className={cx('col-lg-3 col-md-3 d-md-none d-lg-block')}>
                                <p>Đơn giá</p>
                            </div>
                            <div className={cx('col-lg-3 col-md-4')}>
                                <p>Số lượng</p>
                            </div>
                            <div className={cx('col-lg-3 col-md-4')}>
                                <p>Số tiền</p>
                            </div>
                            <div className={cx('col-lg-3 col-md-4')}>
                                <p>Thao tác</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row align-items-center', 'cart-detail')}>
                        <ListCart>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item[0]._id}
                                    checked={item[0].checked}
                                    itemName={[item[0]._name]}
                                    itemPrice={[item[0]._price]}
                                    itemQuantity={item[1].quantity}
                                    handleCheckboxChange={() => handleCheckboxChange(item[0]._id)}
                                    deleteItem={() => deleteItem(item[0]._id)} // Thêm hàm xóa sản phẩm
                                    increaseQuantity={() => {
                                        increaseQuantity(item[0]._id);
                                        calculateTotal(); // Gọi lại hàm calculateTotal để tổng giá tiền cập nhật
                                        calculateTotalQuantity(); // Gọi lại hàm calculateTotalQuantity để tổng số lượng cập nhật
                                    }}
                                    decreaseQuantity={() => {
                                        decreaseQuantity(item[0]._id);
                                        calculateTotal(); // Gọi lại hàm calculateTotal để tổng giá tiền cập nhật
                                        calculateTotalQuantity(); // Gọi lại hàm calculateTotalQuantity để tổng số lượng cập nhật
                                    }}
                                />
                            ))}
                        </ListCart>
                    </div>
                    <div className={cx('row align-items-center ', 'footer')}>
                        <div className={cx('col-lg-6 col-md-3 col-12', 'footer__products', 'd-flex')}>
                            <input
                                type="checkbox"
                                checked={cartItems.every((item) => item[0].checked)}
                                onChange={handleSelectAll}
                                name="products"
                            />
                            <p>Tất cả</p>
                            <a onClick={deleteAllItem}>Xóa</a>
                        </div>
                        <div
                            className={cx(
                                'col-lg-6 col-md-9 col-12',
                                ' d-flex align-items-center justify-content-between',
                                'footer__info',
                            )}
                        >
                            <div className={cx('col-lg-3 col-md-3')}>
                                <p>Tổng thanh toán</p>
                            </div>
                            <div className={cx('col-lg-3 col-md-3', 'd-none d-lg-block d-md-block')}>
                                <p>
                                    <span className={cx('total-quantity')}>{calculateTotalQuantity()}</span> Sản phẩm
                                </p>
                            </div>
                            <div className={cx('col-lg-3 col-md-3', 'total-payment')}>
                                <p>{calculateTotal().toLocaleString('vi-VN')}đ</p>
                            </div>
                            <div className={cx('col-lg-3 col-md-3', 'btn-order')}>
                                <Button
                                    onClick={placeOrder}
                                    primary
                                    small
                                    rightIcon={<FontAwesomeIcon icon={faCaretRight} />}
                                >
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

import React, { useEffect, useRef,useState } from 'react';
import styles from './Order.module.scss'
import classNames from 'classnames/bind';
import Search from '../../../Layout/components/Search';
import ListOrder from './ListOrder/ListOrder';
import OrderItem from '../../../components/OrderItem';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';
import { Simulate } from 'react-dom/test-utils';

const cx = classNames.bind(styles)

function Order() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Apple Macbook Air M1 2022 8GB 256GB', price: 12000000, quantity: 1, checked: false },
        { id: 2, name: 'Apple Macbook Air M2 2023 16GB 256GB', price: 22300000, quantity: 2, checked: false },
        { id: 3, name: 'Máy tính Asus 2023 16GB 256GB', price: 15600000, quantity: 1, checked: false },
        // ...Thêm các sản phẩm khác vào đây
    ]);
    const [isProductsSelected, setIsProductsSelected] = useState(false);

    // chọn từng sản phẩm
    const handleCheckboxChange = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) => (item.id === productId ? { ...item, checked: !item.checked } : item)),
        );
        setIsProductsSelected(true); // Đã chọn ít nhất một sản phẩm
    };

    return (  
        <div className={cx('d-flex', 'page')}>
            <div className={cx('col-lg-3 col-xl-2 d-none d-xl-block', 'sidebar-wrapper')}>
                <SidebarAdmin />
            </div>
            <div className={cx('d-block d-xl-none', 'sidebar-mobi-wrapper')}>
                <SidebarAdminMobi />
            </div>
            <div className={cx('container')}>
                <div className={cx('d-flex align-items-center', 'section')}>Đơn hàng</div>
                <div className={cx('row justify-content-center','col-lg-12')}>
                    <div className={cx('form_order','row justify-content-center','col-lg-11')}>
                        <div className={cx('float-left', 'd-flex')}>
                            <p className={cx('title')}>Đơn hàng</p>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-12')}>
                                <div className={cx('featured__controls')}>
                                    <ul>
                                        <li className={cx('active')} data-filter="*">Chưa giao</li>
                                        <li data-filter=".xacnhan">Đang giao</li>
                                        <li data-filter=".nhandon">Đã giao</li>
                                        <li data-filter=".layhang">Hủy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('col-lg-12')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className={cx('col-lg-8', 'search')}>
                                    <Search/>
                                </div>
                            </div>
                        </div>
                        
                        <div className={cx('row align-items-center', 'cart-detail')}>
                            <ListOrder>
                                {cartItems.map((item) => (
                                    <div className={cx('col-lg-12', 'orderItem')}>
                                        <OrderItem
                                            key={item.id}
                                            checked={item.checked}
                                            itemName={item.name}
                                            itemPrice={item.price}
                                            itemQuantity={item.quantity}
                                            handleCheckboxChange={() => handleCheckboxChange(item.id)}
                                            deleteItem={item.id} // Thêm hàm xóa sản phẩm
                                            increaseQuantity={() => {
                                                
                                            }}
                                            decreaseQuantity={() => {
                                                
                                            }}
                                        />
                                        </div>
                                ))}
                            </ListOrder>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Order;;
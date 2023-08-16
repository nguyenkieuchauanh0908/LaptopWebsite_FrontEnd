import React, { useState } from 'react';
import styles from './Order.module.scss'
import classNames from 'classnames/bind';
import Search from '../../../Layout/components/Search';
import ListOrder from './ListOrder/ListOrder';
import OrderItem from '../../../components/OrderItem';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';

const cx = classNames.bind(styles)

function Order() {
    const [orderItems, setOrderItems] = useState([
        { id: 1, name: 'Apple Macbook Air M1 2022 8GB 256GB', price: 12000000, quantity: 1, address: '1 Vo Van Ngan', phone: '09191912', note:'kem cuc sac' },
        { id: 2, name: 'Apple Macbook Air M2 2023 16GB 256GB', price: 22300000, quantity: 2, address: '1 Vo Van Ngan', phone: '09191912', note:'kem cuc sac' },
        { id: 3, name: 'Máy tính Asus 2023 16GB 256GB', price: 15600000, quantity: 1, address: '1 Vo Van Ngan', phone: '09191912', note:'kem cuc sac' },
        // ...Thêm các sản phẩm khác vào đây
    ]);

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
                        
                        <div className={cx('row align-items-center', 'order-detail')}>
                            <ListOrder>
                                {orderItems.map((item) => (
                                    <div className={cx('col-lg-12', 'orderItem')}>
                                        <OrderItem
                                            key={item.id}
                                            itemName={item.name}
                                            itemPrice={item.price}
                                            itemQuantity={item.quantity}
                                            address={item.address}
                                            phone={item.phone}
                                            note={item.note}
                                            deleteItem={item.id} // Thêm hàm xóa sản phẩm
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
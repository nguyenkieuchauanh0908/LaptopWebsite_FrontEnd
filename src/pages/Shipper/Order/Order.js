import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss'
import classNames from 'classnames/bind';
import Search from '../../../Layout/components/Search';
import ListOrder from './ListOrder/ListOrder';
import OrderItem from '../../../components/OrderItem';
import SidebarShipper from '../../../Layout/components/SidebarShipper';
import SidebarShipperMobi from '../../../Layout/components/SidebarShipper/SidebarShipperMobi';
import * as orderShipperService from '../../../services/shipper/orderShipperService';
import * as profileShipperService from '../../../services/shipper/profileShipperService';
import { Navigate } from 'react-router-dom';

const cx = classNames.bind(styles)

function Order() {
    const [uid, setUid] = useState(null);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const [reloadData, setReloadData] = useState(true);
    const [orderListItems, setOrderListItems] = useState([]);
    const [orderListItemTagCurrent, setOrderListItemTagCurrent] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const token = localStorage.getItem('token'); // Lấy token từ Local Storage
            if (!token) {
                // Xử lý trường hợp token không tồn tại
                setShouldNavigate(true);
                return;
            }
            const user = await profileShipperService.getUser(token);
            setUid(user._id);
        };
        fetchApi();
            
    },[])

    useEffect(() => {
        if (!uid) {
            setReloadData(true);
            return;
        }
        const fetchApi = async () => {
            const result = await orderShipperService.getShipperOrders(uid);
            setOrderListItems(result);
            setOrderListItemTagCurrent(result);
        };
        if (reloadData) {
            fetchApi();
            setReloadData(false); // Đặt lại state để ngăn việc gọi lại liên tục
        }
    }, [reloadData, uid]);

    const [tagCurrent, setTagcurrent] = useState(1);
    const filter = (tag) => {
        setOrderListItemTagCurrent(orderListItems);
        if (tag === 1) {
            setTagcurrent(1);
        }
        if (tag === 2) {
            setTagcurrent(2);
            setOrderListItemTagCurrent((prevOrderListItemTagCurrent) =>
                prevOrderListItemTagCurrent.filter((item) => item._status === 0),
            );
        }
        if (tag === 3) {
            setTagcurrent(3);
            setOrderListItemTagCurrent((prevOrderListItemTagCurrent) =>
                prevOrderListItemTagCurrent.filter((item) => item._status === 1),
            );
        }
        if (tag === 4) {
            setTagcurrent(4);
            setOrderListItemTagCurrent((prevOrderListItemTagCurrent) =>
                prevOrderListItemTagCurrent.filter((item) => item._status === 2),
            );
        }
        if (tag === 5) {
            setTagcurrent(5);
            setOrderListItemTagCurrent((prevOrderListItemTagCurrent) =>
                prevOrderListItemTagCurrent.filter((item) => item._status === 3),
            );
        }
    };
    const [currentPage, setCurrentPage] = useState(1); // page mặc định là 1
    const totalPages = Math.ceil(orderListItemTagCurrent.length / 5); // số page mỗi page 5 item
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
        pageItems.push(i);
    }
    const startIndex = (currentPage - 1) * 5; // item bắt đầu cho mỗi page
    const endIndex = startIndex + 5; // item kết thúc cho mỗi page
    const currentItems = orderListItemTagCurrent.slice(startIndex, endIndex); // item cho page hiện tại

    const comfirmOrder = async (orderId) => {
        const result = await orderShipperService.comfirmOrder(orderId, { _status: 1, _shipperId: uid });
        if (result === 1) {
            setReloadData(true);
        }
    };

    const comfirmItem = (orderId) => {
        const shouldComfirm = window.confirm('Bạn có muốn nhận đơn hàng này không?');
        if (shouldComfirm) {
            comfirmOrder(orderId);
        }
    };

    const updateOrder = async (orderId) => {
        const result = await orderShipperService.updateOrder(orderId, { _status: 2});
        if (result === 1) {
            setReloadData(true);
        }
    };

    const updateItem = (orderId) => {
        const shouldUpdate = window.confirm('Bạn muốn giao đơn này không?');
        if (shouldUpdate) {
            updateOrder(orderId);
        }
    };

    const cancelOrder = async (orderId) => {
        const result = await orderShipperService.updateOrder(orderId, { _status: 3 });
        if (result === 1) {
            setReloadData(true);
        }
    };

    const cancelItem = (orderId) => {
        const shouldCancel = window.confirm('Bạn muốn hủy này không?');
        if (shouldCancel) {
            cancelOrder(orderId);
        }
    };


    return (  
        <div className={cx('d-flex', 'page')}>
            {shouldNavigate ? <Navigate to="/login" /> : null}
            <div className={cx('col-lg-3 col-xl-2 d-none d-xl-block', 'sidebar-wrapper')}>
                <SidebarShipper />
            </div>
            <div className={cx('d-block d-xl-none', 'sidebar-mobi-wrapper')}>
                <SidebarShipperMobi />
            </div>
            <div className={cx('container')}>
                <div className={cx('d-flex align-items-center', 'section')}>Đơn hàng</div>
                <div className={cx('row justify-content-center','col-lg-12')} style={{ marginBottom: '50px'}}>
                    <div className={cx('form_order','row justify-content-center','col-lg-11')}>
                        <div className={cx('float-left', 'd-flex')}>
                            <p className={cx('title')}>Đơn hàng</p>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-12')}>
                                <div className={cx('featured__controls')}>
                                    <ul>
                                        {tagCurrent === 1 ? (
                                            <li className={cx('active')} >Tất cả</li>) : (
                                                <li
                                                    onClick={() => {
                                                        filter(1);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    Tất cả
                                                </li>
                                            )
                                        }
                                        {tagCurrent === 2 ? (
                                            <li className={cx('active')} >Chưa giao</li>) : (
                                                <li
                                                    onClick={() => {
                                                        filter(2);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    Chưa giao
                                                </li>
                                            )
                                        }
                                        {tagCurrent === 3 ? (
                                            <li className={cx('active')} >Đang giao</li>) : (
                                                <li
                                                    onClick={() => {
                                                        filter(3);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    Đang giao
                                                </li>
                                            )
                                        }
                                        {tagCurrent === 4 ? (
                                            <li className={cx('active')} >Đã giao</li>) : (
                                                <li
                                                    onClick={() => {
                                                        filter(4);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    Đã giao
                                                </li>
                                            )
                                        }
                                        {tagCurrent === 5 ? (
                                            <li className={cx('active')} >Hủy</li>) : (
                                                <li
                                                    onClick={() => {
                                                        filter(5);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    Hủy
                                                </li>
                                            )
                                        }
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
                                {currentItems.map((item) => (
                                    <div className={cx('col-lg-12', 'orderItem')}>
                                        <OrderItem
                                            key={item._id}
                                            id={item._id}
                                            cancelItem={() => cancelItem(item._id)}
                                            updateItem={() => updateItem(item._id)}
                                            comfirmItem={() => comfirmItem(item._id)} // Hàm xóa sản phẩm
                                        />
                                        </div>
                                ))}
                            </ListOrder>
                        </div>
                    

                    <div className={cx('d-flex justify-content-center', 'paging')} style={{marginBottom: '30px',marginTop: '20px'}}>
                        {totalPages > 1 ? (
                            <ul className={cx('pagination pagination-lg')}>
                                {currentPage === 1 ? (
                                    <li className={cx('page-item disabled')}>
                                        <span className={cx('page-link')}>Trước</span>
                                    </li>
                                ) : (
                                    <li className={cx('page-item')}>
                                        <span
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                            className={cx('page-link')}
                                        >
                                            Trước
                                        </span>
                                    </li>
                                )}
                                {pageItems.map((index) =>
                                    currentPage === index ? (
                                        <li className={cx('page-item active')}>
                                            <span className={cx('page-link')}>{index}</span>
                                        </li>
                                    ) : (
                                        <li className={cx('page-item')}>
                                            <span
                                                onClick={() => setCurrentPage(index)}
                                                className={cx('page-link')}
                                            >
                                                {index}
                                            </span>
                                        </li>
                                    ),
                                )}
                                {currentPage === totalPages ? (
                                    <li className={cx('page-item disabled')}>
                                        <span className={cx('page-link')}>Sau</span>
                                    </li>
                                ) : (
                                    <li className={cx('page-item')}>
                                        <span
                                            onClick={() => setCurrentPage(currentPage + 1)}
                                            className={cx('page-link')}
                                        >
                                            Sau
                                        </span>
                                    </li>
                                )}
                            </ul>
                            ) : (<ul className={cx('pagination pagination-lg')}>
                                {pageItems.map((index) =>
                                    currentPage === index ? (
                                        <li className={cx('page-item active')}>
                                            <span className={cx('page-link')}>{index}</span>
                                        </li>
                                    ) : (
                                        <li className={cx('page-item')}>
                                            <span
                                                onClick={() => setCurrentPage(index)}
                                                className={cx('page-link')}
                                            >
                                                {index}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul> )}
                        </div>
                    </div>
                                   
                </div>
            </div> 
        </div>
    )
}
export default Order;;
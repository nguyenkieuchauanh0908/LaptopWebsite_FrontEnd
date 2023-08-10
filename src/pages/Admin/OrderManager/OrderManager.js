import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './OrderManager.module.scss';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import ListOrder from './ListOrder';
import OrderListItem from '../../../components/OrderListItem/OrderListItem';
import OrderDetailAdmin from '../../../Layout/components/OrderDetailAdmin';

const cx = classNames.bind(styles);

function OrderManager() {
    const [orderListItems, setOrderListItems] = useState([
        {
            id: 1,
            fullname: 'Trần Thị Trà My',
            address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM',
            phone: '0938049556',
            status: 'Chưa giao',
        },
        {
            id: 2,
            fullname: 'Trần Thị Trà My',
            address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM',
            phone: '0938049556',
            status: 'Chưa giao',
        },
        {
            id: 3,
            fullname: 'Trần Thị Trà My',
            address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM',
            phone: '0938049556',
            status: 'Chưa giao',
        },
        {
            id: 4,
            fullname: 'Trần Thị Trà My',
            address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM',
            phone: '0938049556',
            status: 'Chưa giao',
        },
        {
            id: 5,
            fullname: 'Trần Thị Trà My',
            address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM',
            phone: '0938049556',
            status: 'Chưa giao',
        },
    ]);
    const [tagCurrent, setTagcurrent] = useState(1);

    const [currentPage, setCurrentPage] = useState(1); // page mặc định là 1
    const totalPages = Math.ceil(orderListItems.length / 5); // số page mỗi page 5 item
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
        pageItems.push(i);
    }
    const startIndex = (currentPage - 1) * 5; // item bắt đầu cho mỗi page
    const endIndex = startIndex + 5; // item kết thúc cho mỗi page
    const currentItems = orderListItems.slice(startIndex, endIndex); // item cho page hiện tại

    const [orderDetail, setOrderDetail] = useState(false); // false ở trang danh sách, true là trang chi tiết

    const showOrderDetail = () => {
        setOrderDetail(true);
    };

    const rollbackListOrder = () => {
        setOrderDetail(false);
    };

    return (
        <div className={cx('container-fluid')}>
            <div className={cx('row')}>
                <SidebarAdmin />
                <div className={cx('col-12 col-md-9 col-xl-10 container-fluid', 'content-section')}>
                    {!orderDetail ? (
                        <>
                            <div className={cx('d-flex align-items-center ', 'title')}>Quản lý đơn hàng</div>
                            <div className={cx('wrapper')}>
                                <div className={cx('content')}>
                                    <div className={cx('container-fluid')}>
                                        <div className={cx('d-flex justify-content-center', 'filter')}>
                                            <div class="btn-group btn-group-lg">
                                                {tagCurrent === 1 ? (
                                                    <button type="button" class="btn btn-light btn-outline-dark active">
                                                        Tất cả
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => setTagcurrent(1)}
                                                        type="button"
                                                        class="btn btn-light btn-outline-dark"
                                                    >
                                                        Tất cả
                                                    </button>
                                                )}
                                                {tagCurrent === 2 ? (
                                                    <button type="button" class="btn btn-light btn-outline-dark active">
                                                        Chưa giao
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => setTagcurrent(2)}
                                                        type="button"
                                                        class="btn btn-light btn-outline-dark"
                                                    >
                                                        Chưa giao
                                                    </button>
                                                )}
                                                {tagCurrent === 3 ? (
                                                    <button type="button" class="btn btn-light btn-outline-dark active">
                                                        Đang giao
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => setTagcurrent(3)}
                                                        type="button"
                                                        class="btn btn-light btn-outline-dark"
                                                    >
                                                        Đang giao
                                                    </button>
                                                )}
                                                {tagCurrent === 4 ? (
                                                    <button type="button" class="btn btn-light btn-outline-dark active">
                                                        Đã giao
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => setTagcurrent(4)}
                                                        type="button"
                                                        class="btn btn-light btn-outline-dark"
                                                    >
                                                        Đã giao
                                                    </button>
                                                )}
                                                {tagCurrent === 5 ? (
                                                    <button type="button" class="btn btn-light btn-outline-dark active">
                                                        Đã hủy
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => setTagcurrent(5)}
                                                        type="button"
                                                        class="btn btn-light btn-outline-dark"
                                                    >
                                                        Đã hủy
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <div className={cx('row align-items-center', 'header')}>
                                            <div className={cx('col-lg-1 col-md-1 d-flex justify-content-center')}>
                                                <p>ID</p>
                                            </div>
                                            <div className={cx('col-lg-3 col-md-3 d-flex justify-content-center')}>
                                                <p>Họ và tên</p>
                                            </div>
                                            <div className={cx('col-lg-4 col-md-4 d-flex justify-content-center')}>
                                                <p>Địa chỉ</p>
                                            </div>
                                            <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center')}>
                                                <p>SĐT</p>
                                            </div>
                                            <div className={cx('col-lg-1 col-md-1 d-flex justify-content-center')}>
                                                <p>Trạng thái</p>
                                            </div>
                                            <div className={cx('col-lg-1 col-md-1 d-flex justify-content-center')}>
                                                <p>Thao tác</p>
                                            </div>
                                        </div>
                                        <div className={cx('row align-items-center', 'order-list')}>
                                            <ListOrder>
                                                {currentItems.map((item) => (
                                                    <OrderListItem
                                                        key={item.id}
                                                        fullname={item.fullname}
                                                        address={item.address}
                                                        phone={item.phone}
                                                        status={item.status}
                                                        showOrderDetail={() => showOrderDetail()}
                                                    />
                                                ))}
                                            </ListOrder>
                                        </div>
                                        <div className={cx('d-flex justify-content-center', 'paging')}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <OrderDetailAdmin rollbackListOrder={() => rollbackListOrder()} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default OrderManager;

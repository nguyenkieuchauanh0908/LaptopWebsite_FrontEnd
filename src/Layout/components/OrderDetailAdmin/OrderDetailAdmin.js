import React from 'react';
import styles from './OrderDetailAdmin.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import OrderListDetailItem from '../../../components/OrderListDetailItem';
const cx = classNames.bind(styles);

function OrderDetailAdmin({ rollbackListOrder }) {
    return (
        <>
            <div className={cx('d-flex align-items-center ', 'title')}>
                <a onClick={rollbackListOrder} className={cx('arrow-left-icon')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </a>
                Chi tiết đơn hàng
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row', 'header')}>
                            <div className={cx('col-md-6 col-lg-6 col-6', 'order-code')}>
                                <p>Mã đơn hàng: 1</p>
                            </div>
                            <div
                                className={cx(
                                    'col-md-6 col-lg-6 col-6 d-flex justify-content-end text-primary',
                                    'order-status',
                                )}
                            >
                                <p>Chưa giao</p>
                            </div>
                        </div>
                        <div className={cx('row', 'shipment-details')}>
                            <h2>THÔNG TIN GIAO HÀNG</h2>
                            <h4>Trần Thị Trà My</h4>
                            <p>566 Nguyễn Thái Sơn, F.5, Q.GV, TP.HCM</p>
                            <p>0938049556</p>
                        </div>
                        <div className={cx('row', 'order-details')}>
                            <div className={cx('list-items')}>
                                <OrderListDetailItem />
                                <OrderListDetailItem />
                                <OrderListDetailItem />
                            </div>
                        </div>
                        <div className={cx('row', 'total-fee')}>
                            <div className={cx('col-md-6 col-lg-6')}></div>
                            <div className={cx('col-md-6 col-lg-6')}>
                                <div className={cx('row', 'ship-fee')}>
                                    <div className={cx('col-md-6 col-lg-6 col-6')}>
                                        <h2>Phí vận chuyển: </h2>
                                    </div>
                                    <div className={cx('col-md-6 col-lg-6 col-6')}>
                                        <div className={cx('d-flex justify-content-end')}>
                                            <p>0đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('row', 'order-fee')}>
                                    <div className={cx('col-md-6 col-lg-6 col-6')}>
                                        <h2>Thành tiền: </h2>
                                    </div>
                                    <div className={cx('col-md-6 col-lg-6 col-6')}>
                                        <div className={cx('d-flex justify-content-end')}>
                                            <p>74.999.000đ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('row', 'operation')}>
                            <div className={cx('col-md-8 col-lg-8')}></div>
                            <div className={cx('col-md-4 col-lg-4')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-md-6 col-lg-6 col-6', 'hand-over-btn')}>
                                        <button type="button" className={cx('btn btn-primary', 'custom-large-button')}>
                                            Giao cho shiper
                                        </button>
                                    </div>
                                    <div className={cx('col-md-6 col-lg-6 col-6', 'cancel-btn')}>
                                        <div className={cx('d-flex justify-content-end')}>
                                            <button
                                                type="button"
                                                className={cx('btn btn-danger', 'custom-large-button')}
                                            >
                                                Hủy đơn
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetailAdmin;

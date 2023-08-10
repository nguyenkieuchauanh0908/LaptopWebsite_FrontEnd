import classNames from 'classnames/bind';
import styles from './OrderListDetailItem.module.scss';

const cx = classNames.bind(styles);
function OrderListDetailItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row', 'content')}>
                <div className={cx('col-lg-2 col-md-2')}>
                    <div className={cx('d-flex justify-content-center', 'img-product')}>
                        <img src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg" alt="img-product" />
                    </div>
                </div>
                <div className={cx('col-lg-8 col-md-8', 'decs-product')}>
                    <div className={cx('name-product')}>Apple Macbook Air M2 2022 </div>
                    <div className={cx('classify-product')}>8GB 256GB </div>
                    <div className={cx('quantity')}>x1</div>
                </div>
                <div className={cx('col-lg-2 col-md-2', 'price-product')}>
                    <div className={cx('d-flex justify-content-end align-items-end')}>
                        <p>24.999.000đ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderListDetailItem;

import Image from '../Images';
import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import Button from '../../components/Button';
const cx = classNames.bind(styles);
function OrderItem({
    itemName,
    checked,
    itemPrice,
    itemQuantity,
    increaseQuantity,
    decreaseQuantity,
    handleCheckboxChange,
    deleteItem,
}) {
    // const formattedPrice = price1.toLocaleString('vi-VN'); // '100.000'

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-12', 'd-flex', 'product')}>
                    <div className={cx('col-lg-8', 'd-flex')}>
                        <div className={cx('col-lg-3','product-img', 'text-center')}>
                            <Image
                                src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                                alt="img"
                            />
                        </div>
                        <div className={cx('col-lg-10','product__info')}>
                            <h3 className={cx('product__info-name')}>{itemName}</h3>
                            <div className={cx('product__info-user')}>
                                <p>
                                    Địa chỉ: <span>256GB</span>
                                </p>
                                <p className={cx('color')}>
                                    Liên hệ: <span>Xám bạc</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-lg-4','order__money')}>
                        <p>{(itemPrice * itemQuantity).toLocaleString('vi-VN')}₫</p>
                    </div>
                </div>
                <div className={cx('col-lg-12', 'd-flex', 'under')}>
                    <div className={cx('col-lg-8','product__note')}>
                        <p>
                            Ghi chú: <span>256GB</span>
                        </p>
                        </div>
                    <div className={cx('col-lg-4','button','d-flex')}>
                        <div className={cx('col-lg-6','btn-center')}>
                            <input type='button' className={cx('btn-success')} value={'Nhận đơn'} />
                        </div>
                        <div className={cx('col-lg-6')}>
                            <input type='button' className={cx('btn-cancel')} value={'Hủy'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;

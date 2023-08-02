import Image from '../Images';
import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function CartItem({
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
                <div className={cx('col-lg-6 col-md-6 d-flex')}>
                    <input type="checkbox" checked={checked} onChange={() => handleCheckboxChange()} name="product" />
                    <div className={cx('product', 'd-flex')}>
                        <div className={cx('product-img')}>
                            <Image
                                src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                                alt="img"
                            />
                        </div>
                        <div className={cx('product__info')}>
                            <h3 className={cx('product__info-name')}>{itemName}</h3>
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
                </div>
                <div className={cx('col-lg-6 col-md-6 row align-items-center text-center', 'cart__item-info')}>
                    <div className={cx('col-lg-3 col-md-3', 'cart__item-price')}>
                        <p>{itemPrice.toLocaleString('vi-VN')}</p>
                    </div>
                    <div className={cx('col-lg-3 col-md-3 d-flex justify-content-center', 'cart__item-quantity')}>
                        <a onClick={decreaseQuantity} className={cx('btn-reduce')}>
                            <FontAwesomeIcon icon={faMinus} />
                        </a>
                        <div className={cx('quantity')}>{itemQuantity}</div>
                        <a onClick={increaseQuantity} className={cx('btn-raise')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </a>
                    </div>
                    <div className={cx('col-lg-3 col-md-3', 'cart__item-money')}>
                        <p>{(itemPrice * itemQuantity).toLocaleString('vi-VN')}₫</p>
                    </div>
                    <div className={cx('col-lg-3 col-md-3', 'cart__item-delete')}>
                        <a onClick={deleteItem} className={cx('delete')}>
                            Xóa
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

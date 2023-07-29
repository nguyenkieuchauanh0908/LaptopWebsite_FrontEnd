import Image from '../Images';
import classNames from 'classnames/bind';
import styles from './CartItemCheckOut.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import ListGift from '../../pages/CheckOut/ListGift';
import GiftItem from './GiftItem';
const cx = classNames.bind(styles);
function CartItemCheckOut() {
    return (
        <div className={cx('wrapper', 'd-flex flex-column')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-6 col-md-6 d-flex')}>
                    <div className={cx('product', 'd-flex')}>
                        <div className={cx('product-img')}>
                            <Image
                                src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                                alt="img"
                            />
                        </div>
                        <div className={cx('product__info')}>
                            <h3 className={cx('product__info-name')}>Apple Macbook Air M2 2022 8GB 256GB</h3>
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
                        <p>1.490.000₫</p>
                    </div>
                    <div className={cx('col-lg-3 col-md-3', 'cart__item-quantity')}>
                        <div className={cx('quantity')}>5</div>
                    </div>
                    <div className={cx('col-lg-3 col-md-3', 'cart__item-money')}>
                        <p>12.490.000₫</p>
                    </div>
                    <div className={cx('col-lg-3 col-md-3', 'cart__item-delete')}>
                        <a className={cx('delete')}>Xóa</a>
                    </div>
                </div>
            </div>
            <div className={cx('cart__gift')}>
                <div className={cx('cart__gift-title', 'd-flex')}>
                    <FontAwesomeIcon icon={faGift} />
                    <h3>Quà tặng</h3>
                </div>
                <div className={cx('cart__gift-item')}>
                    <ListGift>
                        <GiftItem />
                        <GiftItem />
                        <GiftItem />
                    </ListGift>
                </div>
            </div>
        </div>
    );
}

export default CartItemCheckOut;

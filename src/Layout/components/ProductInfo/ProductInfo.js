import React from "react"
import styles from './ProductInfo.module.scss'
import classNames from "classnames/bind"
import {
    AddIcon,
    MinusIcon
} from '../../../components/Icons'

const cx = classNames.bind(styles)
function ProductInfo(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('flex-item', 'pInfo')}>
                <p className={cx('pName')}>{props.name}</p>
                <p className={cx('pBrand-wrapper')}>Thương hiệu: <span className={cx('pBrandName')}>{props.brand}</span></p>
                <div className={cx('price-group')}>
                    <p className={cx('pNewPrice')}>{(props.oldPrice - props.oldPrice * (props.salePercents / 100)).toLocaleString('vi-VN')}đ</p>
                    <p className={cx('pOldPrice')}>{props.oldPrice.toLocaleString('vi-VN')}đ</p>
                </div>
                <p className={cx('pStatus-wrapper')}>Tình trạng: <span className={cx('pStatus')}>{
                    props.status === 'Selling' ? 'Còn hàng' : 'Hết hàng'
                }</span></p>
            </div>
            <div className={cx('flex-item', 'pChooseQuantity')}>
                <p className={cx('choose-quantity-title')}>Chọn số lượng: </p>
                <div className={cx('choose-quantity-wrapper')}>
                    <div className={cx('minus-wrapper')}>
                        <MinusIcon />
                    </div>
                    <div className={cx('quantity-wrapper')}>
                        <input className={cx('quantity')} type="text" value={1} role="spinbutton"></input>
                    </div>
                    <div className={cx('add-wrapper')}>
                        <AddIcon />
                    </div>

                </div>

            </div>
            <div className={cx('flex-item', 'buttons-group')}>
                <button type="button" className={cx('btn', 'buy-btn')}>Mua ngay</button>
                <button type="button" className={cx('btn', 'add-to-cart-btn')}>Thêm vào giỏ</button>
            </div>
        </div>
    )
}

export default ProductInfo
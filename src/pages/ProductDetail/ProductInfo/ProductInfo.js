import React from "react"
import { useState } from 'react';
import styles from './ProductInfo.module.scss'
import classNames from "classnames/bind"
import {
    AddIcon,
    MinusIcon
} from '../../../components/Icons'
import { Link, Navigate } from "react-router-dom";

const cx = classNames.bind(styles)
function ProductInfo(props) {

    const [quantity, setQuantity] = useState(1)

    const handleAddQuantity = () => {
        if (props.quantity === 0) {
            alert('Sản phẩm hiện tại hết hàng, vui lòng quay lại sau!')
        }
        else {
            quantity < props.quantity ? setQuantity(prevQuantity => prevQuantity + 1) : alert("Không được vượt quá số lượng sản phẩm trong kho")
        }

    }

    const handleMinusQuantity = () => {
        if (props.quantity === 0) {
            alert('Sản phẩm hiện tại hết hàng, vui lòng quay lại sau!')
        }
        else {
            if (quantity > 1) {
                setQuantity(prevQuantity => prevQuantity - 1)
            }
        }
    }

    const handleAddToCartClick = async (itemId, itemQuantity = 1) => {
        if (props.quantity === 0) {
            alert('Sản phẩm hiện tại hết hàng, vui lòng quay lại sau!')
        }
        else {
            try {
                // Tạm gửi mặc định tới giỏ hàng của người dùng có uId là 64f84600ef680604b20625cb
                const response = await fetch('/api/carts/64f84600ef680604b20625cb/add-to-cart', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "itemId": itemId,
                        "quantity": itemQuantity
                    }),
                });

                if (response.ok) {
                    console.log('Item added to cart successfully');
                } else {
                    console.error('Failed to add item to cart');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                console.log('Done!')
            }
        }




    }

    const handleCheckOutClick = () => {
        if (props.quantity === 0) {
            alert('Sản phẩm hiện tại hết hàng, vui lòng quay lại sau!')
        }
    }


    return (
        <div className={cx('wrapper')}>
            <div className={cx('flex-item', 'pInfo')}>
                <p className={cx('pName')}>{props.name}</p>
                <p className={cx('pBrand-wrapper')}>Thương hiệu: <span className={cx('pBrandName')}>{props.brand}</span></p>
                <div className={cx('price-group')}>
                    <p className={cx('pNewPrice')}>{(props.oldPrice - props.oldPrice * (props.salePercents / 100)).toLocaleString('vi-VN')}đ</p>
                    <p className={cx('pOldPrice')}>{props.oldPrice.toLocaleString('vi-VN')}đ</p>
                </div>
                {
                    props.quantity === 0 ? <p className={cx('pStatus-wrapper')}>Tình trạng: <span className={cx('pStatus')}> Hết hàng</span ></p> : <p className={cx('pStatus-wrapper')}>Số lượng kho: <span className={cx('pStatus')}> {props.quantity} </span ></p>

                }


            </div >
            <div className={cx('flex-item', 'pChooseQuantity')}>
                <p className={cx('choose-quantity-title')}>Chọn số lượng: </p>
                <div className={cx('choose-quantity-wrapper')}>
                    <div className={cx('minus-wrapper')} onClick={() => handleMinusQuantity()}>
                        <MinusIcon />
                    </div>
                    <div className={cx('quantity-wrapper')}>
                        <input className={cx('quantity')} type="text" value={quantity} role="spinbutton"></input>
                    </div>
                    <div className={cx('add-wrapper')} onClick={() => handleAddQuantity()}>
                        <AddIcon />
                    </div>

                </div>

            </div>
            <div className={cx('flex-item', 'buttons-group')}>

                <button type="button" className={cx('btn', 'buy-btn')} onClick={() => handleCheckOutClick}><Link to={'/cart/checkout'}>Mua ngay</Link></button>
                <button type="button" className={cx('btn', 'add-to-cart-btn')} onClick={() => handleAddToCartClick(props.pId, quantity)}>Thêm vào giỏ</button>
            </div>
        </div >
    )
}

export default ProductInfo
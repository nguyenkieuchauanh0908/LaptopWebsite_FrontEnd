import { useEffect, useState } from 'react';
import Image from '../Images';
import classNames from 'classnames/bind';
import styles from './OrderItemDetail.module.scss';

const cx = classNames.bind(styles);
function OrderItemDetail({ id, quantity }) {
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetch(`http://localhost:5000/api/products/${id}`);
            const product = await result.json();
            console.log(product);
            setProduct(product);
            setPrice((product._price * quantity).toLocaleString('vi-VN'));
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('col-lg-12','d-flex','product')}>
            <div className={cx('col-lg-3','product-img', 'text-center')}>
                <Image
                    src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                    alt="img"
                />
            </div>
            <div className={cx('col-lg-10','product__info')}>
                <h3 className={cx('product__info-name')}>{product._name} (x{quantity})</h3>
                <div className={cx('product__info-user')}>
                    <p className={cx('color')}>
                        Giá: <span>{price}đ</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderItemDetail;
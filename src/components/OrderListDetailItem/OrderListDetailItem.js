import classNames from 'classnames/bind';
import styles from './OrderListDetailItem.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function OrderListDetailItem({ id, quantity }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetch(`http://localhost:5000/api/products/${id}`);
            const product = await result.json();
            console.log(product);
            setProduct(product);
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row', 'content')}>
                <div className={cx('col-lg-2 col-md-2')}>
                    <div className={cx('d-flex justify-content-center', 'img-product')}>
                        <img
                            src="https://res.cloudinary.com/dawwzvnhe/image/upload/v1692778654/src/images/products/Monitor/Dell/LCD_S2421H/front1_zcl5i8.webp"
                            alt="img-product"
                        />
                    </div>
                </div>
                <div className={cx('col-lg-8 col-md-8', 'decs-product')}>
                    <div className={cx('name-product')}>
                        <p>{product._name}</p>
                    </div>
                    <div className={cx('classify-product')}>8GB 256GB </div>
                    <div className={cx('quantity')}>x{quantity}</div>
                </div>
                <div className={cx('col-lg-2 col-md-2', 'price-product')}>
                    <div className={cx('d-flex justify-content-end align-items-end')}>
                        <p>{product._price}đ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderListDetailItem;

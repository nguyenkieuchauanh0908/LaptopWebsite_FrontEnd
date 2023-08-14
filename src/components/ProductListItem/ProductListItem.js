import classNames from 'classnames/bind';
import styles from './ProductListItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
const cx = classNames.bind(styles);
function ProductListItem({ product, price, quantity, editItem, hideItem }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-1 col-md-1 d-flex justify-content-center text-truncate')}>
                    <p>ID</p>
                </div>
                <div className={cx('col-lg-5 col-md-5 d-flex', 'product')}>
                    <div className={cx('col-lg-2','text-center','product-img')} style={{ marginRight: '10px' }}>
                        <Image
                            src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                            alt="img"
                        />
                    </div>
                    <p>{product}</p>
                </div>
                <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center text-truncate')}>
                    <p>{price}</p>
                </div>
                <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center')}>
                    <p>{quantity}</p>
                </div>
                <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center', 'item-delete')}>
                    <a onClick={editItem} className={cx('edit')}>
                        <FontAwesomeIcon icon={faPencil} />
                    </a>
                    <a onClick={hideItem} className={cx('hide')}>
                        <FontAwesomeIcon icon={faTrash} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductListItem;

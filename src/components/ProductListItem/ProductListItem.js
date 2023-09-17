import classNames from 'classnames/bind';
import styles from './ProductListItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faPencil } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
const cx = classNames.bind(styles);
function ProductListItem({ pId, product, price, quantity, editItem, hideItem }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-1 col-md-1', 'center')}>
                    <p style={{ padding: '2px', wordWrap: 'break-word', width:'100%',textAlign:'center'}}>{pId}</p>
                </div>
                <div className={cx('col-lg-5 col-md-5 d-flex', 'product')}>
                    <div className={cx('col-lg-2','text-center','product-img')} style={{ marginRight: '10px', maxWidth: '20%' }}>
                        <Image
                            src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                            alt="img"
                        />
                    </div>
                    <p className={cx('product-name')}>{product}</p>
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
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductListItem;

import classNames from 'classnames/bind';
import styles from './CustomerListItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function CustomerListItem({ fullname, phone, address, deleteItem }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-1 col-md-1 d-flex justify-content-center text-truncate')}>
                    <p>ID</p>
                </div>
                <div className={cx('col-lg-3 col-md-3 d-flex justify-content-center')}>
                    <p>{fullname.toLocaleString('vi-VN')}</p>
                </div>
                <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center text-truncate')}>
                    <p>{phone}</p>
                </div>
                <div className={cx('col-lg-4 col-md-4 d-flex justify-content-center')}>
                    <p>{address}</p>
                </div>
                <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center', 'item-delete')}>
                    <a onClick={deleteItem} className={cx('delete')}>
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CustomerListItem;

import classNames from 'classnames/bind';
import styles from './CheckOut.module.scss';
const cx = classNames.bind(styles);
function CheckOut() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}></div>
        </div>
    );
}

export default CheckOut;

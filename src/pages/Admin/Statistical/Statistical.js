import styles from './Statistical.module.scss';
import classNames from 'classnames/bind';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
const cx = classNames.bind(styles);
function Statistical() {
    return (
        <div className={cx('container-fluid')}>
            <div className={cx('row')}>
                <SidebarAdmin />
                <div className={cx('col-12 col-md-9 col-xl-10 container-fluid', 'content-section')}>
                    <div className={cx('d-flex align-items-center ', 'title')}>Thống kê</div>
                    <div className={cx('wrapper')}>
                        <div className={cx('content')}>
                            <div className={cx('container-fluid')}>
                                <div className={cx('row')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistical;

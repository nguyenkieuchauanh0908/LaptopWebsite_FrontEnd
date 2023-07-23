import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { PhoneIcon, MailIcon, TruckIcon, GuaranteeIcon, QuanlityIcon, MenuIcon } from '../../../components/Icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'header__top')}>
                        <div className={cx('col-md-6 col-lg-6 d-flex align-items-center')}>
                            <div className={cx('header__top-item-1', 'd-flex align-items-center')}>
                                <PhoneIcon />
                                <div className={cx('header__top-item-text')}>Hotline 1900 2098 - 0898109810</div>
                            </div>
                            <div className={cx('header__top-item-1', 'd-flex align-items-center')}>
                                <MailIcon />
                                <div className={cx('header__top-item-text')}>Email contact@gmail.com</div>
                            </div>
                        </div>
                        <div className={cx('col-md-6 col-lg-6 d-flex align-items-center justify-content-end')}>
                            <div className={cx('header__top-item-2', 'd-flex align-items-center')}>
                                <TruckIcon />
                                <div className={cx('header__top-item-text')}>Giao hàng tận nơi</div>
                            </div>
                            <div className={cx('header__top-item-2', 'd-flex align-items-center')}>
                                <GuaranteeIcon />
                                <div className={cx('header__top-item-text')}>Bảo hành chính hãng</div>
                            </div>
                            <div className={cx('header__top-item-2', 'd-flex align-items-center')}>
                                <QuanlityIcon />
                                <div className={cx('header__top-item-text')}>Sản phẩm chất lượng</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row align-items-center', 'header__bot')}>
                        <div className={cx('header__bot-nav', 'd-flex align-items-center')}>
                            <div className={cx('logo')}>
                                <img src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg" />
                            </div>
                            <div className={cx('menu', 'd-flex align-items-center')}>
                                <MenuIcon />
                                <div className={cx('menu-text')}>Danh Mục</div>
                            </div>
                            <div className={cx('search')}>
                                <input placeholder="Search" spellCheck={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import {
    PhoneIcon,
    MailIcon,
    TruckIcon,
    GuaranteeIcon,
    QuanlityIcon,
    MenuIcon,
    CartIcon,
    UserIcon,
    NotificationIcon,
} from '../../../components/Icons';
import Image from '../../../components/Images';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { wrapper as PopperWapper } from '../../../Layout/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Header() {
    const renderPreview = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs} style={{ background: '#fff' }}>
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWapper className={cx('menu-wrapper')}>
                    <h2>Danh mục 1</h2>
                    <h2>Danh mục 2</h2>
                    <h2>Danh mục 3</h2>
                </PopperWapper>
            </div>
        </div>
    );
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
                        <div className={cx('header__bot-nav', 'd-flex align-items-center justify-content-between')}>
                            <div
                                className={cx(
                                    ' d-flex align-items-center justify-content-between',
                                    'header__bot-nav-left',
                                )}
                            >
                                <div className={cx('logo')}>
                                    <Image
                                        src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg"
                                        alt="logo"
                                    />
                                </div>
                                <Tippy interactive render={renderPreview} placement="bottom-start" hideOnClick>
                                    <div className={cx('menu', 'd-flex align-items-center')}>
                                        <MenuIcon />
                                        <div className={cx('menu-text')}>Danh Mục</div>
                                    </div>
                                </Tippy>
                            </div>
                            <div className={cx(' d-flex align-items-center justify-content-between', 'search')}>
                                <Search />
                            </div>

                            <div
                                className={cx(
                                    'd-flex align-items-center justify-content-between',
                                    'header__bot-nav-right',
                                )}
                            >
                                <div className={cx('notification', 'd-flex align-items-center')}>
                                    <NotificationIcon />
                                    <div className={cx('nav__text')}>
                                        <p>Thông báo</p>
                                    </div>
                                </div>
                                <div className={cx('account', 'd-flex align-items-center')}>
                                    <UserIcon />

                                    <div className={cx('nav__text')}>
                                        <p className={cx('nav__text-login')}>Đăng nhập</p>
                                        <div className={cx('d-flex')}>
                                            <p>Tài khoản</p>
                                            <FontAwesomeIcon icon={faSortDown} className={cx('icon-down')} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('cart', 'd-flex align-items-center justify-content-center')}>
                                    <CartIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

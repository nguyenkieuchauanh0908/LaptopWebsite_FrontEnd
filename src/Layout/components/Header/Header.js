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
} from '../../../components/Icons';
import Image from '../../../components/Images';
import MobileMenu from './MobileMenu';
import { faSortDown, faBars, faCartShopping, faHeadphonesSimple, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search';
import Menu from '../../Popper/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };
    const handleMenuOnchange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle langue
                break;
            default:
        }
    };

    const userMenut = [
        {
            title: 'MacBook',
            to: '/macbook',
        },
        {
            title: 'Dell',
            to: '/dell',
        },
        {
            title: 'Lenovo',
            to: '/lenovo',
        },
        {
            title: 'Asus',
            to: '/asus',
        },
        {
            title: 'Xem tất cả',
            to: '/danhmuc',
            separate: true,
        },
    ];
    return (
        <header>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'header__top')}>
                        <div className={cx('col-md-12 col-lg-6 d-flex align-items-center')}>
                            <div className={cx('header__top-item-1', 'd-flex align-items-center')}>
                                <PhoneIcon />
                                <div className={cx('header__top-item-text')}>Hotline 1900 2098 - 0898109810</div>
                            </div>
                            <div className={cx('header__top-item-1', 'd-flex align-items-center')}>
                                <MailIcon />
                                <div className={cx('header__top-item-text')}>Email contact@gmail.com</div>
                            </div>
                        </div>
                        <div className={cx('d-none col-lg-6 d-lg-flex align-items-center justify-content-between')}>
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
                                <Link to={'/'} className={cx('logo')}>
                                    <Image
                                        className={cx('d-none d-lg-flex')}
                                        src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg"
                                        alt="logo"
                                    />
                                    <Image
                                        className={cx('d-lg-none')}
                                        src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo.svg"
                                        alt="logo"
                                    />
                                </Link>
                                <Menu items={userMenut} onChange={handleMenuOnchange}>
                                    <div className={cx('menu', 'd-flex align-items-center')}>
                                        <MenuIcon />
                                        <div className={cx('menu-text')}>
                                            <span style={{ whiteSpace: 'nowrap' }}>Danh Mục</span>
                                        </div>
                                    </div>
                                </Menu>
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
                                    <FontAwesomeIcon className={cx('icon-notification')} icon={faBell} />
                                    <div className={cx('nav__text', 'd-none d-lg-block')}>
                                        <p>Thông báo</p>
                                    </div>
                                </div>
                                <div className={cx('account', 'd-flex align-items-center')}>
                                    <FontAwesomeIcon className={cx('icon-user')} icon={faCircleUser} />
                                    <div className={cx('nav__text', 'd-none d-lg-block')}>
                                        <p className={cx('nav__text-login')}>Đăng nhập</p>
                                        <div className={cx('d-flex')}>
                                            <p>Tài khoản</p>
                                            <FontAwesomeIcon icon={faSortDown} className={cx('icon-down')} />
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to={'/cart'}
                                    className={cx('cart', 'd-flex align-items-center justify-content-center')}
                                >
                                    <CartIcon />
                                    <div className={cx('cart-quantity')}>3</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobi */}
            <div className={cx('header__mobi')}>
                <div className={cx('header')}>
                    <div className={cx('row d-flex', 'header__mobi-top')} style={{ marginBottom: '8px' }}>
                        <div className={cx('col-3')}>
                            <a onClick={toggleMenu}>
                                <FontAwesomeIcon className={cx('header-icon')} icon={faBars} />
                            </a>
                        </div>
                        <div className={cx('col-6')}>
                            <Link to={'/'} className={cx('logo')}>
                                <Image
                                    src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-mobile.svg"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className={cx('col-3 d-flex justify-content-end')} style={{ gap: '20px' }}>
                            <div className={cx('cart')}>
                                <Link to={'/cart'}>
                                    <FontAwesomeIcon className={cx('header-icon')} icon={faCartShopping} />
                                </Link>
                                <div className={cx('cart-quantity')}>3</div>
                            </div>
                            <div className={cx('account')}>
                                <FontAwesomeIcon className={cx('header-icon')} icon={faCircleUser} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('row', 'header__mobi-bot')}>
                        <div className={cx(' d-flex align-items-center justify-content-between', 'search')}>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;

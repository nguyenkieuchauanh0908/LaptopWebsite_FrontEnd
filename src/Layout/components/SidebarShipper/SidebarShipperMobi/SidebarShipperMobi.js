import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarShipperMobi.module.scss';
import { SidebarShipperNavMobi } from './SidebarShipperNavMobi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);

function SidebarShipperMobi() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };
    return (
        <>
            <div className={cx('col-2 d-flex align-items-center', 'sidebar-wrapper')}>
                <a onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
            <div>
                <a onClick={toggleMenu} className={cx('menu-mobi', `${isMenuOpen ? 'openmenu' : ''}`)}></a>
                <div className={cx('side-menu', `${isMenuOpen ? 'open' : ''}`)}>
                    <div className={cx('d-flex justify-content-end', 'close-button')}>
                        <a onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faXmark} />
                        </a>
                    </div>
                    <ul>
                        {SidebarShipperNavMobi.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    className={cx('nav-item')}
                                    onClick={() => {
                                        window.location.pathname = val.to;
                                    }}
                                >
                                    <span>
                                        <span className={cx('nav-item__link')}>{val.title}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={cx('sign-out')}>
                        <span>Đăng xuất</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarShipperMobi;

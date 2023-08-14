import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarAdmin.module.scss';
import Image from '../../../components/Images';
import { SignOutIcon } from '../../../components/Icons';
import { SidebarAdminNav } from './SidebarAdminNav';
const cx = classNames.bind(styles);
function SidebarAdmin() {
    return (
        <div className={cx(' d-flex flex-column justify-content-between', 'sidebar-wrapper')}>
            <div>
                <div className={cx('d-flex align-items-center justify-content-center', 'profil')}>
                    <div className={cx('logo')}>
                        <Image src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg" alt="logo" />
                    </div>
                </div>
                <div className={cx('nav')}>
                    <ul className={cx('nav-list')}>
                        {SidebarAdminNav.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    className={cx('nav-item')}
                                    id={window.location.pathname === val.to ? cx('active') : ''}
                                    onClick={() => {
                                        window.location.pathname = val.to;
                                    }}
                                >
                                    <span>
                                        {val.icon !== null ? val.icon : null}
                                        <span> </span>
                                        <span className={cx('nav-item__link')}>{val.title}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={cx('d-flex align-items-center justify-content-center text-bg-primary', 'sign-out')}>
                <SignOutIcon />
            </div>
        </div>
    );
}

export default SidebarAdmin;

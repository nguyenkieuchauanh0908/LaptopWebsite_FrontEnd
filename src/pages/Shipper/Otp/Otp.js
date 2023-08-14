import React, { useEffect, useRef } from 'react';
import styles from './Otp.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';

const cx = classNames.bind(styles)

function Otp() {
    return (  
        <div className={cx('d-flex', 'page')}>
            <div className={cx('col-lg-3 col-xl-2 d-none d-xl-block', 'sidebar-wrapper')}>
                <SidebarAdmin />
            </div>
            <div className={cx('d-block d-xl-none', 'sidebar-mobi-wrapper')}>
                <SidebarAdminMobi />
            </div>
            <div class={cx('container')}>
                <div className={cx('d-flex align-items-center', 'section')}>Mật khẩu</div>
                <div className={cx('row justify-content-center','col-lg-12')}>
                    <div className={cx('form_profile','row justify-content-center','col-lg-11')}>
                        <div class={cx('float-left', 'd-flex')}>
                            <FontAwesomeIcon icon={faArrowLeft} class={cx('icon')} />
                            <p class={cx('title')}>Xác minh tài khoản</p>
                        </div>
                        <div class="row justify-content-center">
                            <div class={cx('d-inline')}>
                                <div class={cx('label')}>
                                    <p>
                                        Mã OTP được gửi đến email ngkhacduong@gmail.com
                                    </p>
                                    <p>
                                        Nhập mã OTP gồm 6 chữ số
                                    </p>
                                </div>
                                <form action="/Web/editProfile">
                                    <div class={cx('otp__input')}>
                                        <input type="text" class={cx('form-control')} value="123456"
                                            name="oldpass" required="" />
                                    </div>

                                    <div class={cx('button_Luu')} style={{ padding: '15px' }}>
                                        <input type="button" value="Xác nhận" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}
export default Otp;
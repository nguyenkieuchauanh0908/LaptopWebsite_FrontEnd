import React, { useEffect, useRef } from 'react';
import styles from './ChangePass.module.scss'
import classNames from 'classnames/bind';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';

const cx = classNames.bind(styles)

function ChangePass() {
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
                        <div class={cx('float-left')}>
                            <p class={cx('title')}>Đổi mật khẩu</p>
                        </div>
                        <div class="row justify-content-center">
                            <form action="/Web/editProfile">
                                <div class={cx('d-inline')}>
                                    <div class={cx('profile__input', 'd-flex')}>
                                    <p>
                                        Mật khẩu cũ
                                    </p>
                                    <input type="text" class={cx('form-control')} value=""
                                        name="oldpass" required="" />
                                    </div>
                                    <div class={cx('profile__input', 'd-flex')}>
                                    <p>
                                        Mật khẩu mới
                                    </p>
                                    <input type="text" class={cx('form-control')} value=""
                                        name="newpass" required="" />
                                    </div>
                                    <div class={cx('profile__input', 'd-flex')}>
                                    <p>
                                        Nhập lại mật khẩu
                                    </p>
                                    <input type="text" class={cx('form-control')} value=""
                                        name="repass" required="" />
                                    </div>
                                    
                                    <div class={cx('button_Luu')} style={{ padding: '15px' }}>
                                        <input type="button" value="Xác nhận" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default ChangePass;
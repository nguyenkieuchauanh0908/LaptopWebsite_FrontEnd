import React from 'react';
import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import { GoogleIcon, FacebookIcon } from '../../components/Icons';

const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx('form-wrapper')}>
            <form className={cx('loginForm')}>
                <p className={cx('form-title')}>Đăng nhập</p>
                <div className={cx('input-wrapper')}>
                    <div className={cx('input-wrapper-item')}>
                        <label className={cx('form-label')} for="email"> Email </label>
                        <input className={cx('form-input')} type="text" id="email" name="email" placeholder='Nhâp email'></input>
                    </div>
                    <div className={cx('input-wrapper-item')}>
                        <label className={cx('form-label')} for="pw">Mật khẩu</label>
                        <input className={cx('form-input')} type="password" id="pw" name="pw" placeholder='Nhập mật khẩu'></input>
                    </div>
                </div>
                <div className={cx('redirect-options', 'option-SignUp')}>
                    <p>Chưa có tài khoản? <a href=''>Đăng ký ngay</a></p>
                </div>
                <div className={cx('btns-group-control')}>
                    <div className={cx('btn', 'btn-SignIn')} type="button">Đăng nhập</div>
                    <p className={cx('options-title')}>-Or-</p>
                    <div className={cx('option-signIn')}>
                        <div className={cx('btn', 'btn-SignIn-google')} type="button">
                            <GoogleIcon />
                            Đăng nhập bằng Gmail
                        </div>
                        <div className={cx('btn', 'btn-SignIn-facebook')} type="button">
                            <FacebookIcon width='24' height='24' />
                            Đăng nhập bằng Facebook
                        </div>
                    </div>

                </div>
                <div className={cx('redirect-options', 'option-forgetPw')}>
                    <p>Quên mật khẩu? <a href=''>Đặt lại mật khẩu ngay</a></p>
                </div>
            </form>
        </div>

    )
}

export default Login;

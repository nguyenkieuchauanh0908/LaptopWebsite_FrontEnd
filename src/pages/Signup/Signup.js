import React from 'react';
import styles from './Signup.module.scss'
import classNames from 'classnames/bind';
import { GoogleIcon, FacebookIcon } from '../../components/Icons';

const cx = classNames.bind(styles)

function Signup() {
    return (
        <div className={cx('form-wrapper')}>
            <form className={cx('loginForm')}>
                <p className={cx('form-title')}>Đăng ký</p>
                <div className={cx('input-wrapper')}>
                    <div>
                        <div className={cx('input-wrapper-item')}>
                            <label className={cx('form-label')} for="fName"> Họ </label>
                            <input className={cx('form-input')} type="text" id="fName" name="fName" placeholder='Nhập họ'></input>
                        </div>
                        <div className={cx('input-wrapper-item')}>
                            <label className={cx('form-label')} for="lName"> Tên </label>
                            <input className={cx('form-input')} type="text" id="lName" name="lName" placeholder='Nhập tên'></input>
                        </div>
                    </div>

                    <div className={cx('input-wrapper-item')}>
                        <label className={cx('form-label')} for="email"> Email </label>
                        <input className={cx('form-input')} type="text" id="email" name="email" placeholder='Nhập email'></input>
                    </div>
                    <div className={cx('input-wrapper-item')}>
                        <label className={cx('form-label')} for="pw">Mật khẩu</label>
                        <input className={cx('form-input')} type="password" id="pw" name="pw" placeholder='Nhập mật khẩu'></input>
                    </div>
                </div>
                <div className={cx('redirect-options', 'option-SignUp')}>
                    <p>Đã có tài khoản? <a href=''>Đăng nhập ngay</a></p>
                </div>
                <div className={cx('btns-group-control')}>
                    <div className={cx('btn', 'btn-SignIn')} type="button">Đăng ký</div>
                    <p className={cx('options-title')}>-Or-</p>
                    <div className={cx('option-signIn')}>
                        <div className={cx('btn', 'btn-SignIn-google')} type="button">
                            <GoogleIcon />
                            Đăng ký bằng Gmail
                        </div>
                        <div className={cx('btn', 'btn-SignIn-facebook')} type="button">
                            <FacebookIcon />
                            Đăng ký bằng Facebook
                        </div>
                    </div>

                </div>

            </form>
        </div>

    )
}

export default Signup;

import React from 'react';
import { useState } from 'react';
import styles from './Signup.module.scss'
import classNames from 'classnames/bind';
import { GoogleIcon, FacebookIcon } from '../../components/Icons';

const cx = classNames.bind(styles)

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (email) => {
        setEmail(email)
        return checkEmailValid(email)
    }
    const handlePassword = (password) => {
        setPassword(password)
        return checkPasswordComplexity(password)
    }

    const checkEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const checkPasswordComplexity = (password) => {
        // Password should be at least 8 characters long
        if (password.length < 8) {
            return false;
        }

        // Password should contain at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            return false;
        }

        // Password should contain at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            return false;
        }

        // Password should contain at least one digit
        if (!/\d/.test(password)) {
            return false;
        }

        // Password should contain at least one special character
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            return false;
        }

        return true;
    }



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
                            <FacebookIcon width='24' height='24' />
                            Đăng ký bằng Facebook
                        </div>
                    </div>

                </div>

            </form>
        </div>

    )
}

export default Signup;

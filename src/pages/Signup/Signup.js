import React from 'react';
import { useState } from 'react';
import styles from './Signup.module.scss'
import classNames from 'classnames/bind';
import { GoogleIcon, FacebookIcon } from '../../components/Icons';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

function Signup() {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const [sucessMessage, setSucessMessage] = useState('');
    const [fNameError, setFNameError] = useState('')
    const [lNameError, setLNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [mailError, setMailError] = useState('')



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

    const hasDiacritics = (name) => {
        // Regular expression to match diacritics
        const diacriticsRegex = /[À-ÿ]/; // Range of characters with diacritics

        return diacriticsRegex.test(name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('')
        setMailError('')
        setPasswordError('')
        setFNameError('')
        setLNameError('')
        if (fName !== '' && lName !== '' && password !== '' && email !== '') {
            if (checkEmailValid(email) && checkPasswordComplexity(password) && !hasDiacritics(fName) && !hasDiacritics(lName)) {
                setSucessMessage('Đăng ký thành công!')
                setError('')
                setMailError('')
                setPasswordError('')
                setFNameError('')
                setLNameError('')
            }
            else {
                setSucessMessage('')
                if (!checkEmailValid(email))
                    setMailError('Email không đúng định dạng!')
                if (!checkPasswordComplexity(password))
                    setPasswordError('Mật khẩu dài ít nhất 8 ký tự, tối đa 20 ký tự, phải bao gồm số, chữ hoa, chữ thường và ký tự đặc biệt!')
                if (hasDiacritics(fName))
                    setFNameError('Vui lòng dùng chữ không dấu!')
                if (hasDiacritics(lName))
                    setLNameError('Vui lòng dùng chữ không dấu!')
            }
        } else {

            setError('Vui lòng điền đầy đủ thông tin!')
        }

    }

    return (
        <div className={cx('form-wrapper')}>
            <form className={cx('loginForm')} onSubmit={handleSubmit}>
                <p className={cx('form-title')}>Đăng ký</p>
                <div className={cx('input-wrapper')}>
                    <div>
                        <div className={cx('input-wrapper-item')}>
                            <label className={cx('form-label')} for="fName"> Họ </label>
                            <input className={cx('form-input')} type="text" id="fName" name="fName" placeholder='Nhập họ' onChange={(e) => setFName(e.target.value)}></input>
                            {fNameError && <p className={cx('form-error-message', 'form-error')}>{fNameError}</p>}
                        </div>
                        <div className={cx('input-wrapper-item')}>
                            <label className={cx('form-label')} for="lName"> Tên </label>
                            <input className={cx('form-input')} type="text" id="lName" name="lName" placeholder='Nhập tên' onChange={(e) => setLName(e.target.value)}></input>
                            {lNameError && <p className={cx('form-error-message', 'form-error')}>{lNameError}</p>}
                        </div>
                    </div>

                    <div className={cx('input-wrapper-item')}>
                        <label className={cx('form-label')} for="email"> Email </label>
                        <input className={cx('form-input')} type="text" id="email" name="email" placeholder='Nhập email' onChange={(e) => setEmail(e.target.value)}></input>
                        {mailError && <p className={cx('form-error-message', 'form-error')}>{mailError}</p>}
                    </div>
                    <div className={cx('input-wrapper-item')}>
                        <label className={cx('form-label')} for="pw">Mật khẩu</label>
                        <input className={cx('form-input')} type="password" id="pw" name="pw" placeholder='Nhập mật khẩu' onChange={(e) => setPassword(e.target.value)}></input>
                        {passwordError && <p className={cx('form-error-message', 'form-error')}>{passwordError}</p>}
                    </div>
                    {sucessMessage && <p className={cx('form-sucess-message')}>{sucessMessage}</p>}
                    {error && <p className={cx('form-error-message')}>{error}</p>}

                </div>
                <div className={cx('redirect-options', 'option-SignUp')}>
                    <p>Đã có tài khoản? <Link to={'/login'}>Đăng nhập ngay</Link></p>
                </div>
                <div className={cx('btns-group-control')}>
                    <button className={cx('btn', 'btn-SignIn')} type="submit" >Đăng ký</button>
                    <p className={cx('options-title')}>-Or-</p>
                    <div className={cx('option-signIn')}>
                        <div className={cx('btn', 'btn-SignIn-google')} type="button">
                            <GoogleIcon />
                            <Link to={'/signup'}> Đăng ký bằng Gmail</Link>

                        </div>
                        <div className={cx('btn', 'btn-SignIn-facebook')} type="button">
                            <FacebookIcon width='24' height='24' />
                            <Link tp={'/signup'}>Đăng ký bằng Facebook</Link>

                        </div>
                    </div>

                </div>

            </form>
        </div>

    )
}

export default Signup;

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import { GoogleIcon, FacebookIcon } from '../../components/Icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //Simple login authentication
        if (email !== '' && password !== '') {
            if (email === 'email@example.com' && password === 'password') {
                setIsLoggedIn(true);

            }
            else {
                setError('Email hoặc mật khẩu không đúng')
            }
        }
        else {
            if (email === '')
                setError('Vui lòng điền email')
            if (password === '')
                setError('Vui lòng điền mật khẩu')
            if (email === '' && password === '')
                setError('Vui lòng điền đủ email và mật khẩu')
        }


    }
    return (
        <>
            {
                isLoggedIn ? navigate('/') : (
                    <div className={cx('form-wrapper')}>
                        <form className={cx('loginForm')} onSubmit={handleSubmit}>
                            <p className={cx('form-title')}>Đăng nhập</p>
                            <div className={cx('input-wrapper')}>
                                <div className={cx('input-wrapper-item')}>
                                    <label className={cx('form-label')} for="email"> Email </label>
                                    <input className={cx('form-input')} type="text" id="email" autoComplete='on' name="email" placeholder='Nhập email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className={cx('input-wrapper-item')}>
                                    <label className={cx('form-label')} for="pw">Mật khẩu</label>
                                    <input className={cx('form-input')} type="password" id="pw" name="pw" autocomplete='on' placeholder='Nhập mật khẩu' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                    {error && <p className={cx('form-error-message')}>{error}</p>}
                                </div>
                            </div>
                            <div className={cx('redirect-options', 'option-SignUp')}>
                                <p>Chưa có tài khoản? <a href='#'>Đăng ký ngay</a></p>
                            </div>
                            <div className={cx('btns-group-control')}>
                                <button className={cx('btn', 'btn-SignIn')} type="submit">Đăng nhập</button>
                                <p className={cx('options-title')}>-Or-</p>
                                <div className={cx('option-signIn')}>
                                    <button className={cx('btn', 'btn-SignIn-google')}>
                                        <GoogleIcon />
                                        Đăng nhập bằng Gmail
                                    </button>
                                    <button className={cx('btn', 'btn-SignIn-facebook')}>
                                        <FacebookIcon width='24' height='24' />
                                        Đăng nhập bằng Facebook
                                    </button>
                                </div>

                            </div>
                            <div className={cx('redirect-options', 'option-forgetPw')}>
                                <p>Quên mật khẩu? <a href='#'>Đặt lại mật khẩu ngay</a></p>
                            </div>
                        </form>
                    </div>
                )
            }

        </>


    )
}

export default Login;

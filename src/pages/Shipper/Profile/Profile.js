import React, { useEffect, useRef, useState } from 'react';
import styles from './Profile.module.scss'
import classNames from 'classnames/bind';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import moment from 'moment';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';
import * as profileShipperService from '../../../services/shipper/profileShipperService';

const cx = classNames.bind(styles)

function Profile() {
    const datePickerRef = useRef(null);
    useEffect(() => {
        flatpickr(datePickerRef.current, {
          dateFormat: 'd/m/Y',
          // Các tùy chọn khác cho date picker
          onChange: (selectedDates, dateStr) => {
            setDateOfBirth(dateStr);
          }
        });
      }, []);

    const userId = '64b8b48d116933190a3d3543';
    const [reloadData, setReloadData] = useState(true);
    const [user, setUser] = useState([]);
    const [name, setName] = useState([]);
    const [gender, setGender] = useState([]);
    const [dateOfBirth, setDateOfBirth] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await profileShipperService.getUser(userId);
            setUser(result);
            setName(result._fname+" "+result._lname)
            setGender(result._gender)
            setDateOfBirth((result._dateOfBirth))
        };
        if (reloadData) {
            fetchApi();
            setReloadData(false); // Đặt lại state để ngăn việc gọi lại liên tục
        }
    }, [reloadData]);

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleChange2 = (event) => {
        setGender(event.target.value);
    };

    const submitHandler = async () => {
        const editData = {
            _fname: name.split(' ').slice(0, -1).join(' '),
            _lname: name.split(' ').slice(-1).join(' '),
            _gender: gender,
            _dateOfBirth: dateOfBirth,    
        };
        const result = await profileShipperService.editProfile(userId, editData);
        if (result === 1) {
            setReloadData(true);
            window.alert('Cập nhật thông tin thành công');
        }
    };

    return (  
        <div className={cx('d-flex', 'page')}>
            <div className={cx('col-lg-3 col-xl-2 d-none d-xl-block', 'sidebar-wrapper')}>
                    <SidebarAdmin />
                </div>
                <div className={cx('d-block d-xl-none', 'sidebar-mobi-wrapper')}>
                    <SidebarAdminMobi />
                </div>
            <div class={cx('container')}>
                <div className={cx('d-flex align-items-center', 'section')}>Hồ sơ</div>
                <div className={cx('row justify-content-center','col-lg-12')}>
                    <div className={cx('form_profile','row justify-content-center','col-lg-11')}>
                        <div class={cx('float-left')}>
                            <p class={cx('title')}>Hồ sơ của tôi</p>
                        </div>
                        <div class="row justify-content-center">
                            <form>
                                <div class={cx('d-inline', 'col-md-12', 'centerP')}>
                                    <div class={cx('left')}>
                                        <div class={cx('avatar', 'justify-content-center')}>
                                            <img src={user._avatar} class="rounded-circle avatar" alt="Ảnh"/>
                                        </div>
                                        <div class={cx('file')}>
                                            <input type="file" class={cx('form-control')}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class={cx('d-inline', 'col-md-8')}>
                                        <div class={cx('profile__input', 'd-flex')}>
                                        <p>
                                            Tên
                                        </p>
                                        <input type="text" class={cx('form-control')} value={name} onChange={handleChange}
                                            name="name" required />
                                        </div>
                                        <div class={cx('profile__input', 'd-flex')}>
                                        <p>
                                            Email
                                        </p>
                                        <input type="text" class={cx('form-control')} value={user._email}
                                            name="email" required />
                                        </div>
                                        <div class={cx('profile__input', 'd-flex')}>
                                        <p>
                                            Số điện thoại
                                        </p>
                                        <input type="text" class={cx('form-control')} value={user._phones && user._phones.length > 0 ? user._phones[0] : ''}
                                            name="phone" required />
                                        </div>
                                        <div class={cx('form-check', 'd-flex')}>
                                            <p>Giới tính</p>
                                            <div class={cx('form-check-content')}>
                                                <input class="form-check-input" type="checkbox" id="checkbox1" value='male' checked={gender === 'male'} onChange={handleChange2}/>
                                                <label class="form-check-label" for="checkbox1">
                                                    Nam
                                                </label>
                                                <input class="form-check-input" type="checkbox" id="checkbox2" value='female' checked={gender === 'female'} onChange={handleChange2}/>
                                                <label class="form-check-label" for="checkbox1">
                                                    Nữ
                                                </label>
                                            </div>
                                        </div>
                                        <div class={cx('profile__input', 'd-flex')}>
                                            <p>Ngày sinh</p>                        
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="datepicker"
                                                placeholder="Chọn ngày"
                                                ref={datePickerRef}
                                                value={moment(dateOfBirth).format('DD/MM/YYYY')}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                            />
                                        </div>
                                        <div class={cx('button_Luu')} style={{ padding: '15px' }}>
                                            <input type="button" value="Lưu" onClick={submitHandler}/>
                                        </div>
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
export default Profile;
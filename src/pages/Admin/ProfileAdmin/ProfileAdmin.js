import classNames from 'classnames/bind';
import styles from './ProfileAdmin.module.scss';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import * as profileAdminService from '../../../services/profileAdminService';

const cx = classNames.bind(styles);
function ProfileAdmin() {
    const userId = '64b7eb3570a3229b5506a22f';
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await profileAdminService.getUser(userId);
            setUser(result);
        };
        fetchApi();
    }, []);
    const [updateProfile, setUpdateProfile] = useState(false);
    const showUpdateModal = () => setUpdateProfile(true);
    const closeUpdateModal = () => setUpdateProfile(false);

    const [changePassword, setChangePassword] = useState(false);
    const showChangePassWordModal = () => setChangePassword(true);
    const closeChangePassWordModal = () => setChangePassword(false);

    return (
        <div className={cx('container-fluid')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-3 col-xl-2 d-none d-xl-block', 'sidebar-wrapper')}>
                    <SidebarAdmin />
                </div>
                <div className={cx('d-block d-xl-none', 'sidebar-mobi-wrapper')}>
                    <SidebarAdminMobi />
                </div>
                <div className={cx('col-12 col-lg-12 col-xl-10 container-fluid', 'content-section')}>
                    <div className={cx('d-flex align-items-center ', 'title')}>Thông tin cá nhân</div>
                    <div className={cx('wrapper')}>
                        <div className={cx('content')}>
                            <div className={cx('container-fluid')}>
                                <div className={cx('row align-items-center', 'profile')}>
                                    <div className={cx('col-lg-7 col-md-7 d-none d-lg-block', 'profile-info')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col-lg-3 col-md-3', 'heading')}>
                                                <div>Tên:</div>
                                            </div>
                                            <div className={cx('col-lg-9 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>
                                                    {user._fname} {user._lname}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-lg-3 col-md-3', 'heading')}>
                                                <div>Email:</div>
                                            </div>
                                            <div className={cx('col-lg-9 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._email}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-lg-3 col-md-3', 'heading')}>
                                                <div>Số điện thoại:</div>
                                            </div>
                                            <div className={cx('col-lg-9 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._phones}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-lg-3 col-md-3', 'heading')}>
                                                <div>Địa chỉ:</div>
                                            </div>
                                            <div className={cx('col-lg-9 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._addresses}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-lg-3 col-md-3', 'heading')}>
                                                <div>Ngày sinh:</div>
                                            </div>
                                            <div className={cx('col-lg-9 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._dateOfBirth}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-lg-3 col-md-3', 'heading')}>
                                                <div>Giới tính:</div>
                                            </div>
                                            <div className={cx('col-lg-9 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._gender === 'female' ? <p>Nữ</p> : <p>Nam</p>}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('col-lg-5 col-md-5 d-none d-lg-block', 'profile-avatar')}>
                                        <div className={cx('d-flex justify-content-center')}>
                                            <div className={cx('avatar')}>
                                                <img
                                                    src="https://res.cloudinary.com/dawwzvnhe/image/upload/v1692778654/src/images/products/Monitor/Dell/LCD_S2421H/front1_zcl5i8.webp"
                                                    alt="avatar"
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('d-flex justify-content-center', 'change-avatar-btn')}>
                                            <button type="button" class="btn btn-primary btn-lg">
                                                Đổi ảnh
                                            </button>
                                        </div>
                                        <div className={cx('d-flex justify-content-center', 'update-profile-btn')}>
                                            <button className={cx('btn btn-primary btn-lg')} onClick={showUpdateModal}>
                                                Cập nhật thông tin cá nhân
                                            </button>
                                        </div>
                                        <div className={cx('d-flex justify-content-center', 'change-pass-btn')}>
                                            <button
                                                type="button"
                                                className={cx('btn btn-primary btn-lg')}
                                                onClick={showChangePassWordModal}
                                            >
                                                Đổi mật khẩu
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('col-12 col-md-12 d-block d-lg-none', 'profile-avatar')}>
                                        <div className={cx('d-flex justify-content-center')}>
                                            <div className={cx('avatar')}>
                                                <img
                                                    src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg"
                                                    alt="avatar"
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('d-flex justify-content-center', 'change-avatar-btn')}>
                                            <button type="button" class="btn btn-primary btn-lg">
                                                Đổi ảnh
                                            </button>
                                        </div>
                                        <div className={cx('d-flex justify-content-center', 'update-profile-btn')}>
                                            <button className={cx('btn btn-primary btn-lg')} onClick={showUpdateModal}>
                                                Cập nhật thông tin cá nhân
                                            </button>
                                        </div>
                                        <div className={cx('d-flex justify-content-center', 'change-pass-btn')}>
                                            <button
                                                type="button"
                                                className={cx('btn btn-primary btn-lg')}
                                                onClick={showChangePassWordModal}
                                            >
                                                Đổi mật khẩu
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('col-12 col-md-12 d-block d-lg-none', 'profile-info')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col-4 col-md-3', 'heading')}>
                                                <div>Tên:</div>
                                            </div>
                                            <div className={cx('col-8 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>
                                                    {user._fname} {user._lname}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-4 col-md-3', 'heading')}>
                                                <div>Email:</div>
                                            </div>
                                            <div className={cx('col-8 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._email}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-4 col-md-3', 'heading')}>
                                                <div>Số điện thoại:</div>
                                            </div>
                                            <div className={cx('col-8 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._phones}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-4 col-md-3', 'heading')}>
                                                <div>Địa chỉ:</div>
                                            </div>
                                            <div className={cx('col-8 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._addresses}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-4 col-md-3', 'heading')}>
                                                <div>Ngày sinh:</div>
                                            </div>
                                            <div className={cx('col-8 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._dateOfBirth}</div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('col-4 col-md-3', 'heading')}>
                                                <div>Giới tính:</div>
                                            </div>
                                            <div className={cx('col-8 col-md-9 d-flex justify-content-end', 'info')}>
                                                <div>{user._gender === 'female' ? <p>Nữ</p> : <p>Nam</p>}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={updateProfile} onHide={closeUpdateModal} className={cx('update-profile-modal')}>
                        <Modal.Header closeButton>
                            <div className={cx('title-modal')}>Cập nhật thông tin cá nhân</div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Họ:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Tên:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Email:</div>
                                </div>
                                <input type="email" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Số điện thoại:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Địa chỉ:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Ngày sinh:</div>
                                </div>
                                <input type="date" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Giới tính:</div>
                                </div>
                                <span className={cx('col-lg-9 col-md-9', 'gender')}>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">Nam</label>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">Nữ</label>
                                </span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className={cx('btn btn-secondary btn-lg')} onClick={closeUpdateModal}>
                                Đóng
                            </button>
                            <button className={cx('btn btn-primary btn-lg')} onClick={closeUpdateModal}>
                                Lưu thay đổi
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <Modal
                        show={changePassword}
                        onHide={closeChangePassWordModal}
                        className={cx('change-password-modal')}
                    >
                        <Modal.Header closeButton>
                            <div className={cx('title-modal')}>Đổi mật khẩu</div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-5 col-md-5', 'heading-modal')}>
                                    <div>Mật khẩu:</div>
                                </div>
                                <input type="password" className={cx('col-lg-7 col-md-7')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-5 col-md-5', 'heading-modal')}>
                                    <div>Mật khẩu mới:</div>
                                </div>
                                <input type="password" className={cx('col-lg-7 col-md-7')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-5 col-md-5', 'heading-modal')}>
                                    <div>Nhập lại mật khẩu mới:</div>
                                </div>
                                <input type="password" className={cx('col-lg-7 col-md-7')} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className={cx('btn btn-secondary btn-lg')} onClick={closeChangePassWordModal}>
                                Đóng
                            </button>
                            <button className={cx('btn btn-primary btn-lg')} onClick={closeChangePassWordModal}>
                                Lưu thay đổi
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ProfileAdmin;

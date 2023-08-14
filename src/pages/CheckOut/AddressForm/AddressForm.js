import classNames from 'classnames/bind';
import styles from '../CheckOut.module.scss';

import { useState } from 'react';
import { ErrorIcon } from '../../../components/Icons';
const cx = classNames.bind(styles);
function AddressForm({ addressInfo, onSave, onCancel }) {
    const [fullName, setFullName] = useState(addressInfo.fullName || '');
    const [phoneNumber, setPhoneNumber] = useState(addressInfo.phoneNumber || '');
    const [email, setEmail] = useState(addressInfo.email || '');
    const [province, setProvince] = useState(addressInfo.province || '');
    const [district, setDistrict] = useState(addressInfo.district || '');
    const [ward, setWard] = useState(addressInfo.ward || '');
    const [address, setAddress] = useState(addressInfo.address || '');
    const [errors, setErrors] = useState({});

    const validatePhoneNumber = (number) => {
        // Đây là một ví dụ đơn giản, bạn có thể thay thế bằng kiểm tra phức tạp hơn
        const phoneNumberPattern = /^[0-9]{10}$/;
        return phoneNumberPattern.test(number);
    };

    const validateEmail = (email) => {
        // Đây là một ví dụ đơn giản, bạn có thể thay thế bằng kiểm tra phức tạp hơn
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (!fullName || fullName.length < 3 || fullName.length > 25) {
            newErrors.fullName = 'Họ tên không hợp lệ, vui lòng nhập từ 3-25 kí tự';
        }

        if (!validatePhoneNumber(phoneNumber)) {
            newErrors.phoneNumber = 'Số điện thoại không hợp lệ. Vui lòng kiểm tra và thử lại';
        }

        if (!validateEmail(email)) {
            newErrors.email = 'Địa chỉ email hợp lệ theo cấu trúc hello@example.com';
        }

        if (!province) {
            newErrors.province = 'Vui lòng chọn tỉnh';
        }

        if (!district) {
            newErrors.district = 'Vui lòng chọn quận/huyện';
        }

        if (!ward) {
            newErrors.ward = 'Vui lòng chọn xã/phường';
        }

        if (!address) {
            newErrors.address = 'Vui lòng nhập địa chỉ';
        }

        if (Object.keys(newErrors).length === 0) {
            // Thực hiện xử lý dữ liệu gửi đi và cập nhật thông tin
            console.log('thoa dieu kien');
            onSave({
                fullName,
                phoneNumber,
                email,
                province,
                district,
                ward,
                address,
            });
        } else {
            console.log('khong thoa dieu kien');
            setErrors(newErrors);
        }
    };
    return (
        <div className={cx('change__address')}>
            <div className={cx('container d-flex align-items-center ', 'change__address-wrapper')}>
                <div className={cx('row justify-content-center')}>
                    <div className={cx('col-lg-6 ', 'change__address-form')}>
                        <div>
                            <h1 className={cx('change__address-title')}>ĐỊA CHỈ MỚI</h1>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <h2>Thông tin khách hàng</h2>
                                <h3>Người đặt hàng</h3>
                                <div className={cx('col-12', 'input')}>
                                    <label htmlFor="inputAddress" className="form-label">
                                        Họ và Tên *
                                    </label>
                                    <input
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        type="text"
                                        className={cx('form-control', 'font-size-16', {
                                            'error-border': errors.fullName, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                        id="inputName"
                                        placeholder="Nhập họ và tên"
                                        required
                                    />
                                    <div
                                        className={cx('d-none', {
                                            'error-icon': errors.fullName, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                    >
                                        <ErrorIcon />
                                    </div>
                                    {errors.fullName && <span className={cx('error')}>{errors.fullName}</span>}
                                </div>
                                <div className={cx('col-md-6', 'input')}>
                                    <label htmlFor="inputPhone" className="form-label">
                                        Số điện thoại *
                                    </label>
                                    <input
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        type="tel"
                                        className={cx('form-control', 'font-size-16', {
                                            'error-border': errors.phoneNumber, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                        id="inputPhoneNumber"
                                        placeholder="Nhập số điện thoại"
                                        required
                                    />
                                    <div
                                        className={cx('d-none', {
                                            'error-icon': errors.phoneNumber, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                    >
                                        <ErrorIcon />
                                    </div>
                                    {errors.phoneNumber && <span className={cx('error')}>{errors.phoneNumber}</span>}
                                </div>
                                <div className={cx('col-md-6', 'input')}>
                                    <label htmlFor="inputEmail" className="form-label">
                                        Email *
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className={cx('form-control', 'font-size-16', {
                                            'error-border': errors.email, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                        id="inputEmail"
                                        placeholder="Nhập email"
                                        required
                                    />
                                    <div
                                        className={cx('d-none', {
                                            'error-icon': errors.email, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                    >
                                        <ErrorIcon />
                                    </div>
                                    {errors.email && <span className={cx('error')}>{errors.email}</span>}
                                </div>
                                <h3>Địa chỉ nhận hàng</h3>

                                <div className={cx('col-12', 'input')}>
                                    <label htmlFor="inputAddress" className="form-label"></label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"
                                        className={cx('form-control', 'font-size-16', {
                                            'error-border': errors.address, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                        id="inputAddress"
                                        placeholder="Số nhà, tên đường *"
                                        required
                                    />
                                    {errors.address && <span className={cx('error')}>{errors.address}</span>}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputCity" className="form-label"></label>
                                    <input
                                        value={province}
                                        onChange={(e) => setProvince(e.target.value)}
                                        type="text"
                                        className={cx('form-control', 'font-size-16', {
                                            'error-border': errors.province, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                        id="inputCity"
                                        placeholder="Tỉnh/Thành phố *"
                                        required
                                    />
                                    {errors.province && <span className={cx('error')}>{errors.province}</span>}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputDistrict" className="form-label"></label>
                                    <input
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        type="text"
                                        className={cx('form-control', 'font-size-16', {
                                            'error-border': errors.district, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                        id="inputDistrict"
                                        placeholder="Quận/Huyện *"
                                        required
                                    />
                                    {errors.district && <span className={cx('error')}>{errors.district}</span>}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputCommune" className="form-label"></label>
                                    <input
                                        value={ward}
                                        onChange={(e) => setWard(e.target.value)}
                                        type="text"
                                        className={cx('form-control', 'font-size-16', {
                                            'error-border': errors.ward, // Thêm lớp 'error-border' nếu có lỗi ở trường này
                                        })}
                                        id="inputCommune"
                                        placeholder="Phường/Xã *"
                                        required
                                    />
                                    {errors.ward && <span className={cx('error')}>{errors.ward}</span>}
                                </div>
                                <div className={cx('col-12 text-end', 'button')}>
                                    <button onClick={onCancel} className={cx('btn btn-light', 'btn-back')}>
                                        Trở lại
                                    </button>
                                    <button type="submit" className={cx('btn btn-primary', 'btn-submit')}>
                                        Hoàn Thành
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;

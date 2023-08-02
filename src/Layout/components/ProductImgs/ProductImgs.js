import styles from './ProductImgs.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function ProductImgs() {
    return (
        <div className={cx('pImages-wrapper')}>
            <div className={cx('main-pImages-wrapper')}>
                <p className={cx('sale-tag')}>Giảm 20%</p>
                <img className={cx('main-pImage')} alt='Ảnh sản phẩm' src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'></img>
            </div>
            <div className={cx('sub-pImages-wrapper')}>
                <img className={cx('sub-pImage', 'current-pImg')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw' alt='Ảnh sản phẩm'></img>
                <img className={cx('sub-pImage')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw' alt='Ảnh sản phẩm'></img>
                <img className={cx('sub-pImage')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw' alt='Ảnh sản phẩm'></img>
                <img className={cx('sub-pImage')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw' alt='Ảnh sản phẩm'></img>
            </div>
        </div>
    )
}

export default ProductImgs
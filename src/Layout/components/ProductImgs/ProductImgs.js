import styles from './ProductImgs.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function ProductImgs({ images }) {
    return (
        <div className={cx('pImages-wrapper')}>
            <div className={cx('main-pImages-wrapper')}>
                <p className={cx('sale-tag')}>Giảm 20%</p>
                <img className={cx('main-pImage')} alt='Ảnh sản phẩm' src={images[0].url}></img>
            </div>
            <div className={cx('sub-pImages-wrapper')}>
                {
                    images.map((image, index) => {
                        if (index === 0)
                            return <img className={cx('sub-pImage', 'current-pImg')} src={image.url} alt='Ảnh sản phẩm'></img>
                        return <img className={cx('sub-pImage')} src={image.url} alt='Ảnh sản phẩm'></img>
                    })
                }
            </div>
        </div>
    )
}

export default ProductImgs
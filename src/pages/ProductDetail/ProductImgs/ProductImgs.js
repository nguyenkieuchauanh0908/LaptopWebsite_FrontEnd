import React from 'react';
import { useState } from 'react';
import styles from './ProductImgs.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function ProductImgs({ images }) {

    const [pMainImg, setpMainImg] = useState(images[0].url)

    const handleChangeMainImg = (index) => {
        setpMainImg(images[index].url)
    }

    return (
        <div className={cx('pImages-wrapper')}>
            <div className={cx('main-pImages-wrapper')}>
                <p className={cx('sale-tag')}>Giảm 20%</p>
                <img className={cx('main-pImage')} alt='Ảnh sản phẩm' src={pMainImg}></img>
            </div>
            <div className={cx('sub-pImages-wrapper')}>
                {
                    images.map((image, index) => {
                        if (image.url === pMainImg) {
                            return <img key={image.id} className={cx('sub-pImage', 'current-pImg')} src={image.url} alt='Ảnh sản phẩm' onMouseOver={() => handleChangeMainImg(index)}></img>
                        }
                        else
                            return <img key={image.id} className={cx('sub-pImage')} src={image.url} alt='Ảnh sản phẩm' onMouseOver={() => handleChangeMainImg(index)}></img>
                    })
                }
            </div>
        </div>
    )
}

export default ProductImgs
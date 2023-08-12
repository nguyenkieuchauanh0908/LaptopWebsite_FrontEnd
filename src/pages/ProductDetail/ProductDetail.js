import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './ProductDetail.module.scss'
import classNames from 'classnames/bind'
import ProductImgs from './ProductImgs/ProductImgs'
import ProductInfo from './ProductInfo/ProductInfo'
import Comment from './Comment/Comment'
import ColProductCard from '../../components/Product/product'
import ViewAll from '../../components/view-all/view-all';
import { RatingStar } from '../../components/Icons'

const cx = classNames.bind(styles)
function ProductDetail({ productId, brandId }) {
    let productDetail = {}
    let avarageRating = 0
    let comments = []
    let relatedProducts = []

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <div className={cx('star-styles')}>
                    <RatingStar key={i} />
                </div>
            );
        }

        return stars;
    };


    const getProductDetails = (productId) => {
        productDetail = {
            name: 'Laptop Lenovo IdeaPad 3 15IAU7 - 82RK001QVN (i5-1235U/RAM 8GB/512GB SSD/ Windows 11)',
            brand: 'Lenovo',
            images: [{
                id: 1,
                url: 'https://lh3.googleusercontent.com/GG6CCVgMW1ufUI2K_8gAkwU9JcQFNDItu7NCRlYpxgqPpBCMzZCWFLP4W5k4jWQTGKdd901uILnL1YYswzxGyhomqu1x0J0r=w230-rw'
            },
            {
                id: 2,
                url: 'https://lh3.googleusercontent.com/v3qv2PgRZTf3ZoRxxCFarBUFV9go2UFWAmqLCXdCKvqfFIrV5PsGw4RynO4HQNJz2jvMYRdc8ZNk39dSiZINoTSMpk1cHHQ=w230-rw'
            },
            {
                id: 3,
                url: 'https://lh3.googleusercontent.com/CM_6GZhK7z1iauRQqaCi1ZXmtWTp7G1sF0inBnN6PogJCkXCPhX6IE62hxlOH2fd4oM0CV5sJ6wGgmMLQ4fVkJNaokP4Rqj7=w230-rw'
            },
            {
                id: 4,
                url: 'https://lh3.googleusercontent.com/N-tp-JYfRbASQfIqRrxe626j5US-0hV9PEuSXhwGQea_qrCbncfUJ5fE0ZUjgK5pbBdXsPf_ubm8hN1kKfCNRoMW87WsaW8=w230-rw'
            },

            ],
            salePercents: 10,
            price: 16000000,
            status: 'Selling',
            quantity: 10,
        }
    }

    const getAverageRating = (productId) => {
        avarageRating = 5
    }

    const getComments = (productId) => {
        comments = [
            {
                uName: 'Nguyễn Kiều Châu Anh',
                uImage: 'https://lh3.googleusercontent.com/ogw/AGvuzYZ97zGHplrj5kwwvMUP3V3XYo97H9v-s-NCvLgLeA=s32-c-mo',
                content: 'Sản phẩm có chất lượng tuyệt vời,  mỏng nhẹ, hợp cho dân văn phòng, để code thì hơi yếu ... ',
                stars: 5,
                images: [
                    {
                        id: 1,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 2,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 3,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 4,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },

                ]
            },
            {
                uName: 'Nguyễn Kiều Châu Anh',
                uImage: 'https://lh3.googleusercontent.com/ogw/AGvuzYZ97zGHplrj5kwwvMUP3V3XYo97H9v-s-NCvLgLeA=s32-c-mo',
                content: 'Sản phẩm có chất lượng tuyệt vời,  mỏng nhẹ, hợp cho dân văn phòng, để code thì hơi yếu ... ',
                stars: 5,
                images: [
                    {
                        id: 1,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 2,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 3,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 4,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },

                ]
            },
            {
                uName: 'Nguyễn Kiều Châu Anh',
                uImage: 'https://lh3.googleusercontent.com/ogw/AGvuzYZ97zGHplrj5kwwvMUP3V3XYo97H9v-s-NCvLgLeA=s32-c-mo',
                content: 'Sản phẩm có chất lượng tuyệt vời,  mỏng nhẹ, hợp cho dân văn phòng, để code thì hơi yếu ... ',
                stars: 5,
                images: [
                    {
                        id: 1,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 2,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 3,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 4,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },

                ]
            },
            {
                uName: 'Nguyễn Kiều Châu Anh',
                uImage: 'https://lh3.googleusercontent.com/ogw/AGvuzYZ97zGHplrj5kwwvMUP3V3XYo97H9v-s-NCvLgLeA=s32-c-mo',
                content: 'Sản phẩm có chất lượng tuyệt vời,  mỏng nhẹ, hợp cho dân văn phòng, để code thì hơi yếu ... ',
                stars: 5,
                images: [
                    {
                        id: 1,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 2,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 3,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 4,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },

                ]
            },
            {
                uName: 'Nguyễn Kiều Châu Anh',
                uImage: 'https://lh3.googleusercontent.com/ogw/AGvuzYZ97zGHplrj5kwwvMUP3V3XYo97H9v-s-NCvLgLeA=s32-c-mo',
                content: 'Sản phẩm có chất lượng tuyệt vời,  mỏng nhẹ, hợp cho dân văn phòng, để code thì hơi yếu ... ',
                stars: 5,
                images: [
                    {
                        id: 1,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 2,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 3,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },
                    {
                        id: 4,
                        url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                    },

                ]
            },
        ]
    }

    const getRelatedProducts = (brandId) => {
        relatedProducts = [{
            id: 1,
            name: 'Laptop Lenovo IdeaPad 315IAU7 - 82RK001NVN',
            price: 12000000,
            salePercent: 10,
            quantity: 1000,
            images: [
                {
                    id: 1,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 2,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 3,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 4,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },

            ],
            brand: 'DATA',
            rating: 4.1,
            ratingNumber: 67
        },
        {
            id: 1,
            name: 'Laptop Lenovo IdeaPad 315IAU7 - 82RK001NVN',
            price: 12000000,
            salePercent: 10,
            quantity: 1000,
            images: [
                {
                    id: 1,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 2,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 3,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 4,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },

            ],
            brand: 'DATA',
            rating: 4.1,
            ratingNumber: 67
        },
        {
            id: 1,
            name: 'Laptop Lenovo IdeaPad 315IAU7 - 82RK001NVN',
            price: 12000000,
            salePercent: 10,
            quantity: 1000,
            images: [
                {
                    id: 1,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 2,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 3,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 4,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },

            ],
            brand: 'DATA',
            rating: 4.1,
            ratingNumber: 67
        },
        {
            id: 1,
            name: 'Laptop Lenovo IdeaPad 315IAU7 - 82RK001NVN',
            price: 12000000,
            salePercent: 10,
            quantity: 1000,
            images: [
                {
                    id: 1,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 2,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 3,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 4,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },

            ],
            brand: 'DATA',
            rating: 4.1,
            ratingNumber: 67
        },
        {
            id: 1,
            name: 'Laptop Lenovo IdeaPad 315IAU7 - 82RK001NVN',
            price: 12000000,
            salePercent: 10,
            quantity: 1000,
            images: [
                {
                    id: 1,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 2,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 3,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 4,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },

            ],
            brand: 'DATA',
            rating: 4.1,
            ratingNumber: 67
        },
        {
            id: 1,
            name: 'Laptop Lenovo IdeaPad 315IAU7 - 82RK001NVN',
            price: 12000000,
            salePercent: 10,
            quantity: 1000,
            images: [
                {
                    id: 1,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 2,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 3,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },
                {
                    id: 4,
                    url: 'https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w230-rw'
                },

            ],
            brand: 'DATA',
            rating: 4.1,
            ratingNumber: 67
        },

        ]
    }


    getProductDetails(productId)
    getAverageRating(productId)
    getRelatedProducts(brandId)
    getComments(productId)

    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <span className={cx('row-heading')}>Thông tin sản phẩm</span>
                <Row className={cx('bg-white', 'padding-12', 'productInfo')}>
                    <Col className={cx('col-wrapper')} md={{ span: 4 }}>
                        <ProductImgs
                            images={productDetail.images}
                        />
                    </Col>
                    <Col className={cx('col-wrapper')} md={{ span: 6, offset: 1 }}>
                        <ProductInfo
                            name={productDetail.name}
                            brand={productDetail.brand}
                            oldPrice={productDetail.price}
                            salePercents={productDetail.salePercents}
                            status={productDetail.status}
                            quantity={productDetail.quantity}

                        />
                    </Col>
                </Row>
            </Container>

            <Container className={cx('container')}>
                <span className={cx('row-heading')}>Thông số kỹ thuật</span>
                <Row className={cx('bg-white', 'padding-12')}>
                    <Col>
                        <p>- Kích thước: 23.8" (1920 x 1080), Tỷ lệ 16:9</p>
                        <p>- Tần số quét: 75Hz</p>
                        <p>- Công nghệ đồng bộ: FreeSync</p>
                        <p>- Cổng hình ảnh: , 1 x HDMI 1.4, 1 x VGA/D-sub </p>
                    </Col>
                </Row>

            </Container>

            <Container className={cx('container')}>
                <span className={cx('row-heading')}>Đánh giá</span>
                <Row className={cx('bg-white', 'padding-12')}>
                    <div className={cx('overview-wrapper')}>
                        <p className={cx('title')}>Điểm đánh giá trung bình: </p>
                        <div className={cx('rating-stars')}>
                            <div className={cx('stars')}>
                                <div className={cx('stars-wrapper')}>
                                    {renderStars(avarageRating)}
                                </div>
                            </div>
                            <span className={cx('ratingNumber')}>(63)</span>
                        </div>

                    </div>
                    {comments.map((comment, index) => {
                        return (
                            <Row>
                                <Comment
                                    key={index}
                                    uName={comment.uName}
                                    content={comment.content}
                                    stars={comment.stars}
                                    images={comment.images}
                                />
                            </Row>
                        )
                    })}
                    <div className={cx('viewAll-wrapper')}>
                        <ViewAll />
                    </div>
                </Row>
            </Container>
            <Container className={cx('container')}>
                <span className={cx('row-heading')}>Sản phẩm liên quan</span>
                <Row sm={2} xs={2} md={3} lg={3} xl={6}>
                    {
                        relatedProducts.map((product, index) => {
                            return (
                                <div className={cx('card-wrapper')}>
                                    <ColProductCard
                                        key={index}
                                        url={product.images[1].url}
                                        pCate={product.brand}
                                        pName={product.name}
                                        oldPrice={product.price}
                                        salePercents={product.salePercent}
                                        stars={product.rating}
                                        ratingNumber={product.ratingNumber}
                                    />
                                </div>
                            )
                        })

                    }
                    <div className={cx('viewAll-wrapper')}>
                        <ViewAll />
                    </div>
                </Row>

            </Container>



        </div>



    )
}
export default ProductDetail
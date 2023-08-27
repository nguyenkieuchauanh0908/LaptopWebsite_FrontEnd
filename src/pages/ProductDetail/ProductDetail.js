import React, { useState, useEffect } from 'react';
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
function ProductDetail({ productId }) {

    //thảm khảo: https://www.pluralsight.com/guides/how-to-use-reactjs-and-complex-json-objects 
    const [productDetails, setProductDetails] = useState({
        _name: '',
        _price: 0,
        _salePercent: 0,
        _status: true,
        _quantity: 0,
        _detail: '',
        _sold: 0,
        _brandId: {
            _id: '',
            _name: '',
        }

    })

    const [pImages, setPImages] = useState([
        'https://lh3.googleusercontent.com/GG6CCVgMW1ufUI2K_8gAkwU9JcQFNDItu7NCRlYpxgqPpBCMzZCWFLP4W5k4jWQTGKdd901uILnL1YYswzxGyhomqu1x0J0r=w230-rw',
        'https://lh3.googleusercontent.com/v3qv2PgRZTf3ZoRxxCFarBUFV9go2UFWAmqLCXdCKvqfFIrV5PsGw4RynO4HQNJz2jvMYRdc8ZNk39dSiZINoTSMpk1cHHQ=w230-rw',
        'https://lh3.googleusercontent.com/CM_6GZhK7z1iauRQqaCi1ZXmtWTp7G1sF0inBnN6PogJCkXCPhX6IE62hxlOH2fd4oM0CV5sJ6wGgmMLQ4fVkJNaokP4Rqj7=w230-rw',
        'https://lh3.googleusercontent.com/N-tp-JYfRbASQfIqRrxe626j5US-0hV9PEuSXhwGQea_qrCbncfUJ5fE0ZUjgK5pbBdXsPf_ubm8hN1kKfCNRoMW87WsaW8=w230-rw'
    ])

    const [comments, setComments] = useState([
        {
            _id: '',
            _content: '',
            _rating: 0,
            _uId: {
                _id: '',
                _fname: '',
                _lname: '',
                _avatar: ''
            },
            _pId: '',
            _images: [],
        }
    ])

    const [cmtImgs, setCmtImgs] = useState([
        'https://lh3.googleusercontent.com/GG6CCVgMW1ufUI2K_8gAkwU9JcQFNDItu7NCRlYpxgqPpBCMzZCWFLP4W5k4jWQTGKdd901uILnL1YYswzxGyhomqu1x0J0r=w230-rw',
        'https://lh3.googleusercontent.com/v3qv2PgRZTf3ZoRxxCFarBUFV9go2UFWAmqLCXdCKvqfFIrV5PsGw4RynO4HQNJz2jvMYRdc8ZNk39dSiZINoTSMpk1cHHQ=w230-rw',
        'https://lh3.googleusercontent.com/CM_6GZhK7z1iauRQqaCi1ZXmtWTp7G1sF0inBnN6PogJCkXCPhX6IE62hxlOH2fd4oM0CV5sJ6wGgmMLQ4fVkJNaokP4Rqj7=w230-rw',
        'https://lh3.googleusercontent.com/N-tp-JYfRbASQfIqRrxe626j5US-0hV9PEuSXhwGQea_qrCbncfUJ5fE0ZUjgK5pbBdXsPf_ubm8hN1kKfCNRoMW87WsaW8=w230-rw'
    ])


    let avarageRating = 0
    //let comments = []
    let relatedProducts = []

    //Hiển thị icon sao
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

    //Get oroduct details from productId
    useEffect(() => {
        const fetchProductDetails = async (productId) => {
            try {
                const response = await fetch(`/api/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                const data = await response.json();
                //console.log(data._brandId._name);
                setProductDetails(data);
            } catch (error) {
                console.error('Không lấy được dữ liệu:', error);
            }
        }
        fetchProductDetails('64b6367474e10f82ea5c17d7')
    }, [])

    //get all comments of a product from productId
    useEffect(() => {
        const fetchProductComments = async (produtId) => {
            try {
                const response = await fetch(`/api/reviews/${produtId}`)
                if (!response.ok) {
                    throw new Error('Request failed')
                }
                const data = await response.json()
                //console.log(data)
                setComments(data)


            }
            catch (error) {
                console.error('Không lấy được dữ liệu: ', error)
            }
        }
        fetchProductComments('64b6367474e10f82ea5c17d7')

    }, [])




    const getAverageRating = (productId) => {
        avarageRating = 5
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



    getAverageRating(productId)
    getRelatedProducts()
    //getComments(productId)

    if (productDetails) {
        return (
            <div className={cx('wrapper')}>
                <Container className={cx('container')}>
                    <span className={cx('row-heading')}>Thông tin sản phẩm</span>
                    <Row className={cx('bg-white', 'padding-12', 'productInfo')}>
                        <Col className={cx('col-wrapper')} md={{ span: 4 }}>
                            <ProductImgs
                                images={pImages}
                            />
                        </Col>

                        <Col className={cx('col-wrapper')} md={{ span: 6, offset: 1 }}>
                            <ProductInfo
                                name={productDetails._name}
                                brand={productDetails._brandId._name}
                                oldPrice={productDetails._price}
                                salePercents={productDetails._salePercent}
                                status={productDetails._status}
                                quantity={productDetails._quantity}

                            />
                        </Col>
                    </Row>
                </Container>

                <Container className={cx('container')}>
                    <span className={cx('row-heading')}>Thông số kỹ thuật</span>
                    <Row className={cx('bg-white', 'padding-12')}>

                        <Col>
                            {
                                productDetails._detail.split('- ').map((detail, index) =>
                                    <p key={index}>{detail}</p>
                                )
                            }
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
                                        key={comment._id}
                                        fName={comment._uId._fname}
                                        lName={comment._uId._lname}
                                        content={comment._content}
                                        stars={comment._rating}
                                        images={cmtImgs}
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
    else
        return null

}
export default ProductDetail
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './products.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColProductCard from '../../../components/Product/product';
import ViewAll from '../../../components/view-all/view-all';
import ImageSlider from '../../../components/Slider/slider';


const cx = classNames.bind(styles)
function Products() {

    const [banners, setBanners] = useState(['https://lh3.googleusercontent.com/AlIQ9zLNegLMYK3iZ0C38iJTsSuSBolyYK4SH_LmhKgohVHcmz6atxdRtydFItYjNYbhBf_ZdBKg6n0IyHbKOvC7EwqAsQc=w1920-rw',
        'https://lh3.googleusercontent.com/AlIQ9zLNegLMYK3iZ0C38iJTsSuSBolyYK4SH_LmhKgohVHcmz6atxdRtydFItYjNYbhBf_ZdBKg6n0IyHbKOvC7EwqAsQc=w1920-rw',
        'https://lh3.googleusercontent.com/AlIQ9zLNegLMYK3iZ0C38iJTsSuSBolyYK4SH_LmhKgohVHcmz6atxdRtydFItYjNYbhBf_ZdBKg6n0IyHbKOvC7EwqAsQc=w1920-rw'])

    let bestSellingProducts = [
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
        }

    ]
    let onSellProducts = [
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
        }

    ]
    let mostSearchedProducts = [
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
        }

    ]

    //Lấy danh sách hình banners
    useEffect(() => {
        let mounted = true
        fetch('/api/banners')
            .then((response) => response.json())
            .then((banners) => {
                if (mounted) {
                    console.log(banners)
                    setBanners(banners[0]._images)
                }
                return () => !mounted
            })
            .catch((error) => alert('Failed to retrieve data'))
    }, [])

    return (
        <Col xs={12} sm={8} md={8} lg={9} xl={9} className={cx('col-products')}>
            <div className={cx('row-slider')}>
                <Row>
                    <ImageSlider
                        sliderImages={banners}
                    />
                </Row>
            </div>

            <div className={cx('tag-wrapper')}>
                <p><a href='#top-sale-section'>Top sale</a></p>
                <p><a href='#on-sale-section'>Đang sale</a></p>
                <p><a href='#top-search-section'>Tìm kiếm nhiều nhất</a></p>

            </div>

            {/* Top sale */}
            <div id='top-sale-section' className={cx('row-products')}>
                {/* Bán chạy nhất */}
                <p className={cx('row-products-label')}>Sản phẩm bán chạy nhất</p>
                <Row xs={2} sm={2} md={3} lg={3} xl={5}>
                    {
                        bestSellingProducts.map((product, index) =>
                        (<div className={cx('card-wrapper')}>
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

                        </div>)
                        )
                    }
                </Row>
            </div>

            {/* Sản phẩm đang sale */}
            <div id='on-sale-section' className={cx('row-products')}>
                <p className={cx('row-products-label')}>Sản phẩm đang sale</p>
                <Row sm xs={2} md={3} lg={3} xl={5}>
                    {
                        onSellProducts.map((product, index) => (
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
                            </div>))
                    }
                </Row>
                <div className={cx('view-all-products')}>
                    <ViewAll />
                </div>
            </div>

            {/*Most searched  */}
            <div id='top-search-section' className={cx('row-products')}>
                <p className={cx('row-products-label')}>Sản phẩm được tìm kiếm nhiều nhất</p>
                <Row sm xs={2} md={3} lg={3} xl={5}>
                    {
                        mostSearchedProducts.map((product, index) => (
                            (<div className={cx('card-wrapper')}>
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
                            </div>)
                        ))
                    }
                </Row>
            </div>


        </Col >
    );
}

export default Products;
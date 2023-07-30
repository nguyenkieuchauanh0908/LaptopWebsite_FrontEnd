
import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './product.module.scss'; // Replace 'custom.scss' with your customized SCSS file path
import styles from './product.module.scss';
import { RatingStar } from '../../../components/Icons/Icons';

const cx = classNames.bind(styles);
const btnText = 'Thêm vào giỏ'
function ProductCard(props) {
    return (
        <Card className={cx('pCard')}>
            <div className={cx('pImg-wrapper')}>
                <Card.Img className={cx('pImg')} variant="top" src={props.url} />
            </div>
            <Card.Body className={cx('card-content')}>
                <p className={cx('pCate')}>{props.pCate}</p>
                <Card.Title className={cx('pName')}>{props.pName}</Card.Title>
                <div className={cx('pPrice')}>
                    <span className={cx('oldPrice')}>{props.oldPrice}</span>
                    <span className={cx('newPrice')}>{props.newPrice}</span>
                </div>
                <div className={cx('rating-display')}>
                    <div className={cx('rating-stars')}>
                        <div className={cx('stars')}>
                            <div className={cx('stars-wrapper')}>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div className={cx('star-styles')}>
                                    <RatingStar />
                                </div>
                                <div>
                                    <RatingStar />
                                </div>
                            </div>
                        </div>
                        <span className={cx('ratingNumber')}>({props.ratingNumber})</span>
                    </div>
                    <span className={cx('origin')}>{props.origin}</span>
                </div>
                <div className={cx('btn-wrapper')}>
                    <Button className={cx('btn-add-to-cart')} variant="primary">{btnText}</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default ProductCard;
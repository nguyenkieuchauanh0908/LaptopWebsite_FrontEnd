import styles from './Comment.scss'
import classNames from 'classnames/bind'
import { RatingStar } from '../../../components/Icons/Icons';
const cx = classNames.bind(styles)
function Comment(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overview-wrapper')}>
                <div className='uImge-wrapper'>
                    <img className={cx('uImage')} src='https://lh3.googleusercontent.com/ogw/AGvuzYZ97zGHplrj5kwwvMUP3V3XYo97H9v-s-NCvLgLeA=s32-c-mo' alt='user'></img>
                </div>
                <p className={cx('uName')}>{props.uName}</p>
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
                        <div className={cx('star-styles')}>
                            <RatingStar />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('comment-content')}>
                    <p> {props.content} </p>
                </div>
                <div className={cx('imgs-wrapper')}>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('cmtImg')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw' alt='Hình ảnh sản phẩm'></img>
                    </div>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('cmtImg')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw' alt='Hình ảnh sản phẩm'></img>
                    </div>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('cmtImg')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw' alt='Hình ảnh sản phẩm'></img>
                    </div>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('cmtImg')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw' alt='Hình ảnh sản phẩm'></img>
                    </div>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('cmtImg')} src='https://lh3.googleusercontent.com/cBdOXgYGm5cLGaxviqHQflM2yCWnvYv3uU__kFllR0ZMqEVW-IUK6xIizab9q0NVmHjQJzdQ9bVyNTmRp4dbUOkwo5ZEOVPJ=w500-rw' alt='Hình ảnh sản phẩm'></img>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Comment

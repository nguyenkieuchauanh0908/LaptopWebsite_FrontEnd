import Products from './Products/products.js';
import Sidebar from '../../components/Sidebar/sidebar.js';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames/bind';
import styles from './home.page.scss'
const cx = classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Row className={cx('main-section')}>
                <Sidebar />
                <Products />
            </Row >
        </div>


    );
}

export default Home;

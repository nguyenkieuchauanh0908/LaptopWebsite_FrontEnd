import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductManager.module.scss';
import ListProduct from './ListProduct/ListProduct';
import ProductListItem from '../../../components/ProductListItem';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Image from '../../../components/Images';
import * as productService from '../../../services/productService';

const cx = classNames.bind(styles);
function ProductManager() {
    const [productListItems, setProductListItems] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await productService.getAllProducts();
            setProductListItems(result);
        };
        fetchApi();
    }, []);

    // const [productListItems, setProductListItems] = useState([
    //     { id: 1, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
    //     { id: 2, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
    //     { id: 3, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
    //     { id: 4, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
    //     { id: 5, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
    // ]);

    const hideItem = (itemId) => {
        const shouldHide = window.confirm('Bạn có muốn ẩn sản phẩm này không?');
        if (shouldHide) {
            setProductListItems((prevProductListItems) => prevProductListItems.filter((item) => item.id !== itemId));
        }
    };
    const [currentPage, setCurrentPage] = useState(1); // page mặc định là 1
    const totalPages = Math.ceil(productListItems.length / 5); // số page mỗi page 5 item
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
        pageItems.push(i);
    }
    const startIndex = (currentPage - 1) * 5; // item bắt đầu cho mỗi page
    const endIndex = startIndex + 5; // item kết thúc cho mỗi page
    const currentItems = productListItems.slice(startIndex, endIndex); // item cho page hiện tại

    const [addProduct, setAddProduct] = useState(false);
    const showAddProductModal = () => setAddProduct(true);
    const closeAddProductModal = () => setAddProduct(false);

    return (
        <div className={cx('container-fluid')}>
            <div className={cx('row', 'd-flex')}>
                <div className={cx('col-lg-3 col-xl-2 d-none d-xl-block', 'sidebar-wrapper')}>
                    <SidebarAdmin />
                </div>
                <div className={cx('d-block d-xl-none', 'sidebar-mobi-wrapper')}>
                    <SidebarAdminMobi />
                </div>
                <div className={cx('col-12 col-lg-12 col-xl-10 container-fluid', 'content-section')}>
                    <div className={cx('d-flex align-items-center ', 'title')}>Quản lý sản phẩm</div>
                    <div className={cx('wrapper')}>
                        <div className={cx('content')}>
                            <div className={cx('container-fluid')}>
                                <div className={cx('add-btn')}>
                                    <button
                                        className={cx('btn btn-primary btn-lg font-weight-bold')}
                                        onClick={showAddProductModal}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        Thêm
                                    </button>
                                </div>
                                <div className={cx('row align-items-center d-none d-md-flex', 'header')}>
                                    <div className={cx('col-lg-1 col-md-1 d-flex justify-content-center')}>
                                        <p>ID</p>
                                    </div>
                                    <div className={cx('col-lg-5 col-md-5 d-flex justify-content-center')}>
                                        <p>Sản phẩm</p>
                                    </div>
                                    <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center')}>
                                        <p>Giá</p>
                                    </div>
                                    <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center')}>
                                        <p>Số lượng</p>
                                    </div>
                                    <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center')}>
                                        <p>Thao tác</p>
                                    </div>
                                </div>
                                <div className={cx('row align-items-center', 'product-list')}>
                                    <ListProduct>
                                        {currentItems.map((item) => (
                                            <ProductListItem
                                                pId={item._id}
                                                product={item._name}
                                                price={item._price}
                                                quantity={item._quantity}
                                                editItem={"0"}
                                                hideItem={() => hideItem(item.id)}
                                            />
                                        ))}
                                    </ListProduct>
                                </div>
                                <div className={cx('d-flex justify-content-center', 'paging')}>
                                    <ul className={cx('pagination pagination-lg')}>
                                        {currentPage === 1 ? (
                                            <li className={cx('page-item disabled')}>
                                                <span className={cx('page-link')}>Trước</span>
                                            </li>
                                        ) : (
                                            <li className={cx('page-item')}>
                                                <span
                                                    onClick={() => setCurrentPage(currentPage - 1)}
                                                    className={cx('page-link')}
                                                >
                                                    Trước
                                                </span>
                                            </li>
                                        )}
                                        {pageItems.map((index) =>
                                            currentPage === index ? (
                                                <li className={cx('page-item active')}>
                                                    <span className={cx('page-link')}>{index}</span>
                                                </li>
                                            ) : (
                                                <li className={cx('page-item')}>
                                                    <span
                                                        onClick={() => setCurrentPage(index)}
                                                        className={cx('page-link')}
                                                    >
                                                        {index}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                        {currentPage === totalPages ? (
                                            <li className={cx('page-item disabled')}>
                                                <span className={cx('page-link')}>Sau</span>
                                            </li>
                                        ) : (
                                            <li className={cx('page-item')}>
                                                <span
                                                    onClick={() => setCurrentPage(currentPage + 1)}
                                                    className={cx('page-link')}
                                                >
                                                    Sau
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={addProduct} onHide={closeAddProductModal} className={cx('add-product-modal')}>
                        <Modal.Header closeButton>
                            <div className={cx('title-modal')}>Thêm sản phẩm</div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Tên sản phẩm:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Số lượng:</div>
                                </div>
                                <input type="email" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Giá:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>

                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Thông tin:</div>
                                </div>
                                <textarea type="text" className={cx('col-lg-9 col-md-9')} ></textarea>
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Hình ảnh:</div>
                                </div>
                                <div class={cx('col-lg-9 col-md-9','d-flex')}>
                                    <div class={cx('col-lg-6 col-md-6')}>
                                        <Image
                                            src="https://lh3.googleusercontent.com/Jsg6-adZeI1TZnmeIT8Tpal63lIr4tLji5QjZaOWJjjXPY1blN5K9cG1MWkI7LesQj-8Xw80MVRBQwXWd9fs-kC03cyFCxo=w230-rw"
                                            alt="img"
                                        />
                                    </div>
                                    <div class={cx('center')}>
                                        <input type="file" class={cx('form-control')}/>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Danh mục</div>
                                </div>
                                <select className={cx('col-lg-9 col-md-9')} >
                                    <option value="${o.id}">111</option>
                                    <option value="${o.id}">12</option>
								</select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className={cx('btn btn-secondary btn-lg')} onClick={closeAddProductModal}>
                                Đóng
                            </button>
                            <button className={cx('btn btn-primary btn-lg')} onClick={closeAddProductModal}>
                                Thêm
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ProductManager;

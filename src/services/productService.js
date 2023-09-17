import * as httprequest from '../utils/httprequest';

const getProductDetails = async (productId) => {
    try {
        const res = await httprequest.get(`/products/`, {
            params: {
                productId,
            },
        });
        if (res.status === 200) {
            return res.data; // Trả về dữ liệu khi yêu cầu thành công
        } else {
            throw new Error('Yêu cầu không thành công');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi trong quá trình lấy thông tin giỏ hàng'); // Xử lý lỗi và thông báo lỗi cho phía front-end
    }
};

export const getAllProducts = async () => {
    try {
        const res = await httprequest.get(`/products`);
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi trong quá trình lấy thông tin sản phẩm'); // Xử lý lỗi và thông báo lỗi cho phía front-end
    }
};

export const getAllProductsByCategory = async (categoryId) => {
    try {
        const res = await httprequest.get('/categories/products/', {
            params: {
                categoryId,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi trong quá trình lấy danh mục sản phẩm');
    }
};

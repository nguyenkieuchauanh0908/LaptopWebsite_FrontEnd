import * as httprequest from '../utils/httprequest';

export const getCartByUserId = async (userId) => {
    try {
        const res = await httprequest.get(`/carts/`, {
            params: {
                userId,
            },
        });
        console.log(res);
        return res._cartItems;
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi trong quá trình lấy thông tin giỏ hàng'); // Xử lý lỗi và thông báo lỗi cho phía front-end
    }
};

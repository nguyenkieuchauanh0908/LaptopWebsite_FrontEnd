import * as httprequest from '../utils/httprequest';

export const getCartByUserId = async (token) => {
    try {
        const res = await httprequest.get(`/carts/`, {
            headers: {
                Authorization: `Bearer ${token}`, // Gửi token trong header
            },
        });
        return res._cartItems;
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi trong quá trình lấy thông tin giỏ hàng'); // Xử lý lỗi và thông báo lỗi cho phía front-end
    }
};

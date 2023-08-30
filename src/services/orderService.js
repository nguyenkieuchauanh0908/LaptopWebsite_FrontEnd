import * as httprequest from '../utils/httprequest';

const postOrder = async (orderData) => {
    try {
        const response = await httprequest.post('/orders/create', orderData);
        return response;
    } catch (error) {
        console.log('Lỗi khi đặt hàng:', error);
        throw new Error('Đã xảy ra lỗi khi đặt hàng');
    }
};

export { postOrder }; // Export hàm postOrder

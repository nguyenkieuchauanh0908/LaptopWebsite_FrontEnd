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

const postOrderVnpay = async (orderData) => {
    try {
        const response = await httprequest.post('/orders/vnpayCreatePayment', orderData);
        console.log(response);
        const vnpayPaymentUrl = response.vnpayPaymentUrl;
        console.log(vnpayPaymentUrl);
        window.location.href = vnpayPaymentUrl;
    } catch (error) {
        console.log('Lỗi khi đặt hàng:', error);
        throw new Error('Đã xảy ra lỗi khi đặt hàng');
    }
};

export { postOrder, postOrderVnpay }; // Export hàm postOrder

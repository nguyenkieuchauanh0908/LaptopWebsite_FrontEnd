import * as httprequest from '../utils/httprequest';
const postOrder = async (token, orderData) => {
    try {
        // Sử dụng axios.post thay vì httprequest.post
        const response = await httprequest.post('/orders/create', orderData, {
            headers: {
                Authorization: `Bearer ${token}`, // Gửi token trong header
            },
        });
        return response.data; // Trả về dữ liệu phản hồi từ API
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

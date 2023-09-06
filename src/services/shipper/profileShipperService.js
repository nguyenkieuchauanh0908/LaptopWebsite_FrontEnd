import * as shipperhttprequest from '../../utils/httprequest';

export const getUser = async (userId) => {
    try {
        const res = await shipperhttprequest.get(`/shipper/profile/${userId}`);
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi trong quá trình lấy thông tin');
    }
};

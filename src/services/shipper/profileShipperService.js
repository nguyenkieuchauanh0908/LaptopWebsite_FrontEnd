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

export const editProfile = async (userId, data) => {
    try {
        const res = await shipperhttprequest.put(`/shipper/profile/edit/`, data, {
            params: {
                userId,
            },
        });
        return res;
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi trong quá trình cập nhật thông tin');
    }
};


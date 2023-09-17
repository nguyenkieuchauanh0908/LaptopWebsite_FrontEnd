import React from 'react';
import { DarkUserIcon } from '../../../components/Icons';
export const SidebarCustomerNav = [
    {
        title: 'Tài khoản',
        icon: <DarkUserIcon />,
        to: '/profile',
    },
    {
        title: 'Đơn hàng',
        icon: null,
        to: '/admin/product-manager',
    },
    {
        title: 'Thông báo',
        icon: null,
        to: '/admin/customer-manager',
    },
];

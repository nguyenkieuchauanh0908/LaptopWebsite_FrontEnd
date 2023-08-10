import { HeaderOnly } from '../Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Account from '../pages/Account';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Search from '../pages/Search/Search';
import Signup from '../pages/Signup/Signup';
import EmployeeManager from '../pages/Admin/EmployeeManager';
import OrderManager from '../pages/Admin/OrderManager';
import ProfileAdmin from '../pages/Admin/ProfileAdmin';
import Statistical from '../pages/Admin/Statistical';
// public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/product-detail', component: ProductDetail },
    { path: '/cart/checkout', component: CheckOut },
    { path: '/search', component: Search },
    { path: '/admin/employee-manager', component: EmployeeManager, layout: null },
    { path: '/admin/order-manager', component: OrderManager, layout: null },
    { path: '/admin/profile', component: ProfileAdmin, layout: null },
    { path: '/admin/statistical', component: Statistical, layout: null },
];
// Private Routes
const privateRoutes = [{ path: '/account', component: Account }];

export { publicRoutes, privateRoutes };

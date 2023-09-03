import { HeaderOnly } from '../Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import VnPayPayment from '../pages/CheckOut/VnPayPayment';
import Account from '../pages/Account';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Search from '../pages/Search/Search';
import Signup from '../pages/Signup/Signup';
import CustomerManager from '../pages/Admin/CustomerManager';
import EmployeeManager from '../pages/Admin/EmployeeManager';
import ProductManager from '../pages/Admin/ProductManager';
import OrderManager from '../pages/Admin/OrderManager';
import ProfileAdmin from '../pages/Admin/ProfileAdmin';
import Statistical from '../pages/Admin/Statistical';
import Profile from '../pages/Shipper/Profile/Profile';
import ChangePass from '../pages/Shipper/ChangePass/ChangePass';
import Otp from '../pages/Shipper/Otp/Otp';
import Order from '../pages/Shipper/Order/Order';
// public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup, layout: null },
    { path: '/product-detail/:productId', component: ProductDetail },
    { path: '/cart/checkout', component: CheckOut },
    { path: '/cart/vnPayPayment', component: VnPayPayment },
    { path: '/search', component: Search },
    { path: '/admin/customer-manager', component: CustomerManager, layout: null },
    { path: '/admin/employee-manager', component: EmployeeManager, layout: null },
    { path: '/admin/product-manager', component: ProductManager, layout: null },
    { path: '/admin/order-manager', component: OrderManager, layout: null },
    { path: '/admin/profile', component: ProfileAdmin, layout: null },
    { path: '/admin/statistical', component: Statistical, layout: null },
    { path: '/shipper/profile', component: Profile, layout: null },
    { path: '/shipper/changePass', component: ChangePass, layout: null },
    { path: '/shipper/otp', component: Otp, layout: null },
    { path: '/shipper/order', component: Order, layout: null }
    { path: '/shipper/profile', component: Profile, layout: null },
    { path: '/shipper/changePass', component: ChangePass, layout: null },
    { path: '/shipper/otp', component: Otp, layout: null },
    { path: '/shipper/order', component: Order, layout: null },
];
// Private Routes
const privateRoutes = [{ path: '/account', component: Account }];

export { publicRoutes, privateRoutes };

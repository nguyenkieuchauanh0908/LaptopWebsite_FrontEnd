import { HeaderOnly } from '../Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Account from '../pages/Account';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Search from '../pages/Search/Search';

// public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
    { path: '/product-detail', component: ProductDetail },
    { path: '/search', component: Search }
];
// Private Routes
const privateRoutes = [
    { path: '/account', component: Account },
    { path: '/checkout', component: CheckOut, layout: null },
];

export { publicRoutes, privateRoutes };

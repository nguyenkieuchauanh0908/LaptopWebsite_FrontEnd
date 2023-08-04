import { HeaderOnly } from '../Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Account from '../pages/Account';
import Login from '../pages/Login';

// public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
    { path: '/cart/checkout', component: CheckOut },
];
// Private Routes
const privateRoutes = [{ path: '/account', component: Account }];

export { publicRoutes, privateRoutes };

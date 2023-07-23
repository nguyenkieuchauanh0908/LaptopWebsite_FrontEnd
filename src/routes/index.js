import { HeaderOnly } from '../Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Account from '../pages/Account';
// public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart, layout: HeaderOnly },
];
// Private Routes
const privateRoutes = [
    { path: '/account', component: Account },
    { path: '/checkout', component: CheckOut, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };

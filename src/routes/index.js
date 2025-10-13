import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

// Các routes không đăng nhập vẫn vào được
const publicRoutes = [
    {
        path: routesConfig.home,
        component: HomePage,
    },
    {
        path: routesConfig.following,
        component: FollowingPage,
    },
    {
        path: routesConfig.profile,
        component: ProfilePage,
    },
    {
        path: routesConfig.upload,
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: SearchPage,
        layout: null,
    },
];

// Các routes buộc phải đăng nhập, chưa đăng nhập
// thì chuyển hướng sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

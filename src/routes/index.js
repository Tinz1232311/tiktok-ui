import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

// Các routes không đăng nhập vẫn vào được
const publicRoutes = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.following,
        component: FollowingPage,
    },
    {
        path: config.routes.profile,
        component: ProfilePage,
    },
    {
        path: config.routes.upload,
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: SearchPage,
        layout: null,
    },
];

// Các routes buộc phải đăng nhập, chưa đăng nhập
// thì chuyển hướng sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

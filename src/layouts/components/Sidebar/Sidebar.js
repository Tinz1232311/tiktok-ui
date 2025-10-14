import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu from './Menu';
import { MenuItem } from './Menu';
import {
    LiveActiveIcon,
    UserGroupActiveIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveIcon,
    UserGroupIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem 
                    title="For You" 
                    to={config.routes.home} 
                    icon={<HomeIcon />} 
                    activeIcon={<HomeActiveIcon />} 
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem 
                    title="LIVE" 
                    to={config.routes.live} 
                    icon={<LiveIcon />} 
                    activeIcon={<LiveActiveIcon />} 
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;

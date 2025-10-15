import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ fullName, nickName, avatar, check }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex={-1} {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                // Cho phép tương tác với nội dung bên trong Tippy
                interactive
                placement="bottom"
                delay={[800, 0]}
                offset={[-20, 0]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/481228885_667566122356923_6283810518765110664_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aH0icB90CXkQ7kNvwGaHQte&_nc_oc=Adm0niMMaP76SR9_wehOdTboGNzapxXRz4TsC1CqfP90m6OG1J1oG5ROpZr5BEwqLgXx1gCQtfVIwWjCbQ4xzgMP&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=PCU7nbM-d5Dw7Gn26RcYpw&oh=00_AffIcuIdXXrPe_m5L3Ml0DJ6sbVYSDtS4K9dwLgGzpu7ag&oe=68F4F471"
                        alt="1"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Tin</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyen Huu Tin</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

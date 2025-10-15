import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/481228885_667566122356923_6283810518765110664_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aH0icB90CXkQ7kNvwGaHQte&_nc_oc=Adm0niMMaP76SR9_wehOdTboGNzapxXRz4TsC1CqfP90m6OG1J1oG5ROpZr5BEwqLgXx1gCQtfVIwWjCbQ4xzgMP&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=PCU7nbM-d5Dw7Gn26RcYpw&oh=00_AffIcuIdXXrPe_m5L3Ml0DJ6sbVYSDtS4K9dwLgGzpu7ag&oe=68F4F471"
                    alt="1"
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>Tin</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Nguyen Huu Tin</p>
                </div>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>113K </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/481228885_667566122356923_6283810518765110664_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9K0iAIMYLUEQ7kNvwEXs2oo&_nc_oc=Admkl4L670yXDrXxVPIKclVQkcl6GOYXpq4qBlCbgAeM8UDpn_jVjaDMONOtpah9_Aef2zvnldwfSQHnf2HG10Dk&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=IDybmw_dKfSiNRRZrKQQJA&oh=00_Afd3Hyh3b5udQLUzom8s-6jGBmkT7dBgpgUozuP1Pi_wNA&oe=68F05731"
                alt="Tin"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Huu Tin
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>Tinz1232312</span>
            </div>
        </div>
    );
}

export default AcountItem;

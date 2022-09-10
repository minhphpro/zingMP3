import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Search from '../Search';
import { faArrowLeftLong, faArrowRightLong, faGear, faShirt, faUpload } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Buttons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('icon')}>
                    <Button circlem="true" className={cx('icon-row')}>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                    </Button>
                    <Button circlem="true" className={cx('icon-row')}>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </Button>
                </div>
                <div className={cx('search-fields')}>
                    <Search />
                </div>
            </div>
            <div className={cx('right')}>
                <Button circlem="true" className={cx('icon')}>
                    <FontAwesomeIcon icon={faShirt} />
                </Button>
                <Button circlem="true" className={cx('icon')}>
                    <FontAwesomeIcon icon={faVuejs} />
                </Button>
                <Button circlem="true" className={cx('icon', 'upload')}>
                    <FontAwesomeIcon icon={faUpload} />
                </Button>
                <Button circlem="true" className={cx('icon')}>
                    <FontAwesomeIcon icon={faGear} />
                </Button>
                <Button circlem="true" className={cx('icon', 'img')}>
                    <img
                        src="https://s120-ava-talk-zmp3.zmdcdn.me/c/f/5/9/36/120/d7e2c9af9754c1305c6163278f0824c8.jpg"
                        alt="logo"
                    />
                </Button>
            </div>
        </div>
    );
}

export default Header;

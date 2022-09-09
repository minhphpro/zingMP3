import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import {
    faChartLine,
    faClapperboard,
    faCloud,
    faCompactDisc,
    faFolder,
    faHistory,
    faIcons,
    faMusic,
    faPencil,
    faRadio,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { SidebarItem } from './Menu';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar-top')}>
                <Link className={cx('sidebar-title')} to="/"></Link>
                <SidebarItem title="Cá nhân" to="/mymusic" play="true" icon={<FontAwesomeIcon icon={faFolder} />} />
                <SidebarItem title="Khám phá" to="/" icon={<FontAwesomeIcon icon={faCompactDisc} />} />
                <SidebarItem
                    title="#zingchart"
                    to="/zing-chart"
                    play="true"
                    icon={<FontAwesomeIcon icon={faChartLine} />}
                />
                <SidebarItem title="Radio" to="/radio" icon={<FontAwesomeIcon icon={faRadio} />} />
                <SidebarItem title="Theo dõi" to="/following" icon={<FontAwesomeIcon icon={faFolder} />} />
            </div>
            <div className={cx('line')}>
                <div className={cx('inner-line')}></div>
            </div>
            <div className={cx('sidebar-bottom')}>
                <SidebarItem title="Nhạc mới" to="/newmusic" play="true" icon={<FontAwesomeIcon icon={faMusic} />} />
                <SidebarItem title="Thể loại" to="/hub" icon={<FontAwesomeIcon icon={faIcons} />} />
                <SidebarItem title="Top100" to="/top100" icon={<FontAwesomeIcon icon={faStar} />} />
                <SidebarItem title="MV" to="/mv" icon={<FontAwesomeIcon icon={faClapperboard} />} />

                <div className={cx('box-update')}>
                    <div className={cx('title')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</div>
                    <div className={cx('btn-update')}>
                        <a href="google.com">NÂNG CẤP VIP</a>
                    </div>
                </div>
                <div className={cx('library')}>
                    <div className={cx('library-title')}>
                        <span>THƯ VIỆN</span>
                        <span className={cx('pencil')}>
                            <FontAwesomeIcon icon={faPencil} />
                        </span>
                    </div>
                    <SidebarItem
                        title="Bài hát"
                        to="/mymusic/song/favorite"
                        icon={<FontAwesomeIcon icon={faMusic} />}
                    />
                    <SidebarItem
                        title="Playlist"
                        to="/mymusic/library/playlist"
                        icon={<FontAwesomeIcon icon={faPlaystation} />}
                    />
                    <SidebarItem title="Album" to="/mymusic/album" icon={<FontAwesomeIcon icon={faCompactDisc} />} />
                    <SidebarItem
                        title="Nhạc tải lên"
                        to="/mymusic/song/upload"
                        icon={<FontAwesomeIcon icon={faCloud} />}
                    />
                    <SidebarItem title="Gần đây" to="/mymusic/history" icon={<FontAwesomeIcon icon={faHistory} />} />
                </div>
            </div>
            <div className={cx('sidebar-addList')}>
                <span className={cx('plus')}>+</span>
                <span>Taọ playlist mới</span>
            </div>
        </div>
    );
}

export default Sidebar;

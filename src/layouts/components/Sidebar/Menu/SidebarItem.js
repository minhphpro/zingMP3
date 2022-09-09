import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles);
function sidebarItems({ title, to, icon, play, notactive }) {
    return (
        <NavLink
            className={(nav) => cx('wrapper', { active: nav.isActive }, notactive && 'not-active')}
            to={to}
            icon={icon}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
            {play && (
                <span className={cx('icon-play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </span>
            )}
        </NavLink>
    );
}
export default sidebarItems;

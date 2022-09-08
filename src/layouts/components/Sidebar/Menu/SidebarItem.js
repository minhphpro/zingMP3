import { NavLink } from 'react-router-dom';
import './SidebarItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function sidebarItems({ title, to, icon, play }) {
    return (
        <NavLink className="sidebar-item" to={to} icon={icon}>
            <span className="icon">{icon}</span>
            <span className="title">{title}</span>
            {play && (
                <span className="icon-play">
                    <FontAwesomeIcon icon={faCirclePlay} />
                </span>
            )}
        </NavLink>
    );
}

export default sidebarItems;

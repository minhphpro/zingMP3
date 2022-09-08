import { NavLink } from 'react-router-dom';
import config from '~/config';
function FilterNavbar() {
    return (
        <div className="filter">
            <NavLink to={config.routes.mymusic_song} className="filter-love">
                YÊU THÍCH
            </NavLink>

            <NavLink to={config.routes.mymusic_upload} className="filter-upload">
                ĐÃ TẢI LÊN
            </NavLink>
        </div>
    );
}

export default FilterNavbar;

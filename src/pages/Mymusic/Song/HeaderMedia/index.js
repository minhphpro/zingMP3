import { faEllipsis, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function HeaderMedia() {
    return (
        <div className="header-media">
            <div className="left">
                <div className="title-song">BÀI HÁT</div>

                <div className="checkall-fields">
                    <span className="icon-checkall">
                        <input type="checkbox" />
                    </span>
                    <span className="add-playlist">
                        <FontAwesomeIcon icon={faFileCirclePlus} />
                        <span> THÊM VÀO DANH SÁCH PHÁT</span>
                    </span>
                    <span className="icon-more">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                </div>
            </div>
            <div className="right">
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
        </div>
    );
}

export default HeaderMedia;

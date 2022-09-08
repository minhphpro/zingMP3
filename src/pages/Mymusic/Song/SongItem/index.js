import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClapperboard,
    faEllipsis,
    faHeart,
    faMicrophoneAlt,
    faMusic,
    faPlay,
} from '@fortawesome/free-solid-svg-icons';
import './SongItem.scss';
import Tippy from '@tippyjs/react';

function SongItem({ songName, src, name, album, time, mv }) {
    return (
        <div className="wrapper-songitem">
            <div className="left">
                <div className="icon">
                    <span className="icon-music">
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className="icon-checkbox">
                        <input type="checkbox" />
                    </span>
                </div>

                <span className="avatar">
                    <img src={src} alt="avatar" />
                    <span className="play">
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                    <span className="overlay"></span>
                </span>
                <span className="infor">
                    <h4>{songName}</h4>
                    <h6>{name}</h6>
                </span>
            </div>
            <div className="right">
                <div>
                    <h6>{album}</h6>
                </div>

                <div className="icon">
                    {mv ? (
                        <span>
                            <Tippy content="Xem MV">
                                <span className="mv">
                                    <FontAwesomeIcon icon={faClapperboard} />
                                </span>
                            </Tippy>
                        </span>
                    ) : (
                        ''
                    )}
                    <Tippy content="Phát cùng lời bài hát">
                        <span className="micro">
                            <FontAwesomeIcon icon={faMicrophoneAlt} />
                        </span>
                    </Tippy>
                    <Tippy content="Xóa khỏi thư viện">
                        <span className="heart">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </Tippy>
                    <span className="time">{time}</span>
                    <Tippy content="Khác">
                        <span className="elip">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default SongItem;

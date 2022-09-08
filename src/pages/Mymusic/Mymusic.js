import { faAngleRight, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Mymusic.module.scss';
import Button from '~/components/Buttons';
const cx = classNames.bind(styles);

function Mymusic({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Thư viện</h2>
                <Button circlem className={cx('play-btn')}>
                    <FontAwesomeIcon icon={faPlay} />
                </Button>
            </div>
            <div className={cx('title')}>
                <div className={cx('left')}>
                    <h3>PLAYLIST</h3>
                    <Button circles className={cx('btn-plus')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>
                <div className={cx('right')}>
                    <h4>TẤT CẢ</h4>
                    <span className={cx('btn-right')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </div>
            </div>

            <div className={cx('tab')}>
                <NavLink to="/mymusic/song/favorite" className={(nav) => cx('tab-item', { active: nav.isActive })}>
                    BÀI HÁT
                </NavLink>
                <NavLink to="/mymusic/podcast" className={(nav) => cx('tab-item', { active: nav.isActive })}>
                    PODCAST
                </NavLink>
                <NavLink to="/mymusic/album" className={(nav) => cx('tab-item', { active: nav.isActive })}>
                    ALBUM
                </NavLink>
                <NavLink to="/mymusic/mv" className={(nav) => cx('tab-item', { active: nav.isActive })}>
                    MV
                </NavLink>
            </div>
        </div>
    );
}

export default Mymusic;

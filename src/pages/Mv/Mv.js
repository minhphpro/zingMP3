import React from 'react';
import classNames from 'classnames/bind';
import styles from './Mv.module.scss';
const cx = classNames.bind(styles);

function Mv() {
    return (
        <div className={cx('wrapper')}>
            <h2>Mv page</h2>
        </div>
    );
}

export default Mv;

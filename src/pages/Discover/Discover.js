import React from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <h2>Discover page</h2>
        </div>
    );
}

export default Discover;

import React from 'react';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';
const cx = classNames.bind(styles);

function Radio() {
    return (
        <div className={cx('wrapper')}>
            <h2>Radio page</h2>
        </div>
    );
}

export default Radio;

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Player from '~/layouts/components/Player';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <Header />
                    </div>
                    <div className={cx('page')}> {children}</div>
                </div>
            </div>
            <div className={cx('player')}>
                <Player />
            </div>
        </div>
    );
}

export default DefaultLayout;

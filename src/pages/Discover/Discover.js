import { useState, useEffect } from 'react';
import request from '~/utils/httpRequest';

import Carousel from '~/components/Carousel';
import Loading from '../Loading';
import Section from '~/components/Section';
import Item from '~/components/Item';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
const cx = classNames.bind(styles);

function Decover() {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFail, setIsFail] = useState(false);

    useEffect(() => {
        request.get('/home').then((res) => {
            console.log(res.data);
            setIsLoading(false);
            setResult(res.data.items);
            document.title = 'ZingMP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và ...';
        });
    }, []);

    if (isLoading) {
        return <Loading />;
    } else if (isFail) {
        return <h1>Bi Loi</h1>;
    } else {
        return (
            <div className={cx('wrapper')}>
                {/* <Carousel data={result[0]} className={cx('carousel')} /> */}
                {result.map(
                    (playlist, index) =>
                        playlist.sectionType === 'playlist' && (
                            <Section key={index} title={playlist.title} className={cx('section')}>
                                {playlist.items.map((item) => (
                                    <Item key={item.encodeId} data={item} />
                                ))}
                            </Section>
                        ),
                )}
            </div>
        );
    }
}

export default Decover;

import { useState, useEffect } from 'react';
import request from '~/utils/httpRequest';
import Loading from '../Loading';
import RadioItem from './RadioItem';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';
const cx = classNames.bind(styles);

function Radio() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        request.get(`/radio`).then((res) => {
            console.log(res.data.items[0]);
            setData(res.data.items[0]);
            setIsLoading(false);
            document.title = 'Radio';
        });
    }, []);
    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <div className={cx('wrapper')}>
                {data.items.map((item) => (
                    <RadioItem key={item.encodeId} data={item} />
                ))}
            </div>
        );
    }
}

export default Radio;

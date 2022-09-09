import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    cirlcel = false,
    circlem = false,
    circles = false,
    roundedm = false,
    roundeds = false,
    circlescolor = false,
    children,
    onClick,
    className,
    to,
    href,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx({
        [className]: className,
        cirlcel,
        circlem,
        circles,
        circlescolor,
        roundedm,
        roundeds,
        className,
    });

    return (
        <Comp className={classes} onClick={onClick} {...props}>
            {children}
        </Comp>
    );
}
export default Button;

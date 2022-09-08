// import PropTypes from 'prop-types';
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

    // Remove event listener when btn is disabled

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

// Button.propTypes = {
//     to: PropTypes.string,
//     href: PropTypes.string,
//     primary: PropTypes.bool,
//     outline: PropTypes.bool,
//     text: PropTypes.bool,
//     rounded: PropTypes.bool,
//     disabled: PropTypes.bool,
//     small: PropTypes.bool,
//     large: PropTypes.bool,
//     children: PropTypes.node.isRequired,
//     className: PropTypes.string,
//     leftIcon: PropTypes.node,
//     rightIcon: PropTypes.node,
//     onClick: PropTypes.func,
// };

export default Button;

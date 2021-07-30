import React from 'react';

interface IProps {
    label?: string;
    onClick?: () => void;
    backgroundColor?: string;
}

const Button = (props: IProps): JSX.Element => {
    const {
        label = 'click me!',
        onClick,
        backgroundColor = 'blue'
    } = props;

    return (
        <button
            type="button"
            style={{backgroundColor}}
            onClick={onClick}
        >
            {label}
        </button>
    )
};

export default Button;
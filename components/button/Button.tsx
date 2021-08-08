import React from 'react';
import './button.css';

interface IProps {
    /**button label */
    label?: string;
    /**buttton background color */
    backgroundColor?: string;
    /**button click handler */
    onClick?: () => void;
    /**decides if the button is disabled */
    isDisabled?: boolean;
}

const Button = (props: IProps): JSX.Element => {
    const {
        label = 'click me!',
        onClick,
        backgroundColor = '#35f3a7',
        isDisabled = false
    } = props;

    return (
        <button
            type="button"
            style={{backgroundColor}}
            onClick={onClick}
            disabled={isDisabled}
            className="button"
        >
            {label}
        </button>
    )
};

export default Button;
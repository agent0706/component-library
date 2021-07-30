import React from 'react';

interface IProps {
    placeholder?: string;
    onChange?: () => void;
}

const Input = (props: IProps): JSX.Element => {
    const {
        placeholder = 'Type here',
        onChange
    } = props;

    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
        />
    )
};

export default Input;
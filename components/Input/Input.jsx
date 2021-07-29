const Input = (props) => {
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
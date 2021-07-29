const Button = (props) => {
    const {
        label = 'click me!',
        onClick,
        backgroundColor = 'black'
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
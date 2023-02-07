
const Dropdown = ({ children, inputId, title, ...rest }) => {
    return (
        <div {...rest}>
            <input id={inputId} type='checkbox' hidden />
            <label htmlFor={inputId}>{title}<span>&#10095;</span></label>
            {children}
        </div>
    );
}

export default Dropdown;
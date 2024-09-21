import { useRef } from "react";

const Row = ({children, className, ref}) => {

    const rowRef = useRef(null);
    const currentRef = rowRef || ref;

    return (
        <div className={`row ${className}`} ref={currentRef}>
            {children}
        </div>
    );
}

Row.defaultProps = {
    children: <></>,
    className: '',
    ref: null,
};

export default Row;
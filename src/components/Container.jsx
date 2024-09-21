import { useRef } from "react";

const Container = ({id, children, className, ref, style}) => {

    const containerRef = useRef(null);
    const currentRef = containerRef || ref;

    return (
        <div id={id} className={`container my-2 ${className}`} ref={currentRef} style={style}>
            {children}
        </div>
    );
}

Container.defaultProps = {
    id: 'container',
    children: <></>,
    className: '',
    ref: null,
    style: {},
};

export default Container;
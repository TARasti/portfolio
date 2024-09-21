import { useRef } from "react";

const Column = ({children, className, style, col, ref}) => {

    const columnRef = useRef(null);
    const currentRef = columnRef || ref;
    const columns = {
        1: 'col-md-1 col-sm-12 col-lg-1',
        2: 'col-md-2 col-sm-12 col-lg-2',
        3: 'col-md-3 col-sm-12 col-lg-3',
        4: 'col-md-4 col-sm-12 col-lg-4',
        5: 'col-md-5 col-sm-12 col-lg-5',
        6: 'col-md-6 col-sm-12 col-lg-6',
        7: 'col-md-7 col-sm-12 col-lg-7',
        8: 'col-md-8 col-sm-12 col-lg-8',
        9: 'col-md-9 col-sm-12 col-lg-9',
        10: 'col-md-10 col-sm-12 col-lg-10',
        11: 'col-md-11 col-sm-12 col-lg-11',
        12: 'col-md-12 col-sm-12 col-lg-12',
    }

    const column =  col ? columns[col] : columns[12];

    return (
        <div className={`${column} ${className}`} style={style} ref={currentRef}>
            {children}
        </div>
    );
}

Column.defaultProps = {
    children: <></>,
    className: '',
    col: '12',
    style: {},
    ref: null,
};

export default Column;
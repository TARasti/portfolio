import React, { useState } from 'react';
import '../css/Tooltip.css';

const Tooltip = ({ message, children }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className="tooltip-container"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}>
            {children}
            {visible && <div className="tooltip-box">{message}</div>}
        </div>
    );
};

export default Tooltip;

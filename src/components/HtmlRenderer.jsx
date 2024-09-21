import React, { useRef } from 'react';
import DOMPurify from 'dompurify';

const HtmlRenderer = ({ className, style, id, htmlContent, tag }) => {
    const contentRef = useRef(null);
    const sanitizedHtml = DOMPurify.sanitize(htmlContent);
    const Tag = tag ?? 'div';

    return (
        <Tag
            ref={contentRef}
            className={className}
            style={style}
            id={id}
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
    );
};

HtmlRenderer.defaultProps = {
    className: '',
    style: {},
    id: '',
    htmlContent: '',
    tag: 'div',
};

export default HtmlRenderer;

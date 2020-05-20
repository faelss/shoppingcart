import React from 'react';
import './footer.css';

function Footer({ style, ...rest}) {
    
    return (
        <div className="footer" style={style}>
            A nice footer!
        </div>
    )
}

export default Footer;

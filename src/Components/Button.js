import React from 'react';
import './Button.css';

function Button({imp,text}) {
    return (
        <div className= {`button ${imp==='secondary'? 'button__white':''}`}>
            <a href="#">
                {text}
            </a>
        </div>
    )
}

export default Button

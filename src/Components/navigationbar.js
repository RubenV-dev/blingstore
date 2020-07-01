import React from 'react';

const Nav = (props) => {
    return (
        <nav className="navigation">
            <li onClick={props.handleClick} id="aboutme" >About Me</li>
        </nav>
    )
}

export default Nav;
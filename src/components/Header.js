import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/firstCounter'>First Counter</Link></li>
                <li><Link to='/secondCounter'>Second Counter</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;
import React from "react";

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <ul className="d-flex">
                <li>
                    <a href="#">Users</a>
                </li>
                <li>
                    <a href="#">Groups</a>
                </li>
            </ul>
        </div>
    );
};

export default Header
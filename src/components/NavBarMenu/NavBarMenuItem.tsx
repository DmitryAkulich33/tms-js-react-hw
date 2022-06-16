import React from "react";

interface INavBarMenuItem {
    postTitle: string;
}

const NavBarMenuItem: React.FC<INavBarMenuItem> = ({postTitle}) => {
    return (
        <li className="nav-item active">
            <a className="nav-link" href="#">{postTitle}</a>
        </li>
    )
}

export default NavBarMenuItem;
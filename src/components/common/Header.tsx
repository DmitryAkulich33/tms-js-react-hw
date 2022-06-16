import React from "react";
import posts from "../../constants/posts";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

const Header: React.FC = () => {
    return (
        <header>
            <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavBarMenu posts={posts}/>
            </nav>
        </header>
    )
}

export default Header;
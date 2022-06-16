import React from "react";
import logo from "../../img/logo.png";
import SearchForm from "../Forms/SearchForm";
import {IPost} from "../../types/IPost";
import NavBarMenuItem from "./NavBarMenuItem";

interface INavBarMenu {
    posts: Array<IPost>
}

const NavBarMenu: React.FC<INavBarMenu> = ({posts}) => {
    return (
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo"/>
            </a>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    {posts.map((post) => <NavBarMenuItem postTitle={post.name}/>)}
                </ul>
                <SearchForm/>
            </div>
        </div>
    )
}

export default NavBarMenu;
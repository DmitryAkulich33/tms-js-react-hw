import React from "react";
import img from "*.jpeg";
import ReadMore from "../common/ReadMore";
import {IPostCardProps} from "../../types/IPostCardProps";

type ICardFooter = Pick<IPostCardProps, "userAvatar" | "userName" | "postDate">

const CardFooter: React.FC<ICardFooter> = ({userAvatar, userName, postDate}) => {
    return (
        <div className="metafooter">
            <div className="wrapfooter">
                <span className="meta-footer-thumb">
                    <a href="src/components/Cards/FeaturedCard#">
                        <img className="author-thumb" src={userAvatar} alt={userAvatar}/>
                    </a>
                </span>
                <span className="author-meta">
                    <span className="post-name">
                        <a href="#">{userName}</a>
                    </span>
                    <br/>
                    <span className="post-date">{postDate}</span>
                    <span className="dot"></span>
                    <span className="post-read">6 min read</span>
                </span>
                <ReadMore/>
            </div>
        </div>
    )
}

export default CardFooter;
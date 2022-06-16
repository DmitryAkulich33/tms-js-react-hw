import React from "react";
import CardFooter from "./CardFooter";
import {IPostCardProps} from "../../types/IPostCardProps";

type ICardBlock = Pick<IPostCardProps, "title" | "description" | "postDate" | "userAvatar" | "userName">

const CardBlock: React.FC<ICardBlock> = ({title, description, postDate, userAvatar, userName}) => {
    return (
        <div className="card-block">
            <h2 className="card-title"><a href="#">{title}</a></h2>
            <h4 className="card-text">{description}</h4>
            <CardFooter postDate={postDate} userAvatar={userAvatar} userName={userName}/>
        </div>
    )
}

export default CardBlock;
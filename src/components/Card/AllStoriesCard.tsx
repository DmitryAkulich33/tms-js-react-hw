import React from "react";
import {IPostCardProps} from "../../types/IPostCardProps";
import CardBlock from "./CardBlock";

const AllStoriesCard: React.FC<IPostCardProps> = (
    {title, description, imageUrl, postDate, userAvatar, userName}
) => {
    return (
        <div className="card">
            <a href="#">
                <img className="img-fluid" src={imageUrl} alt=""/>
            </a>
            <CardBlock
                title={title}
                description={description}
                postDate={postDate}
                userAvatar={userAvatar}
                userName={userName}
            />
        </div>
    )
}

export default AllStoriesCard;
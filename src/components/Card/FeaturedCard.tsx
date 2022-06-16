import React from "react";
import {IPostCardProps} from "../../types/IPostCardProps";
import CardBlock from "./CardBlock";

const FeaturedCard: React.FC<IPostCardProps> = ({title, description, imageUrl, postDate, userAvatar, userName}) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-5 wrapthumbnail">
                    <a href="#">
                        <div className="thumbnail" style={{backgroundImage: `url(${imageUrl})`}}>
                        </div>
                    </a>
                </div>
                <div className="col-md-7">
                    <CardBlock
                        title={title}
                        description={description}
                        postDate={postDate}
                        userAvatar={userAvatar}
                        userName={userName}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard;
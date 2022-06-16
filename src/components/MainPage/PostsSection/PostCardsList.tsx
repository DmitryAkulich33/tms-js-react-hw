import React from "react";

interface IPostCardsList {
    listClassName: string;
    children: React.ReactNode
}

const PostCardsList: React.FC<IPostCardsList> = ({listClassName, children}) => {
    return (
        <div className={`card-columns ${listClassName}`}>
            {children}
        </div>
    )
}

export default PostCardsList;
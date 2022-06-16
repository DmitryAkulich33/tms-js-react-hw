import React from "react";

interface IPostsSectionTitle {
    title: string;
}

const PostsSectionTitle: React.FC<IPostsSectionTitle> = ({title}) => {
    return (
        <div className="section-title">
            <h2><span>{title}</span></h2>
        </div>
    )
}

export default PostsSectionTitle;
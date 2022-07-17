import React from "react";
import { ITag } from "../../../types";
import {Link} from "react-router-dom";

export interface ITagsProps {
    tags?: ITag[];
}

const Tags: React.FC<ITagsProps> = ({ tags = [] }) => {
    return (
        <div className="after-post-tags">
            <ul className="tags">
                {tags.map((tag, index) => (
                    <li key={index}>
                        <Link to={tag.link ?? "#"}>{tag.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tags;
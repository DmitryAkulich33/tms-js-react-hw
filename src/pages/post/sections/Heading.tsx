import React from "react";
import {IArticle} from "../../../types";
import {Link} from "react-router-dom";

const Heading: React.FC<Partial<IArticle>> = ({
                                                  title,
                                                  aboutAuthor,
                                                  postReadTime,
                                                  postDate,
                                                  authorName,
                                                  authorAvatarUrl,
                                                  authorId,
                                              }) => {
    return (
        <div className="mainheading">
            <div className="row post-top-meta">
                <div className="col-md-2">
                    <Link to={`/author/${authorId}`}>
                        <img
                            className="author-thumb"
                            src={
                                authorAvatarUrl ??
                                "https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                            }
                            alt={authorName ?? ""}
                        />
                    </Link>
                </div>
                <div className="col-md-10">
                    <Link className="link-dark" to={`/author/${authorId}`}>
                        {authorName ?? "Admin"}
                    </Link>
                    {!!aboutAuthor && <span className="author-aboutAuthor">{aboutAuthor}</span>}
                    {!!postDate && <span className="post-date">{postDate}</span>}
                    {!!postDate && !!postReadTime && <span className="dot"></span>}
                    {!!postReadTime && <span className="post-read">{postReadTime}</span>}
                </div>
            </div>

            <h1 className="posttitle">{title}</h1>
        </div>
    );
};

export default Heading;
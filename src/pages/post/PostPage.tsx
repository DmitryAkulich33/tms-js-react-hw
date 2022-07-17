import React, {useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import {RelatedSection} from "../../components/sections/Related";

//layout
import {MainLayout} from "../../layouts";

import Share from "./sections/Share";
import Tags from "./sections/Tags";
import Content from "./sections/Content";
import Heading from "./sections/Heading";

//mock data
import {posts} from "./postMockData";

const PostPage = () => {
    const { id } = useParams<{ id: string }>();

    const post = posts.find(post => post.id === Number(id));

    return (
        <MainLayout>
            <div className="container">
                {!!post && (
                    <div className="row">
                        <div className="col-md-2 col-xs-12">
                            <Share/>
                        </div>
                        <div className="col-md-8 col-md-offset-2 col-xs-12">
                            <Heading
                                title={`${post.title} id: ${post.id} `}
                                aboutAuthor={post.aboutAuthor}
                                authorLink={`/author/${post.id}`}
                                authorName={post.authorName}
                                authorAvatarUrl={post.authorAvatarUrl}
                                postDate={post.postDate}
                                postReadTime={post.postReadTime}
                            />
                            <img className="featured-image img-fluid" src="assets/img/demopic/10.jpg" alt=""></img>
                            <Content>
                                <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                            </Content>
                            <Tags tags={post.tags}/>
                        </div>
                    </div>
                )}
            </div>
            <RelatedSection/>
        </MainLayout>
    );
};

export default PostPage;
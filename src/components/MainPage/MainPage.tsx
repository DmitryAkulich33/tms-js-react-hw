import React from 'react';
import PageHeading from "../common/PageHeading";
import PostsSection from "./PostsSection/PostsSection";
import Footer from "../common/Footer";
import featuredPostCards from "../../constants/featuredPostCards";
import allStoriesPostCards from "../../constants/allStoriesPostCards";
import * as Constants from "../../constants/variables"
import Header from "../common/Header";

const MainPage: React.FC = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <PageHeading title={Constants.MAIN_PAGE_TITLE}/>
                <PostsSection
                    className={"featured-posts"}
                    title={Constants.FEATURED_TITLE}
                    postCardListClassName={"listfeaturedtag"}
                    postCards={featuredPostCards}
                    cardType={Constants.FEATURED_TYPE}/>
                <PostsSection
                    className={"recent-posts"}
                    title={Constants.ALL_STORIES_TITLE}
                    postCardListClassName={"listrecent"}
                    postCards={allStoriesPostCards}
                    cardType={Constants.ALL_STORIES_TYPE}/>
                <Footer/>
            </div>
        </>
    )
}

export default MainPage;

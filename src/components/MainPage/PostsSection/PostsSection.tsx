import React from "react";
import PostsSectionTitle from "./PostsSectionTitle";
import PostCardsList from "./PostCardsList";
import {IPostCard} from "../../../types/IPostCard";
import FeaturedCard from "../../Card/FeaturedCard";
import AllStoriesCard from "../../Card/AllStoriesCard";
import * as Constants from "../../../constants/variables";

interface IPostsSection {
    className: string;
    title: string;
    postCardListClassName: string;
    postCards: Array<IPostCard>;
    cardType: string;
}

const PostsSection: React.FC<IPostsSection> = ({className, title, postCardListClassName, postCards, cardType}) => {
    const getFeaturedCards = (postCards: Array<IPostCard>) => {
        return postCards.map(card =>
            <FeaturedCard
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                description={card.description}
                postDate={card.postDate}
                userAvatar={card.user.avatar}
                userName={card.user.userName}
            />
        )
    }

    const getAllStoriesCards = (postCards: Array<IPostCard>) => {
        return postCards.map(card =>
            <AllStoriesCard
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                description={card.description}
                postDate={card.postDate}
                userAvatar={card.user.avatar}
                userName={card.user.userName}
            />
        )
    }

    const cards = cardType === Constants.FEATURED_TYPE
        ? getFeaturedCards(postCards)
        : (cardType === Constants.ALL_STORIES_TYPE ? getAllStoriesCards(postCards) : null)

    return (
        <section className={className}>
            <PostsSectionTitle title={title}/>
            <PostCardsList listClassName={postCardListClassName}>
                {cards}
            </PostCardsList>
        </section>
    )
}

export default PostsSection;
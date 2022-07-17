import { IArticleCard } from "../../../types";

const Demopic1 = require("../../../assets/img/demopic/1.jpg")
const Demopic2 = require("../../../assets/img/demopic/2.jpg")
const Demopic3 = require("../../../assets/img/demopic/3.jpg")
const Demopic4 = require("../../../assets/img/demopic/4.jpg")
const Demopic5 = require("../../../assets/img/demopic/5.jpg")
const Demopic6 = require("../../../assets/img/demopic/6.jpg")
const Demopic7 = require("../../../assets/img/demopic/7.jpg")
const Demopic8 = require("../../../assets/img/demopic/8.jpg")
const Demopic9 = require("../../../assets/img/demopic/9.jpg")
const Demopic10 = require("../../../assets/img/demopic/10.jpg")

const recentArticles: IArticleCard[] = [
    {
        id: 1,
        title: "Autumn doesn't have to be nostalgic, you know?",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic5,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 2,
        title: "Little red dress and a perfect summer",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic6,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 3,
        title: "10 Things you should know about house",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic7,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 4,
        title: "Best galleries in the world with photos",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic8,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 5,
        title: "Thinking outside the box can help you prosper",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic9,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 6,
        title: "Visiting the world means learning cultures",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic10,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
];

const featuredArticles: IArticleCard[] = [
    {
        id: 1,
        title: "Autumn doesn't have to be nostalgic, you know?",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic1,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 2,
        title: "Little red dress and a perfect summer",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic2,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 3,
        title: "10 Things you should know about choosing your house",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic3,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 4,
        title: "Best galleries in the world with photos",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        authorName: "Sal",
        thumbUrl: Demopic4,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
];

export { recentArticles, featuredArticles };
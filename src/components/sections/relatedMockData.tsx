import { IArticleCard } from "../../types";

const Demopic5 = require("../../assets/img/demopic/5.jpg")
const Demopic6 = require("../../assets/img/demopic/6.jpg")
const Demopic7 = require("../../assets/img/demopic/7.jpg")

const relatedArticles: IArticleCard[] = [
    {
        id: 1,
        title: "Autumn doesn't have to be nostalgic, you know?",
        authorName: "Sal",
        thumbUrl: Demopic5,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 2,
        title: "Little red dress and a perfect summer",
        authorName: "Sal",
        thumbUrl: Demopic6,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
    {
        id: 3,
        title: "10 Things you should know about choosing your house",
        authorName: "Sal",
        thumbUrl: Demopic7,
        postDate: "22 July 2017",
        postReadTime: "6 min read",
        authorId: 1,
    },
];

export { relatedArticles };
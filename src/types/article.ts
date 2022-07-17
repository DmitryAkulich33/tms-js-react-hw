export interface IArticleCard {
    id: number;
    link?: string;
    title?: string;
    text?: string;
    postReadTime?: string;
    postDate?: string;
    authorName?: string;
    authorAvatarUrl?: string;
    authorLink?: string;
    thumbUrl?: string;
    authorId: number;
}

export interface IArticle {
    id: number;
    title: string;
    content: string;
    tags?: ITag[];
    aboutAuthor?: string;
    postReadTime?: string;
    postDate?: string;
    authorName?: string;
    authorAvatarUrl?: string;
    authorLink?: string;
    authorId: number;
}

export interface ITag {
    link?: string;
    title: string;
}
import {IUser} from "./IUser";

export interface IPostCard {
    id: string,
    title: string;
    description: string;
    imageUrl: string;
    postDate: string;
    user: IUser
}
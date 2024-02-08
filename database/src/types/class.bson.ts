import { ObjectId } from "mongodb";

export type ClassBson  = {
    _id: ObjectId;
    name: string;
    categoryId: string;
}
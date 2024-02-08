import { ObjectId } from "mongodb";

export type RaceBson = {
    _id: ObjectId;
    categoryId: string;
    name: string;
    size: string;
}
import { ObjectId } from "mongodb";

export type RaceCategoryBson = {
    _id: ObjectId;
    name: string;
}
import { ObjectId } from "mongodb";

export type ChapterBson = {
    _id: ObjectId;
    name: string;
    story: string;
    date: Date;
    worldId: string;
}
import { ObjectId } from "mongodb";

export type WorldBson = {
    _id: ObjectId;
    name: string;
    createdAt: string;
    deletedAt: string;
    active: boolean;
}
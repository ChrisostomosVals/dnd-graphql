import { ObjectId } from "mongodb";

export type UserRoleBson = {
    _id: ObjectId;
    role: string;
}
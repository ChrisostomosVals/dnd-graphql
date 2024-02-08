import { ObjectId } from "mongodb";

export type LocationBson = {
    _id: ObjectId;
    x: string;
    y: string;
    date: number;
    time: string;
    year: number;
    season: string;
    events?: string[];
}
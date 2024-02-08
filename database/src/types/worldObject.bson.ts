import { ObjectId } from "mongodb";
import { WorldObjectPropBson } from "./worldObjectProperty.bson";

export type WorldObjectBson = {
    _id: ObjectId;
    worldId: string;
    name: string;
    type: string;
    description?: string;
    properties?: WorldObjectPropBson[];
}
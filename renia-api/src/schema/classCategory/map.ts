import { ClassCategoryBson } from "../../../../database/src/types";
import { ClassCategory } from "./model";

export const mapOne = (obj: ClassCategoryBson): ClassCategory => {
    return {
        _id: obj._id.toString(),
        name: obj.name,
    };
};

export const mapMany = (classes: ClassCategoryBson[]): ClassCategory[] => {
    return classes.map(mapOne);
};
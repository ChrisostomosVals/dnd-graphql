import { Db } from "mongodb";
import { ClassCategory } from "../model";
import { ClassCategoryService } from "../data";

export const getClassCategories = async (parent: any, args: any, context:{db: Db}): Promise<ClassCategory[]> => {
    const service = new ClassCategoryService(context.db);
    return await service.getAll();
}
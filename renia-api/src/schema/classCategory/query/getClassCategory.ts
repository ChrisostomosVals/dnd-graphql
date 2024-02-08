import { Db } from "mongodb";
import { ClassCategoryService } from "../data";
import { ClassCategory } from "../model";

export const getClassCategory = async (parent: any, args: { id: string }, context: { db: Db }): Promise<ClassCategory> => {
    const service = new ClassCategoryService(context.db);
    return (await service.getByIdAsync(args.id))!;
}
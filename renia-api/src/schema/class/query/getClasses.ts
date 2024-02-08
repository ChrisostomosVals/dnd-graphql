import { Db } from "mongodb";
import { Class } from "../model";
import { ClassService } from "../data";

export const getClasses = async (parent: any, args: any, context:{db: Db}): Promise<Class[]> => {
    const service = new ClassService(context.db);
    return await service.getAll();
}
import { Db } from "mongodb";
import { ClassService } from "../data";
import { Class } from "../model";

export const getClass = async (parent: any, args: { id: string }, context: { db: Db }): Promise<Class> => {
    const service = new ClassService(context.db);
    return (await service.getByIdAsync(args.id))!;
}
import { Db } from "mongodb";
import { ChapterService } from "../data";
import { Chapter } from "../model";

export const getChapter = async (parent: any, args: { id: string }, context: { db: Db }): Promise<Chapter> => {
    const service = new ChapterService(context.db);
    return (await service.getByIdAsync(args.id))!;
}
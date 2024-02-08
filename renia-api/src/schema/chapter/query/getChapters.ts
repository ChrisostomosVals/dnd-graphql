import { Db } from "mongodb";
import { Chapter } from "../model";
import { ChapterService } from "../data";

export const getChapters = async (parent: any, args: any, context:{db: Db}): Promise<Chapter[]> => {
    const service = new ChapterService(context.db);
    return await service.getAllAsync();
}
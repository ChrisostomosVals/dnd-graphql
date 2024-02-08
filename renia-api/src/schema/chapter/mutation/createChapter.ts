import { Db } from "mongodb";
import { ChapterService } from "../data";
import { Chapter, CreateChapter } from "../model";

export const createChapter = async (parent: any, args: {data: CreateChapter}, context: { db: Db }): Promise<Chapter> => {
    const service = new ChapterService(context.db);
    return await service.createAsync(args.data);
}
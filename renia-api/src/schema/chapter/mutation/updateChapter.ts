import { Db } from "mongodb";
import { ChapterService } from "../data";
import { Chapter, UpdateChapter } from "../model";

export const updateChapter = async (parent: any, args: UpdateChapter, context: { db: Db }): Promise<Chapter> => {
    const service = new ChapterService(context.db);
    return await service.updateAsync(args);
}
import { Db } from "mongodb";
import { ChapterService } from "../data";

export const deleteChapter = async (parent: any, args: { id: string }, context:{db: Db}): Promise<boolean> => {
    const service = new ChapterService(context.db);
    return await service.deleteAsync(args.id);
}
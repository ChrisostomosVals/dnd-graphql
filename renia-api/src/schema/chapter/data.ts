import { Db, ObjectId } from "mongodb";
import { ChapterRepository } from "../../../../database/src/repository";
import { map } from "../../mapper";
import { Chapter, CreateChapter, UpdateChapter } from "./model";
import { ChapterBson } from "../../../../database/src/types";
export class ChapterService {
  private repository: ChapterRepository;

  constructor(db: Db) {
    this.repository = new ChapterRepository(db);
  }

  async getAllAsync(): Promise<Chapter[]> {
    const chapters = await this.repository.getAsync();
    return chapters.map(map<ChapterBson, Chapter>);
  }

  async getByIdAsync(id: string): Promise<Chapter | null> {
    const chapter = await this.repository.getByIdAsync(id);
    if (!chapter) return null;
    return map<ChapterBson, Chapter>(chapter);
  }

  async createAsync(req: CreateChapter): Promise<Chapter> {
    const chapter: ChapterBson = { _id: new ObjectId(), name: req.name, story: req.story, date: new Date(req.date), worldId: req.worldId };
    await this.repository.createAsync(chapter);
    return map<ChapterBson, Chapter>(chapter);
  }
  async updateAsync(req: UpdateChapter): Promise<Chapter> {
    const chapter: ChapterBson = { _id: new ObjectId(req._id), name: req.name, story: req.story, date: new Date(req.date), worldId: "" };
    await this.repository.updateAsync(chapter);
    return map<ChapterBson, Chapter>(chapter);
  }
  async deleteAsync(id: string): Promise<boolean> {
    return await this.repository.deleteAsync(new ObjectId(id));
  }
}
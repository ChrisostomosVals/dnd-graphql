import { Db, ObjectId } from "mongodb";
import { ChapterBson } from "../types/chapter.bson";

export class ChapterRepository {
  private readonly db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  async getAsync(): Promise<ChapterBson[]> {
    const chapters = this.db.collection<ChapterBson>('chapters');
    const cursor = chapters.find({});
    return await cursor.toArray();
  }

  async getByIdAsync(id: string): Promise<ChapterBson | null> {
    const chapters = this.db.collection<ChapterBson>('chapters');
    return await chapters.findOne({ _id: new ObjectId(id) });
  }

  async createAsync(chapter: ChapterBson): Promise<void> {
    const chapters = this.db.collection<ChapterBson>('chapters');
    await chapters.insertOne(chapter);
  }

  async updateAsync(chapter: ChapterBson): Promise<ChapterBson | null> {
    const chapters = this.db.collection<ChapterBson>('chapters');
    return await chapters.findOneAndUpdate(
      { _id: chapter._id },
      { $set: { Name: chapter.name, Story: chapter.story, Date: chapter.date } }
    );
  }

  async deleteAsync(id: ObjectId): Promise<boolean> {
    const chapters = this.db.collection<ChapterBson>('chapters');
    const deleted = await chapters.deleteOne({ _id: id });
    return deleted.deletedCount > 0;
  }
}

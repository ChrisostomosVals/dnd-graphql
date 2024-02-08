import { Db, ObjectId } from "mongodb";
import { ClassCategoryBson } from "../types/classCategory.bson";

export class ClassCategoryRepository {
    private readonly db: Db;
  
    constructor(db: Db) {
      this.db = db;
    }
  
    async getAsync(): Promise<ClassCategoryBson[]> {
      const classCategories = this.db.collection<ClassCategoryBson>('classCategories');
      const cursor = classCategories.find({});
      return await cursor.toArray();
    }
  
    async getByIdAsync(id: string): Promise<ClassCategoryBson | null> {
      const classCategories = this.db.collection<ClassCategoryBson>('classCategories');
      return await classCategories.findOne({ _id: new ObjectId(id) });
    }
  
  }
  
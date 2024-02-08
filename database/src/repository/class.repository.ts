import { Db, ObjectId } from "mongodb";
import { ClassBson } from "../types/class.bson";

export class ClassRepository {
    private readonly db: Db;
  
    constructor(db: Db) {
      this.db = db;
    }
  
    async getAsync(): Promise<ClassBson[]> {
      const classes = this.db.collection<ClassBson>('classes');
      const cursor = classes.find({});
      return await cursor.toArray();
    }
  
    async getByIdAsync(id: string): Promise<ClassBson | null> {
      const classes = this.db.collection<ClassBson>('classes');
      return await classes.findOne({ _id: new ObjectId(id) });
    }
  
  }
  
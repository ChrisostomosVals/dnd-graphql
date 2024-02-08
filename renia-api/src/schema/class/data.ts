import { ClassRepository } from "../../../../database/src/repository";
import { Db } from "mongodb";
import { Class } from "./model";
import { map } from "../../mapper";
import { ClassBson } from "../../../../database/src/types";

export class ClassService {
  private repository: ClassRepository;

  constructor(db: Db) {
    this.repository = new ClassRepository(db);
  }

  async getAll(): Promise<Class[]> {
    const classes = await this.repository.getAsync();
    return classes.map(map<ClassBson, Class>);
  }

  async getByIdAsync(id: string): Promise<Class | null> {
    const findClass = await this.repository.getByIdAsync(id);
    if(!findClass) return null;
    return map<ClassBson, Class>(findClass);
  }
}
